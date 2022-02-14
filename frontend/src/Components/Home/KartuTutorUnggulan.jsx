import React from 'react';

export default function KartuTutorUnggulan(props) {
  return <div className='kartuUnggulan m-2' style={{borderRadius: '1rem', overflow: 'hidden', backgroundColor: '#cedeeb'}}>
      <img src={props.gambar} alt="" className='bg-danger' style={{width: '100%', height: '65%'}}/>
      <h5>{props.nama}</h5>
      <span>{props.bidang}</span>
      <style>
        {`
          .kartuUnggulan {
            width: 250px;
            height: 300px;
            line-height: 1;
          }

          .kartuUnggulan h5 {
            font-size: 1rem;
          }

          @media (max-width: 768px){
            .kartuUnggulan {
              width: 200px;
              height: 240px;
              line-height: 1;
            }
          }
        `}
      </style>
  </div>;
}
