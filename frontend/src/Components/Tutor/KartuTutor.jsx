import React from 'react';

export default function KartuTutorUnggulan(props) {
  return <div className='m-2 bg-info kartuTutor' style={{width: '180px', height: '240px', borderRadius: '1rem', overflow: 'hidden'}}>
      <img src={props.gambar} alt="" className='bg-danger' style={{width: '100%', height: '60%'}}/>
      <div className='p-1' style={{lineHeight: '1'}}>
        <span>{props.nama}</span><br/>
        <span>{props.bidang}</span>
      </div>
  </div>;
}
