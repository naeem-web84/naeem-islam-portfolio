import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Works from '../Works/Wroks';
import ContactCard from '../ContactCard/ContactCard';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <section id="hero"><Banner /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Works /></section>
      <section id="contact"><ContactCard /></section>
      <Footer />
    </div>
  );
};

export default Home;
