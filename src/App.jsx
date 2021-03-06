import './App.css';
import React from 'react';
import huddle from './assets/images/logo.svg';
import figure from './assets/images/illustration-mockups.svg';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import backgroudDesktop from './assets/images/bg-desktop.svg';
import backgroudMobile from './assets/images/bg-mobile.svg';

function App() {
  const widthDevice = window.screen.width;
  return (
    <div className="App">
      <div className="conteiner">
        <img
          className="background"
          src={widthDevice > 1023 ? backgroudDesktop : backgroudMobile}
          alt="background"
        />
        <div className="content">
          <div className="info">
            <div>
              <img className="logo" src={huddle} alt="logo" />
              <img className="figure" src={figure} alt="illustration" />
            </div>
            <div className="infoField">
              <h1>
                {' '}
                Build The Community <span>Your Fans Will Love</span>
              </h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{' '}
              </p>
              <button>Register</button>
            </div>
          </div>

          <div className="footer">
            <div className="iconContent" id="first">
              <RiFacebookFill
                className="icon"
                size={widthDevice > 1023 ? 22 : 15}
                color="#fff"
              />
            </div>
            <div className="iconContent">
              <AiOutlineTwitter
                className="icon"
                size={widthDevice > 1023 ? 22 : 15}
                color="#fff"
              />
            </div>
            <div className="iconContent" id="last">
              <FiInstagram
                className="icon"
                size={widthDevice > 1023 ? 22 : 15}
                color="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
