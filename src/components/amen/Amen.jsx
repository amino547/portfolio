import "./amen.scss";
import { motion } from "framer-motion";

// Declare textVariants correctly, with staggerChildren in child elements
const textVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1, // Added to ensure child elements stagger properly
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat:Infinity
        }
    },
};

const textChildVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            

        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
       
    },
    animate: {
        x: "-220%",
        
        transition: {
            repeat:Infinity,
            repeatType:"mirror",
            duration: 20,
            
        }
    },
   

        };
    


const Amen = () => {
  // Function to handle the "See the Latest Works" button click
  const handleClickLatestWorks = () => {
    // Add logic for viewing the latest works, e.g., navigate to another page or show a modal.
    console.log("Viewing latest works...");
  };

  // Function to handle the "Contact Me" button click
  const handleClickContactMe = () => {
    // Add logic for contacting you, e.g., open an email client or show a contact form.
    console.log("Contacting...");
  };

  return (
    <div className="amen">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textChildVariants}>AMEN ALLAH GHARBI</motion.h2>
          <motion.h1 variants={textChildVariants}>Web Developer and CyberSecurity</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textChildVariants} onClick={handleClickLatestWorks}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textChildVariants} onClick={handleClickContactMe}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll to see more" className="scrollImage" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Read no life without work and diligence
      </motion.div>
      <div className="imageContainer">
        <img src="/D.jpg" alt="Amen Allah Gharbi" />
      </div>
    </div>
  );
};

export default Amen;


