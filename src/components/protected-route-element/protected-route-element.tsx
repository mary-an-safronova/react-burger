import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { PATH } from "../../utils/api";

interface ProtectedRouteElementProps {
    element: JSX.Element;
}

const ProtectedRouteElement = ({ element }: ProtectedRouteElementProps) => {
    const location = useLocation();
    const auth = useSelector((state) => state.auth.auth);

    return( auth ? element : <Navigate to={PATH.LOGIN} state={{ from: location }} />)
}

export default ProtectedRouteElement;