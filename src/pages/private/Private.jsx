import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { currentUser } = useUserContext();

  if (!currentUser) {
    return <Navigate to="authentication" />;
  }

  return children;
};

export default Private;

