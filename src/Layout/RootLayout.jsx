import { Outlet } from "react-router";
import Footer from "../Components/GlobalComponents/Footer";
import NavBar from "../Components/GlobalComponents/Navbar";

export default function Rootlayout(){

    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}