import React from 'react';

export default function LogoBaracita() {
  return <div className='logoBaracita d-flex justify-content-center align-items-center'>
      <img src="./Assets/Logo.png" alt="" width={'70%'}/>
      <style>
          {`
            @media (max-width: 768px) {
              .logoBaracita img {
                width: 50%;
              }

              .logoBaracita {
                padding-bottom: 2rem;
              }
            }
          `}
      </style>
  </div>;
}
