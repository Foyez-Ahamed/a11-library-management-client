import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

const Login = () => {

    // const {userLogin} = useAuth();
    
    const [displayPassIcon, setDisplayPassIcon] = useState(false)

    return (
        <div className="mt-16">
        <div className="flex justify-center items-center">
          <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] bg-slate-100 rounded-xl">
            {/* bg-gradient-to-r from-gray-500 to-blue-500 */}
            <div>
              <h1 className="text-center font-medium text-3xl mb-6">
                {" "}
                Login Here Please{" "}
              </h1>
            </div>
  
            <form>
              <div className="relative">
                <label htmlFor="email" className="font-medium ">Email </label> <br />
                <input
                  type="email"
                  placeholder="enter your email..."
                  name="email"
                  required
                  className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                />{" "}
                <br />
                <label htmlFor="password" className="font-medium">Password</label> <br />
                <input
                  type={displayPassIcon ? 'text' : 'password'}
                  placeholder="enter your password"
                  required
                  name="password"
                  className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
                />
                <br />

                <span
                  onClick={() => setDisplayPassIcon(!displayPassIcon)}
                  className="cursor-pointer absolute right-[10px] top-[160px]"
                >
                  {displayPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>

                <h1 className="mt-3 font-medium cursor-pointer">
                  Remember password ?{" "}
                </h1>
                <input
                  type="submit"
                  value="Login"
                  className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#0087EB] text-white hover:bg-slate-900"
                />
              </div>
            </form>
  
            <button className=" bg-[#0087EB] hover:bg-slate-900 flex gap-2 justify-center items-center w-full py-3 rounded-md mt-5 text-white text-[15px] font-medium uppercase">
              Google Login<FcGoogle className="text-xl"></FcGoogle>
            </button>
  
            <div className="mt-5">
              <p>
                Do not have an account ?{" "}
                <Link
                  to="/register"
                  className="text-bold text-[#1877F2] text-md uppercase underline"
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;