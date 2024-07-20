import { buttons1, buttons2, socialMediaLinks} from "../../constants";
import logo from "../../assets/HorizontalLogo.png";
export default function NavBar(){

    return(
    <>
    <p className="header-top font-bold bg-pink-500 text-white py-2 px-3 text-center">Free Shipping on all orders above INR 999!  </p>
    
    <div className="px-16 py-4 flex w-max mx-auto">
        {/* <div className="socialLogo flex justify-start space-x-2 pt-4">
                {socialMediaLinks.map((social, index) => (
                    <a key={index} href={social.href} className="flex items-center justify-center w-7 h-7 rounded-full bg-customBrown text-white transform transition-transform duration-100 ease-in-out hover:bg-pink-500">
                    <i className={social.iconClass}></i>
                    </a>
            ))}
         </div> */}
        {/* <div></div> */}
        {buttons1.map((button, index) => (
          <a className="px-4 mx-2 text-lg font-semibold text-customBrown w-max flex items-center transform transition-transform duration-300 ease-in-out hover:scale-125" key={index} href={button.link}>{button.name}</a>
        ))}
        <img className="h-24 mx-auto" src={logo}></img>
        {buttons2.map((button, index) => (
          <a className="px-4 mx-2 text-lg font-semibold text-customBrown w-max flex items-center transform transition-transform duration-300 ease-in-out hover:scale-125" key={index} href={button.link}>{button.name}</a>
        ))}
        <button><i className="fa-solid px-2 fa-magnifying-glass text-customBrown"></i></button>
    </div>
    </>
    );
}