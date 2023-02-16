import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Team from "@/components/team";
import Especialties from "@/components/especialties";
import Hero from "@/components/hero";

import HeroImage from "@/../public/hero.jpg";

const LandingPage = () => {
  return (
    <>
      <Hero
        title={"Kleiton Boschi"}
        subtitle={"Cirurgião plástico"}
        imageUrl={HeroImage}
      />

      <Team />

      <Divider />

      <Especialties />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.565489816725!2d-34.90948106044919!3d-8.087061799999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f9f3c1cfa6f%3A0x34042c1f062ddffa!2sDr.%20Kleiton%20Boschi!5e0!3m2!1spt-BR!2sbr!4v1676577489796!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer />
    </>
  );
};

export default LandingPage;
