import React from 'react';

export default function Footer() {
  return <div className='text-center text-light d-flex justify-content-between align-items-center ps-5 pe-5 pt-3 pb-3' style={{backgroundColor: '#14213d'}}>
      <a href="https://www.flaticon.com/free-icons/male" title="male icons" style={{width: '30%', fontSize: '0.8rem', textDecoration: 'none', color: 'white'}}>Male and Female icons created by Aficons studio - Flaticon</a>
      <div className='d-flex justify-content-center align-items-center' style={{width: '30%'}}>
        <div className='d-flex align-items-center justify-content-center m-2' style={{width: '3.2rem', height: '3.2rem', backgroundColor: '#cedeeb', borderRadius: '50%'}}>
          <img src="Assets/logo.png" alt="" style={{width: '2.5rem'}}/>
        </div>
        Baracita
      </div>
      <div className='d-flex justify-content-center align-items-center' style={{width: '30%'}}>
        <ul className='me-3'>
          <li>Kegiatan</li>
          <li>Kegiatan</li>
          <li>Kegiatan</li>
        </ul>
        <ul>
          <li><a href="#email" style={{color: 'white'}} target={'_blank'} rel="noreferrer"><i className="far fa-envelope"></i></a></li>
          <li><a href="https://instagram.com/baracitaid" style={{color: 'white'}} target={'_blank'} rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/baracitaid" style={{color: 'white'}} target={'_blank'} rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC4a2m3Ynh7CMWSlNyKhafyQ" style={{color: 'white'}} target={'_blank'} rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>
  </div>;
}
