import { Fade } from "react-awesome-reveal";
import { BsRobot } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // Fixed import

const Login = () => {
  return (
    <Fade>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#250038] to-black p-4">
        <div className="mt-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-full rounded-lg shadow-2x">
          {/* Left Side - Login Form */}
          <div className="w-full md:w-1/2 p-10 text-white flex flex-col items-center bg-gradient-to-b from-black via-[#250038] to-black">
            <Link
              to="/"
              className="flex items-center text-white text-2xl font-bold"
            >
              <BsRobot className="text-purple-500 mr-2" />
              Abryon<span className="text-purple-500">ix</span>
            </Link>
            <p className="mt-4 text-gray-400">Sign up or Login with</p>

            {/* Login Buttons */}
            <div className="mt-6 w-full flex flex-col gap-3">
              <button className="btn w-full bg-purple-950 text-white flex items-center justify-center gap-2">
                <FcGoogle className="text-lg" /> Google
              </button>
            </div>

            {/* OR Divider */}
            <div className="divider my-6">OR</div>

            {/* Manual Login */}
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-3 bg-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-3 bg-transparent"
            />
            <button className="btn bg-gradient-to-r from-purple-600 to-indigo-500 text-white w-full">Login</button>
            <p className="mt-4">Dont have an Account? <span className="text-purple-600 font-bold  hover:underline"><Link to={"/register"}>Register Now</Link></span></p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://www.zmo.ai/wp-content/uploads/2023/01/2cb25cbe-876c-11ed-8182-0242ac110002_0-YhehaOKxS-transformed-scaled.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Login;
