import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { motion } from "framer-motion";
import userApi from "../api/module/user.api";
import { auth } from "../firebase";

// Define types for response data from API
interface ApiResponse {
  error: boolean;
  user: {
    username: string;
    email: string;
  };
  accessToken: string;
  message: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userData: { username: string; email: string }) => void; // Updated to take an object
}

const AuthModal = ({ isOpen, onClose, onLoginSuccess }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState(""); // New state to store the username after login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // Gọi API backend để đăng nhập
        const response = (await userApi.signin(
          email,
          password
        )) as unknown as ApiResponse;
        console.log("userData: ", response);

        // Lưu token vào localStorage nếu đăng nhập thành công qua API backend
        if (response && !response.error) {
          localStorage.setItem("token", response.accessToken);
          setUsername(response.user.username); // Set username state
          onLoginSuccess({
            username: response.user.username,
            email: response.user.email,
          }); // Pass both username and email
          onClose();
        } else {
          setError("Authentication failed. Please try again.");
        }
      } else {
        // Firebase authentication khi đăng ký
        await createUserWithEmailAndPassword(auth, email, password);
        onClose();
      }
    } catch (err) {
      setError("Authentication failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const idToken = credential?.idToken;
      console.log("ID Token:", idToken);

      const response = await userApi.googleSignin(idToken);
      console.log("Google Sign-In Response:", response);
      if (response.data && !response.data.error) {
        setUsername(response.data.user.username);
        onLoginSuccess({
          username: response.data.user.username,
          email: response.data.user.email,
        });
        onClose();
      }
    } catch (error) {
      console.error("Google sign in error:", error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {isLogin ? "Welcome back" : "Create Account"}
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-2 text-sm text-red-600">{error}</p>
                  )}

                  <div className="mt-6 space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="w-full border border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50"
                    >
                      Continue with Google
                    </motion.button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-4 text-sm text-blue-600 hover:text-blue-500"
                  >
                    {isLogin
                      ? "Need an account? Sign up"
                      : "Already have an account? Sign in"}
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthModal;
