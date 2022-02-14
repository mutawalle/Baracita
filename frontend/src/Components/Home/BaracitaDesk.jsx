import React from 'react';

export default function BaracitaDesk() {
  return <div className='baracitaDesk d-flex align-items-center' style={{width: '100%', height: '100%'}}>
    <div>
      <h1>
        <span className='text-danger'>
          BARA 
        </span>
        <span>
          CITA
        </span>
      </h1>
      <p>Kami merupakan wadah bagi teman-teman yang memiliki kemauan bergerak menjadi individu yang idealis, cerdas, dan ber-attitude untuk memasuki dunia perkuliahan</p>
      <div className='d-flex flex-row justify-content-start align-items-center' style={{width: '100%'}}>
        <a href="https://beacons.ai/baracitaid" target={'_blank'} rel="noreferrer" ><span className='btn text-light' style={{backgroundColor: '#14213D', fontWeight: 'bold', width: '8rem', height: '2.5rem'}}>Join Us</span></a>
        <ul className='d-flex flex-row justify-content-evenly m-0 p-0'>
          <li><a href="#email" style={{color: '#14213D'}} target={'_blank'} rel="noreferrer"><i className="far fa-envelope" style={{transform: 'scale(1.5)'}}></i></a></li>
          <li><a href="https://instagram.com/baracitaid" style={{color: '#14213D'}} target={'_blank'} rel="noreferrer"><i className="fab fa-instagram" style={{transform: 'scale(1.5)'}}></i></a></li>
          <li><a href="https://twitter.com/baracitaid" style={{color: '#14213D'}} target={'_blank'} rel="noreferrer"><i className="fab fa-twitter" style={{transform: 'scale(1.5)'}}></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC4a2m3Ynh7CMWSlNyKhafyQ" style={{color: '#14213D'}} target={'_blank'} rel="noreferrer"><i className="fab fa-youtube" style={{transform: 'scale(1.5)'}}></i></a></li>
        </ul>
      </div>
    </div>
    <style>
      {`
        .baracitaDesk i:hover {
          color: white;
        }

        .baracitaDesk div div ul {
          width: 250px;
        }

        @media (max-width: 400px) {
          .baracitaDesk div div ul {
            width: 200px;
          }
        }

      `}
    </style>
  </div>;
}
