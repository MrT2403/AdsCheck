import privateClient from "../client/private.client.js";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  googleSignin: "user/google-signin",
};

const userApi = {
  signin: async (email, password) => {
    try {
      const response = await privateClient.post(userEndpoints.signin, {
        email,
        password,
      });
      console.log("ressss: ", response);
      return response;
    } catch (error) {
      console.error("userAPI error: ", error);
      throw error;
    }
  },

  signup: async (username, email, password) => {
    try {
      const response = await privateClient.post(userEndpoints.signup, {
        username,
        email,
        password,
      });
      return response;
    } catch (error) {
      console.error("userAPI error: ", error);
      throw error;
    }
  },
  googleSignin: async (idToken) => {
    try {
      const response = await privateClient.post(userEndpoints.googleSignin, {
        idToken,
      });
      return response;
    } catch (error) {
      console.error("userAPI error: ", error);
      throw error;
    }
  },
};

export default userApi;
