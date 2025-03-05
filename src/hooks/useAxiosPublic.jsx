import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://abryonix-server-1uctzzta1-atef-abrars-projects.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
