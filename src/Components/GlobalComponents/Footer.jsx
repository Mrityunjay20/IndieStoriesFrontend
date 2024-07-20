import logo from "../../assets/HorizontalLogo.png";
import { socialMediaLinks, footerInformation,footerDiscover } from "../../constants"

export default function Footer(){
    return(<>
    <div className="footer-top flex justify-evenly text-black bg-white p-10">
        <div className="w-40">
            <img src={logo}></img>
            <p className="text-xs font-bold leading-6">Sector D, Pocket-6, Vasant Kunj, New Delhi, India 110070</p>
        </div>

        <div><h2 className={`text-xl font-medium py-5 text-center text-customBrown`}  >Information</h2>
            <ul className="space-y-1 text-center text-sm font-bold">
                {footerInformation.map((link, index) => (
                <li key={index}>
                <a href={link.href}>{link.name}</a>
                </li>
                ))}
            </ul>
        </div>

        <div><h2 className={`text-xl font-medium py-5 text-center text-customBrown`}  >Discover</h2>
            <ul className="space-y-1 text-center text-sm font-bold">
                {footerDiscover.map((link, index) => (
                <li key={index}>
                <a href={link.href}>{link.name}</a>
                </li>
                ))}
            </ul>
        </div>
        <div className="socialLogo flex justify-start space-x-8 pt-16 py-4 ">
                {socialMediaLinks.map((social, index) => (
                    <a key={index} href={social.href} className="flex text-customBrown items-center justify-center w-8 h-8 rounded-full bg-black text-white transform transition-transform duration-300 ease-in-out hover:scale-125">
                    <i className={social.iconClass}></i>
                    </a>
            ))}
         </div>

    </div>

    <div className="footer-bottom bg-customBlue text-white flex justify-between px-32 py-6">
        <h2 className="text-xs font-medium">© 2024 IndieStori - IndieStori . All rights reserved.</h2>
        <div className="space-x-8 text-2xl">
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-cc-discover"></i>
            <i class="fa-brands fa-cc-apple-pay"></i>
        </div>
    </div>
    </>)
}