/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './assets/insta.png';
import './App.css';
import { useState } from 'react';

function App() {

const [colorMenu,setColorMenu] = useState(1)



  return (
    <div className='body'>
      <header>
        <div className='headerLogo '><img src={logo}></img></div>
        <div className='headerIcons'>
          <div><i class="fas fa-home"></i></div>
          <div><i class="fas fa-location-arrow"></i></div>
          <div><i class="far fa-plus-square"></i></div>
          <div><i class="far fa-play-circle"></i></div>
          <div><i class="far fa-heart"></i></div>
          <div><i class="fas fa-user"></i></div>
        </div>
      </header>
      <div className='containerCards'>
        <section className='left'>
          <a  className={`S${colorMenu}`} href='#'>Edit Profile</a>
          <a href='#'>Account</a>
          <a href='#'>Profile Insight</a>
          <a href='#'>Change Passaword</a>
          <a href='#'>Notifications</a>
          <a href='#'>Privacy and Security</a>
          <a href='#'>Longin Activiy</a>
          <a href='#'>Help</a>
          <a className='linklogout' href='#'>Logout</a>
        </section>
        <section className='rigth'>
          <div className='divCards'>
            <div className='card'>
              <h2>Total <br /> Followers</h2>
              <p>1244 </p>
              <a className='viewdetails' href='#'>View Details</a>
            </div>
            <div className='card'>
              <h2>Total <br /> Followers</h2>
              <p>1244 </p>
              <a className='viewdetails' href='#'>View Details</a>
            </div>
            <div className='card'>
              <h2>Total <br /> Followers</h2>
              <p>1244 </p>
              <a className='viewdetails' href='#'>View Details</a>
            </div>
            <div className='card'>
              <h2>Total <br /> Followers</h2>
              <p>1244 </p>
              <a className='viewdetails' href='#'>View Details</a>
            </div>
            <div className='card'>
              <h2>Total <br /> Followers</h2>
              <p>1244 </p>
              <a className='viewdetails' href='#'>View Details</a>
            </div>
          </div>
          <div>
          <h3>Recent Post</h3>

          </div>

          <div className='divImagens'>
            <div><img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=1' alt="imagem aleatória"></img></div>
            <div><img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=2' alt="imagem aleatória"></img></div>
            <div><img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=3' alt="imagem aleatória"></img></div>
            <div><img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=4' alt="imagem aleatória"></img></div>
            <div><img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=5' alt="imagem aleatória"></img></div>


          </div>


        </section>
      </div>
    </div>
  );
}

export default App;
