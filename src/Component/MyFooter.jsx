import { FaLinkedinIn, FaInstagram, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";

const MyFooter = () => {
  const linkedinURL = "https://www.linkedin.com/in/davide-marchica/";
  const instagramURL = "https://www.instagram.com/davide_marchica/";
  const githubURL = "https://github.com/davide122";
  const phoneNumber = "3923171968";
  const whatsappNumber = "3923171968";
  const message = "Ciao! mi piace il tuo cupstone, vorrei contattarti in merito:";

  return (
    <footer className="">
       <div className="myfooter d-flex justify-content-center align-items-center">
        <a href={linkedinURL} className="icon-link">
          <FaLinkedinIn className="fs-4 mx-3" />
        </a>
        <a href={instagramURL} className="icon-link">
          <FaInstagram className="fs-4 mx-3" />
        </a>
        <a href={githubURL} className="icon-link">
          <FaGithub className="fs-4 mx-3" />
        </a>
        <a href={`tel:${phoneNumber}`} className="icon-link">
          <FaPhone className="fs-4 mx-3" />
        </a>
        <a href={`https://wa.me/${whatsappNumber}?text=${message}`} className="icon-link">
          <FaWhatsapp className="fs-3 mx-3" />
        </a>
      </div>
      <div className="a d-flex justify-content-center align-items-center">
        <span dangerouslySetInnerHTML={{ "__html": "&copy; Copyright: Davide Marchica" }} />
      </div>
    </footer>
  );
};

export default MyFooter;
