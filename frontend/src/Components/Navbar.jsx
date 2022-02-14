import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
  function handleClick(){
    const burgerMenu = document.querySelector('nav .burgerMenu')
    const listNav = document.querySelector('nav .listNav')
    burgerMenu.classList.toggle('toClose')
    listNav.classList.toggle('slideDown')
  }

  return <nav className='fluid p-2 d-flex flex-sm-row flex-column text-light justify-content-between align-items-center' style={{transition: '.5s', backgroundColor: '#14213d', position: 'fixed', left: '0', right: '0', zIndex: '1'}} onClick={handleClick}>
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <h2 className='mb-0' style={{marginLeft: '3rem'}}>Baracita</h2>
            <div className='burgerMenu d-flex flex-column justify-content-evenly me-3'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className='listNav d-flex flex-sm-row flex-column justify-content-evenly m-0'>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/about">Tentang</Link>
            </span>
            <span>
              <Link to="/tutor">Tutor</Link>
            </span>
            <span>
              <Link to="/contact">Hubungi Kami</Link>
            </span>
          </div>
          <style>
            {`
              nav {
                top: 0;
              }

              nav div:nth-child(2) {
                width: 60%;
                transition: .5s;
              }

              nav div:nth-child(2) span a {
                  color: white;
                  text-decoration: none;
              }
              
              nav div:nth-child(2) span a:hover {
                  color: #222;
              }

              .hilangDiAtas {
                transform: translateY(-90px);
              }
              
              .munculDariAtas {
                transform: translateY(0);
              }

              nav div:first-child div {
                display: none;
                width: 35px;
                height: 35px;
              }

              nav div:first-child span {
                display: none;
                width: 35px;
                height: 6px;
                border-radius: 3px;
                background-color: white;
                transition: .5s;
              }
              
              nav div:first-child .toClose span:first-child {
                transform: rotate(45deg) translate(9px, 9px);
              }

              nav div:first-child .toClose span:nth-child(2) {
                transform: scale(0);
              }

              nav div:first-child .toClose span:last-child {
                transform: rotate(-45deg) translate(5px, -5px);
              }

              @media (max-width: 768px){
                nav div:nth-child(2) {
                  width: 60%;
                }
              }

              @media (max-width: 576px){
                nav div:first-child {
                  width: 100%;
                }

                nav div:first-child div {
                  display: block;
                }

                nav div:first-child span {
                  display: block;
                }

                nav .listNav {
                  text-align: center;
                  height: 0;
                  overflow: hidden;
                }

                nav div.slideDown {
                  height: 400px;
                }
              }
            `}
          </style>
        </nav>;
}