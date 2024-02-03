import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
    const location = useLocation();
    const auth = useSelector((state) => state.auth.authState)
    if (auth === null) {
        return null
    }
    return auth ? <Outlet/> : <Navigate to ="/" replace state={{ from : location }} />
     
}

export default PrivateRoutes