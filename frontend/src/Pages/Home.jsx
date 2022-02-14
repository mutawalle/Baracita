import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { BaracitaDesk, Footer, KartuKegiatan, LogoBaracita, Navbar, TutorUnggulans, WaBaracita, WaDesk, YoutubeBaracita, YoutubeDesk } from '../Components';
 

export default class Home extends Component {
  render() {
    return <Fragment>
                <Navbar/>
                <div id='home' className='container-fluid mt-3' style={{backgroundColor: '#FFE8C2'}}>
                  <div className='row pb-5' style={{paddingTop: '3.5rem'}}>
                    <div className='col-12 col-md-6'>
                      <BaracitaDesk/>
                    </div>
                    <div className='col-12 col-md-6'>
                      <LogoBaracita/>
                    </div>
                  </div>
                  <div className="row" style={{backgroundColor: '#FDB035'}}>
                    <div className="col-6 col-md-3">
                      <KartuKegiatan logo={<i style={{transform: 'scale(1.5)'}} className="m-3 fas fa-graduation-cap"></i>} judul={'Tutor'} desk={'ferbwefewhfgewuf wegbfueriugf iuewfiuerf'}/>
                    </div>
                    <div className="col-6 col-md-3">
                      <KartuKegiatan logo={<i style={{transform: 'scale(1.5)'}} className="m-3 fas fa-gift"></i>} judul={'Charity Event'} desk={'ferbwefewhfgewuf wegbfueriugf iuewfiuerf'}/>
                    </div>
                    <div className="col-6 col-md-3">
                      <KartuKegiatan logo={<i style={{transform: 'scale(1.5)'}} className="m-3 fas fa-gift"></i>} judul={'Video Pembelajaran'} desk={'ferbwefewhfgewuf wegbfueriugf iuewfiuerf'}/>
                    </div>
                    <div className="col-6 col-md-3">
                      <KartuKegiatan logo={<i style={{transform: 'scale(1.5)'}} className="m-3 fas fa-book"></i>} judul={'Materi UTBK'} desk={'ferbwefewhfgewuf wegbfueriugf iuewfiuerf'}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 p-0">
                      <YoutubeBaracita/>
                    </div>
                    <div className="col-12 col-md-6 p-0">
                      <YoutubeDesk/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 p-0">
                      <WaDesk/>
                    </div>
                    <div className="col-12 col-md-6 p-0">
                      <WaBaracita/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col p-0">
                      <TutorUnggulans/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col p-0">
                      <Footer/>
                    </div>
                  </div>
                </div>
                <style>
                  {`
                    @media (max-width: 768px) {
                      #home div:first-child div:last-child {
                        order: 1;
                      }

                      #home div:first-child div:first-child {
                        order: 2;
                      }

                      #home div:nth-child(4) div:first-child {
                        order: 2;
                      }

                      #home div:nth-child(4) div:last-child {
                        order: 1;
                      }
                    }
                  `}
                </style>
            </Fragment>;
  }
}
