import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";

// react icons
// import { BsEye } from "react-icons/bs";
// import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-violet-50 p-8">
      <div className="flex flex-row justify-center items-center space-x-2 mb-6">
        <div>
          <BsFillChatTextFill className="text-2xl text-indigo-400" />
        </div>
        <div className="text-2xl font-bold text-gray-700">ChatApp</div>
      </div>

      <div className=" flex flex-col justify-center items-center mb-6">
        <h1 className="font-bold">Sign in</h1>
        <p className="text-gray-400">sign in to use the App</p>
      </div>
      <form className="w-[1/3] md:w-[30%] rounded-lg mb-8 p-8 bg-white">
        <div className="w-full flex flex-col">
          <div>
            <label className="text-gray-500 mb-2">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="flex flex-row mb-4">
              <div className="w-10 border-1 border-gray-300 flex justify-center items-center">
                <FaRegEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-[100%] h-8 border border-gray-300 p-4"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <label className="text-gray-500 mb-2">
              <span className="label-text font-medium">Password</span>
            </label>
            {/* add the functionality for forgot password */}
            <p className="cursor-pointer text-sm  text-gray-400">
              Forgot Password?
            </p>
          </div>
          <div className="flex flex-row mb-4">
            <div className="w-10 border-1 border-gray-300 flex justify-center items-center">
              <MdLockOutline className="text-gray-500" />
            </div>
            <input
              placeholder="Enter Password"
              className="w-[100%] h-8 border border-gray-300 p-4"
            />
          </div>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"></span>

          {/* add the functionality for remember me */}
          <div className="flex flex-row mb-4">
            <input type="checkbox" name="" id="" className="mr-2" />
            <p className="font-medium text-gray-600 text-sm">Remember Me</p>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-400 text-white h-10 cursor-pointer rounded-md">
            Sign in
          </button>
        </div>
      </form>
      <div className="">
        {/* add link to lead to the sign up page */}
        <p>
          Don&apos;t have an account ?{" "}
          <span className="text-indigo-500 cursor-pointer">Signup now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
