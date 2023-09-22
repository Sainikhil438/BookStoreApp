import { useLocation } from "react-router-dom";
import HeaderBar from "../Dashboard/HeaderBar";


export const ConditionalNavBar=()=>{
    const location = useLocation();
    const excludepaths = ['/signup','/'];

    if(excludepaths.includes(location.pathname)){
        return null;
    }
    return <HeaderBar/>
}