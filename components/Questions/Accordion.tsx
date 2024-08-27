// Enable client-side rendering
"use client";

// Import React and useState hook
import React, { useState } from 'react';

import styles from './Accordion.module.css';

// Define AccordionProps interface
interface AccordionProps {
  title: string;
  content: string;
}

// Define Accordion component
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  // Initialize isOpen state with false
  const [isOpen, setIsOpen] = useState(false);

  // Define toggleAccordion function to toggle isOpen state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    console.log("Accordion state:", isOpen);
  };

  // Return Accordion component
  return (
    // Question container
    <div className={styles.question}>
       {/* Accordion button */}
      <button
        className={`${styles.accordion} ${isOpen ? styles.active : ''}`}
        onClick={toggleAccordion}
      >
        <p>{title}</p>
        {/* Toggle icon container */}
        <div className={styles.more}>
          <img src={isOpen ? 'images/xmark.svg' : 'images/plus.svg'} alt="toggle icon" />
        </div>
      </button>
      {/* Conditionally render panel if isOpen is true */}
      {isOpen && (
        // Panel container
        <div className={styles.panel}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Export Accordion component as default
export default Accordion;