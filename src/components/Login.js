import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

  
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg"
          alt="Netflix Background"
        />
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

    
      <div className="flex justify-center items-center min-h-screen">
        <form className="w-full max-w-sm p-12 bg-black bg-opacity-80 text-white rounded">
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded"
            />
          )}

          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />

          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered ? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
