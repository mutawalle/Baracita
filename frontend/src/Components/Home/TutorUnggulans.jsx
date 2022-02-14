import React, { Component } from 'react';
import KartuTutorUnggulan from './KartuTutorUnggulan';
import axios from 'axios';

export default class TutorUnggulans extends Component {
  constructor(props) {
    super(props)
    this.state = { tutors: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/listTutor').then( res => {
                let a = Math.floor(Math.random() * (res.data.length - 2))
                this.setState({ tutors: res.data.slice(a, a+3) })
            }).catch( err  => {
                console.log('error');
    })
  }

  render() {
    return <div className='tutorUnggulan pt-5 pb-5 text-center' style={{backgroundColor: '#fca311'}}>
      <h2>Tutor</h2>
      <div className='d-flex' style={{width: '100%', overflowX: 'scroll'}}>
        <div className='d-flex justify-content-center' style={{width: '800px'}}>
          {
            this.state.tutors.map( (tutor,index) => { return <KartuTutorUnggulan key={index} nama={tutor.nama} bidang={tutor.bidang} gambar={tutor.jeniskelamin === "P" ? "Assets/female.png" : "Assets/male-student.png"}/> })  
          }
        </div>
      </div>
      <a href="/tutor"><span className='btn text-light' style={{backgroundColor: '#14213D', fontWeight: 'bold', width: '8rem', height: '2.5rem'}}>Selengkapnya</span></a>
      <style>
        {`
          .tutorUnggulan div::-webkit-scrollbar {
            display: none;
          }
          
          .tutorUnggulan div {
            -ms-overflow-style: none; 
            scrollbar-width: none;
            justify-content: center;  
          }

          .tutorUnggulan div div div:hover {
            border: 5px solid #14213D;
          }                   
          
          @media (max-width: 768px){
            .tutorUnggulan div {
              justify-content: start;
            }
          }
        `}
      </style>
    </div>;
  }
}

