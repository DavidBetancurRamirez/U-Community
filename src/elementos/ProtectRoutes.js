import { useAuth } from "../contextos/authContext";
import { Navigate } from "react-router-dom";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"
import styled from "styled-components";

const Loader = styled.img`
    display: flex;
    justify-content: center;
    width: 200px;
    margin: 100px auto;
`;

export function ProtectedRoutes({children}) {
   const{user, loading} = useAuth()

   if(loading) return <Loader src={SpinnerLoader} alt="Loading..." />

   if(!user) return <Navigate to='/login' />

    return <>{children}</>;

}