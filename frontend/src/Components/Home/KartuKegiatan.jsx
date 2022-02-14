import React from 'react';

export default function KartuKegiatan(props) {
  return <div className='kartuKegiatan d-flex flex-row align-items-center pt-3 pb-3' style={{width: '100%', minHeight: '200px'}}>
      <div>
        {props.logo}
      </div>
      <div>
        <h4>{props.judul}</h4>
        <p>{props.desk}</p>
      </div>
      <style>
        {`
          .kartuKegiatan p {
            font-size: 0.8rem;
          }
        `}
      </style>
  </div>;
}
