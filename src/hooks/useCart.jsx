import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";


const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    
    queryFn: async () => {
      if (!user) return [];
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};
export default useCart;
