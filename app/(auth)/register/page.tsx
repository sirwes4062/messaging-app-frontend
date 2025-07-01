import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";

const Register = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-violet-50 p-8">
      <div className="flex flex-row justify-center items-center space-x-2 mb-2">
        <div>
          <BsFillChatTextFill className="text-2xl text-indigo-400" />
        </div>
        <div className="text-2xl font-bold text-gray-700">ChatApp</div>
      </div>

      <div className=" flex flex-col justify-center items-center mb-4">
        <h1 className="font-bold">Sign Up</h1>
        <p className="text-gray-400">sign up to create an account</p>
      </div>
      <form className="bg-white w-[1/3] rounded-lg p-8 mb-8">
        <div className="flex flex-col">
          <div>
            <label className="text-gray-500 mb-2">
              <span className="label-text font-medium">Username</span>
            </label>
            <div className="flex flex-row mb-4">
              <div className="w-10 border-1 border-gray-300 flex justify-center items-center">
                <LuUserRound className="text-gray-500" />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Username"
                className="w-[100%] h-8 border border-gray-300 p-4"
              />
            </div>
          </div>
          <div>
            <label className="text-gray-500 mb-2">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="flex flex-row mb-4">
              <div className="w-10 border-1 border-gray-300 flex justify-center items-center">
                <FaRegEnvelope className="text-gray-500" />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email"
                className="w-[100%] h-8 border border-gray-300 p-4"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-500 mb-2">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="flex flex-row mb-4">
              <div className="w-10 border-1 border-gray-300 flex justify-center items-center">
                <MdLockOutline className="text-gray-500" />
              </div>
              <input
                // add state to show password
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                className="w-[100%] h-8 border border-gray-300 p-4"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-400 text-white h-10 cursor-pointer rounded-md mb-4">
            Sign Up
          </button>

          <div className="text-gray-500 flex flex-col sm:flex-row justify-center items-center space-x-2 p-2">
            <p>By registering you agree to the{"  "}</p>
            <p className="text-indigo-500 cursor-pointer text-center">
              Terms of use
            </p>
          </div>
        </div>
      </form>
      <div className="text-gray-500 flex flex-row justify-center items-center space-x-2 p-2 mb-4">
        <p>Already have an account</p>
        <p className="text-indigo-500 cursor-pointer text-center">Sign in</p>
      </div>
    </div>
  );
};

export default Register;
