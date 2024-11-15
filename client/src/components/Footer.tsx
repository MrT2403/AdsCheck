import React from "react";

export function Footer() {
  return (
    <footer className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">SMIT</h3>
            <p className="mt-2 ">Digital solutions for modern businesses</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="mailto:info@smit.vn" className="">
                  info@smit.vn
                </a>
              </li>
              <li className="">123 Business Street</li>
              <li className="">Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="">
                Facebook
              </a>
              <a href="#" className="">
                LinkedIn
              </a>
              <a href="#" className="">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-8">
          <p className="text-center">
            © {new Date().getFullYear()} SMIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
