import React from "react";
import Title from "../layouts/Title";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <section
      id="contacts"
      className="w-full h-[800px] pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact With Me" />
      </div>

      <div className="flex flex-col lg-flex-row">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

export default Contact;
