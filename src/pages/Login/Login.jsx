import { Fade } from "react-awesome-reveal";
import { BsRobot } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogIn from "../../components/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {

        Swal.fire({
          title: "Login Successful",
          background: "#6b21a8",
          color: "#fff",
          confirmButtonColor: "#3b0764",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed. Please Try Again",
          background: "#6b21a8",
          color: "#fff",
          confirmButtonColor: "#3b0764",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
      });
  };

  return (
    <Fade>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#250038] to-black p-4">
        <ToastContainer></ToastContainer>
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
              <GoogleLogIn></GoogleLogIn>
            </div>

            {/* OR Divider */}
            <div className="divider my-6">OR</div>

            {/* Manual Login */}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full mb-3 bg-transparent"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full mb-3 bg-transparent"
              />
              <button className="btn bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white w-full">
                Login
              </button>
            </form>
            <p className="mt-4">
              Dont have an Account?{" "}
              <span className="text-purple-600 font-bold hover:underline">
                <Link to={"/register"}>Register Now</Link>
              </span>
            </p>
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
