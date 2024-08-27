// Import styles
import styles from "./Accordion.module.css";

// Import Accordion component from "@/components/Questions/Accordion"
import Accordion from "@/components/Questions/Accordion";


export default function Questions() {

  return (
    
    <>
      {/* FAQ container */}
      <div className={styles.faq}>
        {/* Heading */}
        <h1>Frequently asked questions</h1>
      </div>
      {/* Accordion container */}
      <div>
        <Accordion
          title="What is my eligibility to book a car?"
          content="You should be of 18 years old or above and you must possess a valid driving license."
        />

        <Accordion title="Can i book for any period of time?" content="Nil" />

        <Accordion title="Can i opt car for a longer period?" content="Nil" />

        <Accordion title="Can i book one-way trip?" content="Nil" />

        <Accordion
          title="Is there home delivery option available?"
          content="Nil"
        />
        <Accordion title="How can i make the payment?" content="Nil" />
      </div>
    </>
  );
}
