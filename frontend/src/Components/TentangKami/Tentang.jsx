import React from 'react';
import Visi from './Visi'
import Misi from './Misi'
import LatarBelakang from './LatarBelakang';

export default function Tentang() {
  return <div className='text-center mt-3' style={{backgroundColor: '#FFE8C2'}}>
      <h1>Tentang Kami</h1>
      <LatarBelakang/>
      <Visi/>
      <Misi/>
  </div>;
}
