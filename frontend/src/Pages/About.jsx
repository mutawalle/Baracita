import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Footer, Tentang } from '../Components';
import Navbar from '../Components/Navbar';

export default function About() {
  return <Fragment>
            <Navbar/>
            <Tentang/>
            <Footer/>
        </Fragment>;
}
