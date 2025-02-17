import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt ,FaGithub,FaTelegram} from "react-icons/fa";

import "aos/dist/aos.css";
const ContactCard = () => {
  const handleClick = (type) => {
    switch (type) {
      case "phone":
        window.open("https://t.me/Jackkk_errr" , "_blank");
        break;
      case "email":
        window.location.href = "mailto:sengkosal023@gmail.com";
        break;
      case "github":
        window.open("https://github.com/SENG-KOSAL?tab=repositories");
        break;
      case "Telegram":
        window.open("https://t.me/Jackkk_errr", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="text-white">
      <p className="text-center max-w-lg mb-10 raleway text-white" data-aos="fade-right" data-aos-duration="2000">
      "Feel free to reach out to me through any of the contact options below. Whether you have a question, want to collaborate on a project, or just want to connect, I’m always happy to chat! You can call or message me on Telegram, send an email, or check out my GitHub for my latest projects. Let’s connect and build something great together!"
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        <div className="flex flex-col items-center cursor-pointer hover:text-indigo-400 transition-all duration-300r  " onClick={() => handleClick("phone")} data-aos="fade-down" data-aos-duration="800"> 
          <FaPhone className="text-3xl mb-2" />
          <h3 className="font-semibold">Phone Number</h3>
          <p>+855 97 992 540</p>
        </div>
        
        <div className="flex flex-col items-center cursor-pointer hover:text-indigo-400 transition-all duration-300r" onClick={() => handleClick("email")} data-aos="fade-down" data-aos-duration="1000"> 
          <FaEnvelope className="text-3xl mb-2" />
          <h3 className="font-semibold">Email Address</h3>
          <p>sengkosal023@gmail.com</p>
        </div>
        
        <div className="flex flex-col items-center cursor-pointer hover:text-indigo-400 transition-all duration-300r" onClick={() => handleClick("github")} data-aos="fade-down" data-aos-duration="1200"> 
          <FaGithub className="text-3xl mb-2" />
          <h3 className="font-semibold">Github</h3>
          <p>several projects here</p>
        </div>
        
        <div className="flex flex-col items-center cursor-pointer hover:text-indigo-400 transition-all duration-300r" onClick={() => handleClick("Telegram")} data-aos="fade-down" data-aos-duration="1400"> 
          <FaTelegram className="text-3xl mb-2" />
          <h3 className="font-semibold">Telegram</h3>
          <p>097 992 540</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
