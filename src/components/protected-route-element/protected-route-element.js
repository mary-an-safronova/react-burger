import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteElement = ({ element }) => {
    const auth = useSelector((state) => state.auth.auth);

    return auth ? element : <Navigate to="/login" replace/>;
}

export default ProtectedRouteElement;