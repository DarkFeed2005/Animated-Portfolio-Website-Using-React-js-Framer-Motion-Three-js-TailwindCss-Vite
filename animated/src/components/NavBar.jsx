import React,{useRef,useState} from "react";
import {motion,usecycle} from "framer-motion";
import { useDimensions } from "./data/use-dimensions";
import { sidebarVariants, menuItemVariants, navItems, navVariants } from "./data/constants";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#66c61c"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-5 left-5 z-20 w-[40px] h-[40px] bg-transparent flex items-center justify-center"
  >
    <svg width={23} height={23} viewBox="0 0 23 23">
      <Path
      variants={{
        closed: { d: "M 2 2.5 L 20 2.5" },
        open: { d: "M 3 16.5 L 17 2.5" }
      }}
      />
       <Path
       d="M 2 9.423 L 20 9.423"
      variants={{
        closed: {opacity : 1 },
        open: {opacity : 0}
      }}
      transition={{ duration: 0.1 }}
      />
      <Path
      variants={{
        closed: { d: "M 2 16.346 L 20 16.346" },
        open: { d: "M 3 2.5 L 17 16.346" }
      }}
      />
    </svg>
  </button>
);

const MenuItem = ({title,href})=>{
    return(
        <motion.li
            variants={menuItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className= "mb-4 flex items-center cursor-pointer p-2"
        >
            <span className="text-white font-bold text-2xl hover:text-primary">
                <a href={href} className="flex items-center w-full">{title}</a>
            </span>
        </motion.li>
    )

}
