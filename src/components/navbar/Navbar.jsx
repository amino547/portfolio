import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        {/* Animation on the text "Amen Allah" */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Deep Web
        </motion.span>
        
        {/* Social media links with images */}
        <div className="social">
          <a href="https://www.facebook.com/share/14VhoiCFqF/?mibextid=LQQJ4d" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook logo" />
          </a>
          <a href="instagram" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram logo" />
          </a>
          <a href="youtube" aria-label="YouTube">
            <img src="/youtube.png" alt="YouTube logo" />
          </a>
          <a href="dribbble" aria-label="Dribbble">
            <img src="/dribbble.png" alt="Dribbble logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
