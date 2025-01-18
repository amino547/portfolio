import { motion } from 'framer-motion'


const ToggleButton = ({ setOpen }) => {
  return (
    <button className='butt' onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox='0 0 23 23'>
        {/* First path (top bar) */}
        <motion.path 
          strokeWidth="3" 
          stroke='white' 
          strokeLinecap='round'
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" }, // horizontal line
            open: { d: "M 3 16.5 L 17 2.5" }   // diagonal line (top-left to bottom-right)
          }}
        />

        {/* Second path (middle bar) */}
        <motion.path
          strokeWidth="3"
          stroke='white'
          strokeLinecap='round'
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 }, // horizontal line
            open: { opacity: 0 },     // diagonal line (middle bar)
          }}
        />

        {/* Third path (bottom bar) */}
        <motion.path
          strokeWidth="3"
          stroke='white'
          strokeLinecap='round'
          variants={{
            closed: { d: "M 2 16.146 L 20 16.346" }, // horizontal line
            open: { d: "M 3 2.5 L 17 16.346" }     // diagonal line (bottom-left to top-right)
          }}
        
        />
      </svg>
    </button>
  )
}

export default ToggleButton

