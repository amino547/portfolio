/*import { motion } from 'framer-motion'

const variants = {
  open: {
    tranition: {
      staggerChildren: 0.1,
    },
  },

  closed: {
    tranition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },

};

const itemVariants = {
  open: {
   y: 0,
   opacity:1,
  },

  closed: {
   y: 50,
   opacity:0,
  },

};

const Links = () => {

  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

 
  return (
    <motion.div className="links" variants={variants}>{items.map((item) => (
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
        {item}
      </motion.a>
    ))}</motion.div>
  );
};

export default Links*/


import { motion } from 'framer-motion';
import { FaHome, FaBriefcase, FaFolderOpen, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    { name: "Homepage", icon: FaHome },
    { name: "Services", icon: FaBriefcase },
    { name: "Portfolio", icon: FaFolderOpen },
    { name: "Contact", icon: FaEnvelope },
    { name: "About", icon: FaInfoCircle },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.name}`}
          key={item.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon className="icon" /> {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
