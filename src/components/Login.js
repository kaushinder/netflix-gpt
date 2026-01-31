import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Login Box */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <form className="bg-black/80 p-10 w-full max-w-md rounded-md text-white shadow-2xl">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 rounded bg-[#333] focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-[#333] focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold">
            Sign In
          </button>

          {/* Help Row */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">
              Need help?
            </span>
          </div>

          {/* Signup */}
          <div className="mt-8 text-gray-400 text-sm">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer hover:underline">
              Sign up now
            </span>
          </div>

          {/* Captcha */}
          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="text-blue-500 cursor-pointer hover:underline ml-1">
              Learn more
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
