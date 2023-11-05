import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const name = useContext(AuthContext);
    console.log(name);

    const [displayPassIcon, setDisplayPassIcon] = useState(false)

    return (
        <div className="mt-16">
      <div className="flex justify-center">
        <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-slate-100">
          <div>
            <h1 className=" font-medium text-center text-3xl mb-6">
              Register Here Please
            </h1>
          </div>

          <form>
            <div className="relative">
              <label htmlFor="name" className="font-medium ">Name</label> <br />
              <input
                type="Text"
                placeholder="enter your name..."
                name="name"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label htmlFor="photoURL" className="font-medium">Photo URL</label> <br />
              <input
                type="text"
                placeholder="Photo URL..."
                name="photoURL"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label htmlFor="email" className="font-medium ">Email</label> <br />
              <input
                type="email"
                placeholder="enter your email..."
                name="email"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label htmlFor="password" className="font-medium ">Password</label> <br />
              <input
                type={displayPassIcon ? "text" : "password"}
                placeholder="enter your password"
                required
                name="password"
                className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
              />
              <br />
              <span
                onClick={() => setDisplayPassIcon(!displayPassIcon)}
                className="cursor-pointer absolute right-[10px] top-[368px]"
              >
                {displayPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
             
              <br />
              <input
                type="submit"
                value="Register"
                className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#0087EB] text-white hover:bg-slate-900"
              />
            </div>
          </form>

          <div className="mt-5">
            <p>
              {" "}
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-bold text-[#1877F2] text-md uppercase underline"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;