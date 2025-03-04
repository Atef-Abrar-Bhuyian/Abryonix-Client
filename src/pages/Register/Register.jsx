import { Fade } from "react-awesome-reveal";
import { BsRobot } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogIn from "../../components/GoogleLogin/GoogleLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await createUser(email, password);
      await updateUserProfile(displayName, photoURL);
      
      const userInfo = { displayName, photoURL, email };
      const res = await axiosPublic.post("/create/profile/user", userInfo);
      
      if (res.data.insertedId) {
        Swal.fire({
          title: "Profile Created Successfully",
          background: "#6b21a8",
          color: "#fff",
          confirmButtonColor: "#3b0764",
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        }).then(() => {
          navigate("/");
        });
      } else {
        throw new Error("User creation failed. Please try again later.");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.message || "Registration failed. Please try again later.",
        background: "#6b21a8",
        color: "#fff",
        confirmButtonColor: "#3b0764",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
    }
  };

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
            <Link to="/" className="flex items-center text-white text-2xl font-bold">
              <BsRobot className="text-purple-500 mr-2" />
              Abryon<span className="text-purple-500">ix</span>
            </Link>
            <p className="mt-4 text-gray-400">Create an account to get started</p>

            {/* Social Signup */}
            <div className="mt-6 w-full flex flex-col gap-3">
              <GoogleLogIn />
            </div>

            {/* OR Divider */}
            <div className="divider my-6">OR</div>

            {/* Manual Signup */}
            <form onSubmit={handleRegister} className="w-full">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
                required
              />
              <input
                type="url"
                name="photoURL"
                placeholder="Your Photo URL"
                className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full mb-3 bg-transparent border-gray-600"
                required
              />
              <button className="btn btn-primary w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600">
                Register
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-4 text-gray-500">
              Already have an account?{' '}
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
