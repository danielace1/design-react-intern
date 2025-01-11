import Proptypes from "prop-types";
import { IoEyeOutline, IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormModal = ({ onClose }) => {
  const [registerForm, setRegisterForm] = useState(true);

  const handleRegisterForm = () => {
    setRegisterForm(!registerForm);
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
  };

  return (
    <div className="inset-0 md:pt-8 lg:pt-6 xl:mt-0 fixed flex items-center justify-center z-10 bg-black bg-opacity-15">
      <div className="absolute bottom-0 md:relative bg-white rounded-md shadow-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
        <div className="hidden md:block text-center px-10 py-4 font-semibold text-green-600 bg-green-500 bg-opacity-10">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 md:-top-8 xl:-top-10 right-2 md:-right-4 text-white md:text-black bg-gray-500 md:bg-gray-200 rounded-full p-1 hover:bg-gray-300"
        >
          <IoClose className="text-lg md:text-xl" />
        </button>
        <div className="mt-5 px-4 md:px-8 xl:px-10 pb-5 md:pb-10">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">
              {registerForm ? "Create Account" : "Sign In"}
            </h1>
            <h2 className="hidden md:block">
              {registerForm ? (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={handleRegisterForm}
                    className="text-blue-500 hover:cursor-pointer"
                  >
                    Sign In
                  </span>
                </>
              ) : (
                <>
                  Don’t have an account yet?{" "}
                  <span
                    onClick={handleRegisterForm}
                    className="text-blue-500 hover:cursor-pointer"
                  >
                    Create new for free!
                  </span>
                </>
              )}
            </h2>
          </div>
          <div className="mt-5 flex flex-col md:flex-row justify-between space-y-3.5 md:space-x-10">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col space-y-3"
            >
              {registerForm && (
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="FirstName"
                    className="outline-none border py-2 w-full border-gray-300 bg-gray-100 px-3 focus:border-gray-400 rounded-l"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="LastName"
                    className="outline-none border py-2 w-full border-gray-300 bg-gray-100 px-3 focus:border-gray-400 rounded-r"
                  />
                </div>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-none border py-2 border-gray-300 bg-gray-100 px-3 focus:border-gray-400 rounded"
              />
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="outline-none border w-full py-2 border-gray-300 bg-gray-100 px-3 focus:border-gray-400 rounded"
                />
                <IoEyeOutline className="absolute top-3 right-2 text-lg text-gray-500 hover:cursor-pointer" />
              </div>
              {registerForm && (
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  className="outline-none border py-2 border-gray-300 bg-gray-100 px-3 focus:border-gray-400 rounded"
                />
              )}

              <div className="xl:!mt-6">
                <div className="flex items-center justify-between w-full">
                  <Link to={"/user"} className="md:w-full">
                    <button className="py-2 px-5 md:text-center md:w-full rounded-full font-semibold bg-blue-500 hover:bg-blue-600 text-white">
                      {registerForm ? " Create Account" : "Sign in"}
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={handleRegisterForm}
                    className="text-sm underline md:hidden"
                  >
                    {registerForm ? "or, Sign in" : "or, Create Account"}
                  </button>
                </div>
                <div className="mt-7 space-y-3">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 text-center w-full rounded-md bg-transparent hover:bg-gray-100 border border-gray-300"
                  >
                    <FaFacebook className="text-xl mr-2 text-blue-500" />
                    Sign up with Facebook
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 text-center w-full rounded-md bg-transparent hover:bg-gray-100 border border-gray-300"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 128 128"
                        className="fill-current mr-2"
                      >
                        <path
                          fill="#fff"
                          d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                        ></path>
                        <path
                          fill="#e33629"
                          d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                        ></path>
                        <path
                          fill="#f8bd00"
                          d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                        ></path>
                        <path
                          fill="#587dbd"
                          d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                        ></path>
                        <path
                          fill="#319f43"
                          d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                        ></path>
                      </svg>
                    </span>
                    Sign up with Google
                  </button>
                  {!registerForm && (
                    <h5 className="text-sm font-normal hover:text-gray-900 hover:cursor-pointer text-center">
                      Forgot Password ?
                    </h5>
                  )}
                </div>
              </div>
            </form>

            <div className="w-full">
              <div className="hidden md:block mx-auto">
                <img src="/illustration.png" alt="illustration" />
              </div>
              {registerForm && (
                <div className="md:mt-10 text-center md:text-left text-xs text-gray-400">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormModal.propTypes = {
  onClose: Proptypes.func,
};

export default FormModal;
