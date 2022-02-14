import React from 'react';

export default function YoutubeBaracita() {
    const Masuk = (event) => {
      event.target.style.transform = 'translateY(-80px)'
    }

    const Keluar = (event) => {
      event.target.style.transform = 'translateY(0)'
     }

    return <div className='d-flex justify-content-center align-items-center p-3' style={{width: '100%', backgroundColor: '#fca311'}}>
      <a href='https://www.youtube.com/channel/UC4a2m3Ynh7CMWSlNyKhafyQ' target={'_blank'} rel="noreferrer" style={{display: 'block' ,minWidth: '310px',maxWidth: '50%', height: '300px', overflow: 'hidden', borderRadius: '15px', border: '5px solid #14213D'}}>
        <img src="./Assets/YoutubeBaracita.png" alt="" style={{width: '100%', transition: '1s'}} onMouseOver={Masuk} onMouseOut={Keluar}/>
      </a>
    </div>;
}
