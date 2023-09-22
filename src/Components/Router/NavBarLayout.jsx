import { ConditionalNavBar } from "./ConditionalNavBar";

export const NavBarLayout=({children})=>{
    return(
        <div>
            <ConditionalNavBar/>
            {children}
        </div>
    )
}