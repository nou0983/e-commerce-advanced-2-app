import { useUserCOntext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { currentUser } = useUserCOntext();

  if (!currentUser) {
    return <Navigate to="authentication" />;
  }

  return children;
};

export default Private;

