import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const GoogleLogIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result);
      const userInfo = {
        email: result?.user?.email,
        displayName: result?.user?.displayName,
        photoURL: result?.user?.photoURL,
      };
      axiosPublic.post("/create/profile/user", userInfo).then((res) => {
        console.log(res);
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
      });
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-lg font-semibold bg-purple-950 hover:bg-purple-900 transition-all duration-200 cursor-pointer "
      >
        <FcGoogle className="text-xl " />
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogIn;
