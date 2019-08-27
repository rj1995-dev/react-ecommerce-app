import React from "react";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";
export default function ContactPage() {
  return (
    <>
      <Hero img={contactBcg} />
      <Contact />
    </>
  );
}
