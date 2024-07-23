import { useState } from 'react';
import { socialMediaLinks } from "../constants"
import img1 from "../assets/img1.jpg";
import logo from "../assets/HorizontalLogo.png";

export default function ConnectPage(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
      };


    return(<>
    <div>
        <h1 className="text-[58px] font-semibold pt-8 text-center">Connect with us</h1>
        <p className="text-md font-semibold w-[600px] italic mx-auto p-4 text-center">Join Us To Promote And Preserve Our Ancient Heritage And Indigenous Traditions. Let’s Build A Conscious, Ethical & Sustainable Organization Together.</p>
    </div>

        {/* INFO AND FORM  */}

    <div className="flex justify-center p-8 space-x-24">

        <div className="text-md font-semibold text-customBrown ">
            <div className="flex items-center">
                <h3 className="w-36">Get In Touch </h3>
                <span className="border-customBrown bg-customBrown w-full h-[1px]"></span>
            </div>
            <div className="space-y-4">            
                <h2 className="text-3xl py-4">IndieStori Private Limited</h2>
                <p><i class="fa-solid fa-location-dot pr-6"></i>Sector D, Pocket-6, Vasant Kunj, New Delhi, India 110070</p>
                <p><i class="fa-solid fa-phone pr-4"></i>+91-9289605017</p>
                <p><i class="fa-solid fa-envelope pr-4"></i>indiestori2021@gmail.com​</p>
            </div>

            <div className="flex items-center pt-12">
                <h3 className="w-28">Follow Us </h3>
                <span className="border-customBrown bg-customBrown w-full h-[1px]"></span>
            </div>
            <div className="socialLogo flex justify-start space-x-4 space-x-6 py-4 ">
                {socialMediaLinks.map((social, index) => (
                    <a key={index} href={social.href} className="flex items-center justify-center w-8 h-8 rounded-full bg-customBrown text-white transform transition-all duration-300 ease-in-out hover:bg-black">
                    <i className={social.iconClass}></i>
                    </a>
            ))}
            </div>

        </div>

        <div className="w-[500px] p-6 ml-12 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Send us a message</h2>
            <p className="mb-6 px-4 text-black text-center">To support our mission for creating a sustainable ecosystem, connect with us.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-3 py-2 border"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 border"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    maxLength="10"
                    className="w-full px-3 py-2 border"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <small className="text-gray-500">0 of 10 max characters.</small>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Comment or Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                </div>
                <button
                type="submit"
                className=" text-customBrown text-sm py-1 px-6 border-customBrown border-2 hover:bg-customBrown hover:text-white transition rounded duration-300"
                >
                SUBMIT
                </button>
            </form>
        </div>
    </div>

    {/* Partner with us */}
    <div className='bg-customYellow'>
        <h1 className="text-[58px] font-semibold pt-8 text-center">Partner with us</h1>
        <h3 className="text-md font-semibold w-[600px] italic mx-auto p-4 text-center">We Believe In Collaboration & Not Competition</h3>
        <div className='flex p-12 justify-center space-x-24 items-center'>
            <img src={img1} className='h-48 w-48'></img>
            <div className='pl-48'>
                <p className='w-[500px] text-md font-semibold'> We would like to invite farmers, SHGs, Social welfare organizations, Communities, Corporates and any other organization who believe in our vision of creating a sustainable ecosystem for all of us in harmony with nature. We invite any organization/individual who would like to collaborate with us in our mission to produce, promote, preserve and protect the indigenous culture and traditions of Indian subcontinent so that we together can spread our message to larger communities globally. <br/><br/>
                If you believe we can bring a change together or you can add value to our mission, get in touch with us.<br/> <br/>
                    
                </p>
                <a
                    href="mailto:theindiestori@gmail.com"
                    className="text-customBrown text-sm py-1 px-6 border-customBrown border-2 hover:bg-customBrown hover:text-white transform transition-all rounded duration-300 hover:scale-110"
                    >
                    EMAIL US 
                </a>
            </div>
        </div>
    </div>

    {/* Volunteer */}

    <div >
        <h1 className="text-[58px] font-semibold pt-8 text-center">Volunteer with us</h1>
        <h3 className="text-md font-semibold w-[600px] italic mx-auto p-4 text-center">A Passionate Volunteer Can Bring Change In The Society</h3>
        <div className='flex p-12 justify-center space-x-24 items-center'>
            <img src={img1} className='h-48 w-48'></img>
            <div className='pl-48'>
                <p className='w-[500px] text-md font-semibold'> We would like invite like-minded individuals who can add value to our work through their knowledge and experience to volunteer with us. We’re currently looking for volunteers to work with us based on their interest and skills and are welcome to assist with leadership and learn the art of building an organization from scratch. You can also work with us in our community engagement projects where you will get a chance to work with the farmer, artisan and weaver communities.<br/><br/>
                If you’re unsure about what you’re good at, but you still want to help with your valuable time and energy, and believe we can add value to your life & career then you should feel free to get in touch with us, drop us a message anytime.<br/> <br/>
                    
                </p>
                <a
                    href="mailto:theindiestori@gmail.com"
                    className="text-customBrown text-sm py-1 px-6 border-customBrown border-2 hover:bg-customBrown hover:text-white transform transition-all rounded duration-300 hover:scale-110"
                    >
                    EMAIL US 
                </a>
            </div>
        </div>
    </div>

            {/* Internship program */}

    <div className='text-center bg-customYellow p-8'>
        <h1 className="text-[58px] font-semibold text-center">Internship<br/> Program</h1>
        <h3 className="text-md font-semibold w-[600px] italic mx-auto p-4 ">Explore And Learn The Art Of Building An Organization</h3>
        <p className='text-sm  font-semibold w-[700px] mx-auto'>College students looking for learning Opportunities to build their knowledge and skills along with earning a certificate do connect with us.</p>
        <p  className='text-md font-semibold w-[700px] mx-auto'>Looking for<br/>
        Some Crazy Interns<br/>
        The Misfits & the Rebels,<br/>
        The ones who see things differently<br/>
        and While some see them as the troublemakers,<br/>
        We see them as CHANGEMAKERS<br/>        
        So, if you are one of them, let us introduce ourselves.
        </p>
        
    </div>

    <div className='p-8'>
        <img src={logo} className='mx-auto h-44'></img>
        <p  className='text-md font-semibold w-[700px] mx-auto text-center'>We Are<br/>
            INDIE STORI<br/>
            A seed in the Forest, wanting to become a tree. We are<br/>
            Passionate, Creative & Committed StartUp<br/>
            Who Respect<br/>
            Humans over Degrees<br/>
            & We Value<br/>
            Purpose over Profit.<br/>
            Our sole Mission is to<br/>
            Add Value and Bring Happiness to all the lives we touch<br/>
            With a Vision of Creating a Sustainable future for all of us together<br/>
            In harmony with Nature…<br/>
            If you still feel we are the right fit for you, here is our Story..<br/>
        </p>
        <p className='w-[1100px] mx-auto p-6 text-sm font-semibold'>
        We are looking for interns to handle the following portfolios:<br/>
        <ul className='py-6 list-disc list-inside'>
            <li>Social media Management</li>
            <li>Content Management</li>
            <li>Research & Development</li>
            <li>Video Production</li>
        </ul>
        The right candidate(s) will be onboarded into our team through a selection process and a small stipend shall be paid to the deserving candidate(s) along with a certificate of internship on completion. In our internship program, we offer not only the skills to enhance the career but also a chance to learn to build an organization which very few organizations offer. If you believe we can add value to your life & career, drop us a message.<br/><br/>
        <a href="mailto:theindiestori@gmail.com"
            className="text-customBrown text-sm  py-1 px-6 border-customBrown border-2 hover:bg-customBrown hover:text-white transform transition-all rounded duration-300 hover:scale-110">
                    EMAIL US 
        </a>
        </p>
        

        

    </div>


    </>)
}