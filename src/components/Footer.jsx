// Footer.js
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className=" text-black py-4 text-center my-8">
      <div className="flex justify-center items-center mb-4">
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className=" mx-2 hover:text-gray-500"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className=" mx-2 hover:text-gray-500"
        >
          <SlSocialLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl hover:text-gray-500"
        >
          <CiTwitter size={28} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} VM vlogs. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
