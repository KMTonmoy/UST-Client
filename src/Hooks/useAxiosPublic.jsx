import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://ustserver.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;