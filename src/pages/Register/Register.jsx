import { Fade } from "react-awesome-reveal";
import { BsRobot } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Fade>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-[#1a0028] to-black p-4">
        <div className="mt-20 container mx-auto flex flex-col md:flex-row w-full max-w-3xl min-h-screen rounded-lg shadow-lg overflow-hidden bg-[#121212] backdrop-blur-md bg-opacity-80 border border-gray-700">
          {/* Image Section */}
          <div
            className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/castle-hill-with-moon-background_902338-17708.jpg')",
            }}
          ></div>

          {/* Registration Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center p-8 text-white bg-gradient-to-b from-black via-[#250038] to-black">
            <Link
              to="/"
              className="flex items-center text-white text-2xl font-bold"
            >
              <BsRobot className="text-purple-500 mr-2" />
              Abryon<span className="text-purple-500">ix</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Create an account to get started
            </p>

            {/* Social Signup */}
            <div className="mt-6 w-full flex flex-col gap-3">
              <button className="btn w-full bg-purple-950 text-white flex items-center justify-center gap-2">
                <FcGoogle className="text-lg" /> Sign up with Google
              </button>
            </div>

            {/* OR Divider */}
            <div className="divider my-6">OR</div>

            {/* Manual Signup */}
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
            />
            <input
              type="url"
              name="PhotoURL"
              placeholder="Your Photo URL"
              className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
            />
            <button className="btn btn-primary w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
              Register
            </button>

            {/* Login Link */}
            <p className="mt-4 text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 font-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Register;
