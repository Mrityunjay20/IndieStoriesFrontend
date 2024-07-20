import { buttons, socialMediaLinks} from "../../constants";
import logo from "../../assets/HorizontalLogo.png";
export default function NavBar(){

    return(
    <>
    <p className="header-top font-bold bg-pink-500 text-white py-2 px-3 text-center">Free Shipping on all orders above INR 999!  </p>
    
    <div className="px-16 py-4 flex">
        <div className="socialLogo flex justify-start space-x-2 pt-4">
                {socialMediaLinks.map((social, index) => (
                    <a key={index} href={social.href} className="flex items-center justify-center w-7 h-7 rounded-full bg-customBrown text-white transform transition-transform duration-100 ease-in-out hover:bg-pink-500">
                    <i className={social.iconClass}></i>
                    </a>
            ))}
         </div>
        <img className="h-24 mx-auto" src={logo}></img>
        <div></div>
    </div>


    <div className="header-bottom font-bold p-2 flex justify-between w-max mx-auto">
        {buttons.map((button, index) => (
          <a className="px-4 text-customBrown transform transition-transform duration-300 ease-in-out hover:scale-125" key={index} href={button.link}>{button.name}</a>
        ))}
        <button><i className="fa-solid fa-magnifying-glass text-customBrown"></i></button>
    </div>


    </>
    );
}