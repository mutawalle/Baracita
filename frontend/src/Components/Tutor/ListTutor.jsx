import React, { Component } from 'react';
import KartuTutor from './KartuTutor'
import axios from "axios";

export default class ListTutor extends Component {
  constructor(props) {
    super(props)
    this.state = { tutors: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/listTutor').then( res => {
                this.setState({ tutors: res.data })
            }).catch( err  => {
                console.log('error');
    })
  }
  render() {
    return <div>
        <br /><h4 className='ms-5'>TPS</h4>
        <div className='d-flex justify-content-evenly flex-wrap'>
            {
              this.state.tutors.filter(tutor => tutor.kategori === 'tps')
              .map( (tutor,index) => { return <KartuTutor key={index} nama={tutor.nama} bidang={tutor.bidang} gambar={tutor.jeniskelamin === "P" ? "Assets/female.png" : "Assets/male-student.png"}/> })
            }
        </div>
        <br /><h4 className='ms-5'>Saintek</h4>
        <div className='d-flex justify-content-evenly flex-wrap'>
            {
              this.state.tutors.filter(tutor => tutor.kategori === 'saintek')
              .map( (tutor,index) => { return <KartuTutor key={index} nama={tutor.nama} bidang={tutor.bidang} gambar={tutor.jeniskelamin === "P" ? "Assets/female.png" : "Assets/male-student.png"}/> })
            }
        </div>
        <br /><h4 className='ms-5'>Soshum</h4>
        <div className='d-flex justify-content-evenly flex-wrap'>
            { 
              this.state.tutors.filter(tutor => tutor.kategori === 'soshum')
              .map( (tutor,index) => { return <KartuTutor key={index} nama={tutor.nama} bidang={tutor.bidang} gambar={tutor.jeniskelamin === "P" ? "Assets/female.png" : "Assets/male-student.png"}/> })
            }
        </div>
    </div>;
  }
}
