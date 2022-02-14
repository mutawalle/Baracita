import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './Rout/Rout';
import './Basic.css'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Rout/>
  </React.StrictMode>,
  document.getElementById('root')
);

// Animasi Navigasi
let posisiSebelum = 0
let posisiSekarang = 0

const navigasiBar = document.querySelector('nav')

const animasiNavigasiBar = function(){
  posisiSebelum = posisiSekarang
  posisiSekarang = document.documentElement.scrollTop
  if((posisiSekarang-posisiSebelum)>30){
    navigasiBar.classList.remove("munculDariAtas");
    navigasiBar.classList.add("hilangDiAtas");
  }else if((posisiSebelum-posisiSekarang)>30 || document.documentElement.scrollTop === 0 ){
    navigasiBar.classList.remove("hilangDiAtas");
    navigasiBar.classList.add("munculDariAtas");
  }
}

window.addEventListener("scroll", function () {
  animasiNavigasiBar()
})