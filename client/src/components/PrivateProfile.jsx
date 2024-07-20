import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("heree");
  return currentUser ? <Outlet /> : <Navigate to="sign-in" />;
};

export default PrivateProfile;
