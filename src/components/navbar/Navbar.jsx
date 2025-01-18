import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        {/* Animation on the text "Deep Web" */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Deep Web
        </motion.span>

        {/* Social media links with images and animation */}
        <div className="social">
          <motion.a
            href="https://www.facebook.com/share/14VhoiCFqF/?mibextid=LQQJ4d"
            aria-label="Facebook"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/facebook.png" alt="Facebook logo" />
          </motion.a>
          <motion.a
            href="instagram"
            aria-label="Instagram"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/instagram.png" alt="Instagram logo" />
          </motion.a>
          <motion.a
            href="https://github.com/amino547"
            aria-label="github"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/github.png" alt="github logo" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/amine-allah-gharbi-60a05a344/"
            aria-label="linkedin"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/linkedin.png" alt="linkedin logo" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

