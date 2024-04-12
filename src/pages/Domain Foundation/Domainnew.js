import React from "react";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import "./Domainnew.css";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.8 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function Domainnew() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const [isOpen2, setIsOpen2] = useState(false);
  const scope2 = useMenuAnimation(isOpen2);

  return (
    <div>
    
    <nav className="menu" ref={scope}>
      <div
        style={{
          position: "fixed",
          bottom: -210,
          left: 200,
          width: 100,
          height: 100,
          background: "white",
        }}
      />
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Hexaware Standard Sessions
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
  
        <li><a href="https://your-link.com" style={{ color: "White"}}>HLS Overview</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>Health data 101 </a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>Payer 101</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>HIPAA Workforce Basics</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>IT Security and Data Privacy</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>Fundamentals Of Insurance 1</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>Fundamentals Of Insurance 1</a></li>
        

      </ul>{" "}
    </nav>
    <nav className="menu1" ref={scope2}>
    <div
      style={{
        position: "fixed",
        bottom: -210,
        left: 200,
        width: 100,
        height: 100,
        background: "white",
      }}
    />
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsOpen2(!isOpen2)}
    >
      ACFC Specific Training Sessions
      <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
        <svg width="15" height="15" viewBox="0 0 20 20">
          <path d="M0 7 L 20 7 L 10 16" />
        </svg>
      </div>
    </motion.button>
    <ul
      style={{
        pointerEvents: isOpen2 ? "auto" : "none",
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
    >
       <li><a href="https://your-link.com" style={{ color: "White"}}>Medicaid 101</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>HIE 101 </a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>CCD 101</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>PBM 101</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>FHIR 101</a></li>
        <li><a href="https://your-link.com" style={{ color: "White"}}>Healthcare Payer Data & Analytics 101</a></li>

    </ul>{" "}
  </nav>
  </div>
   
  );
}
