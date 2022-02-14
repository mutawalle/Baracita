import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Footer, Navbar, Tutors } from '../Components';

export default class Tutor extends Component {
  render() {
    return <Fragment>
        <Navbar/>
        <Tutors/>
        <Footer/>
    </Fragment>;
  }
}
