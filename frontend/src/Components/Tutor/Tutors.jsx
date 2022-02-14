import React, { Component } from 'react';
import ListTutor from './ListTutor';

export default class Tutors extends Component {
  render() {
    return <div id='tutors' className='p-3' style={{backgroundColor: '#FFE8C2'}}>
        <h1 className='text-center'>Tutor</h1>
        <ListTutor/>
        <style>
            {`
                .kartuTutor div span:first-child {
                  font-family: 'Baloo Bhaijaan 2', cursive;
                  font-size: 0.8rem;
                  font-weight: bold;
                }

                .kartuTutor div span:last-child {
                  font-size: 0.8rem;
                }

                .kartuTutor:hover {
                  border: 3px solid #14213D;
                }   
            `}
        </style>
    </div>;
  }
}

