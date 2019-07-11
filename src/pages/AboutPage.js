import React, { Fragment } from 'react';
import aboutBcg from '../images/aboutBcg.jpeg';
import Hero from '../components/Hero';
import Info from '../components/AboutPage/Info';

export default function AboutPage() {
  return (
    <Fragment>
      <Hero img={aboutBcg} />
      <Info />
    </Fragment>
  );
}
