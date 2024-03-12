/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import { useState } from 'react';
import Header from './components/Header/header';
import  ButtonMenu  from './components/Menu/buttonMenu';

function App() {

const [colorMenu,setcolorMenu] = useState("1")


function changeMenu(number){
  setcolorMenu(number)
}


  return (
    <div className='body'>
      <Header/>
     
      <div className='containerCards'>
        <section className='left'>
          <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Edit Profile"
            indexMenu="1"
            
           />  
          <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Account"
            indexMenu="2"
            
           />
            <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Profile Insight"
            indexMenu="3"
            
           />
             <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Change Passaword"
            indexMenu="4"
            
           />
            <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Notifications"
            indexMenu="5"
            
           />
            <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Privacy and Security"
            indexMenu="6"
            
           />
            <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Longin Activiy"
            indexMenu="7"
            
           />
            <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Help"
            indexMenu="8"
          
           />
            <ButtonMenu 
            changeMenu={changeMenu}
            colorMenu={colorMenu}
            text="Logout"
            indexMenu="9"
            logoutButton
           />
        
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
              <h2>Account <br /> Reached</h2>
              <p>1244 </p>
              <a className='viewdetails' href='#'>View Details</a>
            </div>
            <div className='card'>
              <h2>Account <br /> Engaged</h2>
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
            <div className='divImage'>
              <img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=1' alt="imagem aleatória"></img>
              <div className='actionImage'>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
              </div>
            </div>
            <div className='divImage'>
              <img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=2' alt="imagem aleatória"></img>
              <div className='actionImage'>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
              </div>
            </div>
            <div className='divImage'>
              <img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=3' alt="imagem aleatória"></img>
              <div className='actionImage'>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
              </div>
            </div>
            <div className='divImage'>
              <img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=4' alt="imagem aleatória"></img>
              <div className='actionImage'>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
              </div>
            </div>
            <div className='divImage'>
              <img className='imageLinks' src='https://source.unsplash.com/random/800x600?sig=5' alt="imagem aleatória"></img>
              <div className='actionImage'>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
              </div>
            </div>


          </div>


        </section>
      </div>
    </div>
  );
}

export default App;
