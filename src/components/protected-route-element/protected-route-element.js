import { Navigate } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { useLocation } from "react-router-dom";
import { PATH } from "../../utils/api";

const ProtectedRouteElement = ({ element }) => {
    const location = useLocation();
    const auth = useSelector((state) => state.auth.auth);

    return auth ? element : <Navigate to={PATH.LOGIN} state={{ from: location }} />;
}

export default ProtectedRouteElement;