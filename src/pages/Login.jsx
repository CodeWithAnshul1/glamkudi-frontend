import React, { useState } from "react";
import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
     <>
    <main className="min-h-screen  bg-[#fffdf9] flex items-center justify-center px-5 py-12">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full bg-[#f7e9df] blur-3xl opacity-70" />

        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#ffd9ad] blur-3xl opacity-50" />

      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-[470px]">

        {/* Logo */}
        {/* <div className="flex justify-center mb-8">

          <div className="flex items-center gap-2">

            <div className="w-[42px] h-[42px] rounded-lg bg-[#bd5d3c] flex items-center justify-center">
              <span className="text-white text-[28px] font-serif italic font-bold">
                G
              </span>
            </div>

            <span className="text-[#302723] text-[30px] font-serif font-bold">
              glamkudi
            </span>

          </div>

        </div> */}


        {/* Back */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 text-sm text-[#756d68] hover:text-[#bd5d3c] transition mb-5"
        >
          <FiArrowLeft size={17} />
          Back to profile
        </button>


        {/* Card */}
        <div className="
          bg-[#fffaf5]
          border border-[#e9e3dc]
          rounded-[28px]
          px-7 sm:px-10
          py-9 sm:py-11
          shadow-[0_20px_60px_rgba(48,39,35,0.08)]
        ">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs tracking-[0.22em] font-semibold text-[#bd5d3c]">
              WELCOME BACK
            </p>

            <h1 className="
              mt-3
              font-['Playfair_Display']
              text-[38px] sm:text-[44px]
              leading-tight
              font-semibold
              text-[#302723]
            ">
              Welcome back.
            </h1>

            <p className="mt-3 text-sm sm:text-[15px] leading-6 text-[#756d68]">
              Sign in to continue your GlamKudi journey.
            </p>

          </div>
hj

          {/* Form */}
          <form className="mt-8">

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-[#302723] mb-2">
                Email address
              </label>

              <div className="
                flex items-center
                h-[52px]
                rounded-xl
                border border-[#ded6cf]
                bg-white
                focus-within:border-[#bd5d3c]
                focus-within:ring-2
                focus-within:ring-[#bd5d3c]/10
                transition
              ">

                <FiMail
                  size={19}
                  className="ml-4 text-[#9b8d85]"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full h-full
                    px-3
                    bg-transparent
                    outline-none
                    text-sm
                    text-[#302723]
                    placeholder:text-[#aaa09a]
                  "
                />

              </div>

            </div>


            {/* Password */}
            <div className="mt-5">

              <label className="block text-sm font-semibold text-[#302723] mb-2">
                Password
              </label>

              <div className="
                flex items-center
                h-[52px]
                rounded-xl
                border border-[#ded6cf]
                bg-white
                focus-within:border-[#bd5d3c]
                focus-within:ring-2
                focus-within:ring-[#bd5d3c]/10
                transition
              ">

                <FiLock
                  size={18}
                  className="ml-4 text-[#9b8d85]"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="
                    w-full h-full
                    px-3
                    bg-transparent
                    outline-none
                    text-sm
                    text-[#302723]
                    placeholder:text-[#aaa09a]
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="mr-4 text-[#9b8d85] hover:text-[#302723] transition"
                >
                  {showPassword ? (
                    <FiEyeOff size={19} />
                  ) : (
                    <FiEye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mt-5">

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-[#bd5d3c] w-4 h-4"
                />

                <span className="text-xs sm:text-sm text-[#756d68]">
                  Remember me
                </span>

              </label>


              <button
                type="button"
                className="text-xs sm:text-sm font-semibold text-[#bd5d3c] hover:text-[#a94f32]"
              >
                Forgot password?
              </button>

            </div>


            {/* Sign In */}
            <button
              type="submit"
              className="
                group
                w-full
                h-[52px]
                mt-7
                rounded-xl
                bg-[#bd5d3c]
                text-white
                font-semibold
                flex items-center justify-center gap-2
                hover:bg-[#a94f32]
                transition
                shadow-[0_8px_24px_rgba(189,93,60,0.20)]
              "
            >

              Sign in

              <FiArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </form>


          {/* Create Account */}
          <div className="text-center mt-7">

            <p className="text-sm text-[#756d68]">

              Don't have an account?

              <button
                onClick={() => navigate("/signup")}
                className="ml-1 font-semibold text-[#bd5d3c] hover:text-[#a94f32]"
              >
                Create account
              </button>

            </p>

          </div>


          {/* Bottom divider */}
          <div className="flex items-center gap-4 mt-8">

            <div className="flex-1 border-t border-dotted border-[#ded6cf]" />

            <span className="text-[11px] text-[#aaa09a]">
              GLAMKUDI
            </span>

            <div className="flex-1 border-t border-dotted border-[#ded6cf]" />

          </div>

        </div>


        {/* Bottom text */}
        <p className="text-center text-xs text-[#aaa09a] mt-6">
          Thoughtfully chosen for every version of you.
        </p>

      </div>
     

    </main>
     <Footer/>
    </>
  );
}