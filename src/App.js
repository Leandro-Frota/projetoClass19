/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import { useState } from 'react';
import Header from './components/Header/header';

function App() {

const [colorMenu,setcolorMenu] = useState("")



function changeMenu(number){
  setcolorMenu(number)
}


  return (
    <div className='body'>
      <Header/>
     
      <div className='containerCards'>
        <section className='left'>
          <a onClick={()=>{changeMenu(1)}}  className={ `noSelectButton ${colorMenu===1 ? "selectButton":""}`}href='#'>Edit Profile</a>
          <a onClick={()=>{changeMenu(2)}}  className={ `noSelectButton ${colorMenu===2 ? "selectButton":""}`}href='#'>Account</a>
          <a onClick={()=>{changeMenu(3)}}  className={ `noSelectButton ${colorMenu===3 ? "selectButton":""}`} href='#'>Profile Insight</a>
          <a onClick={()=>{changeMenu(4)}}  className={ `noSelectButton ${colorMenu===4 ? "selectButton":""}`} href='#'>Change Passaword</a>
          <a onClick={()=>{changeMenu(5)}}  className={ `noSelectButton ${colorMenu===5 ? "selectButton":""}`} href='#'>Notifications</a>
          <a onClick={()=>{changeMenu(6)}}  className={ `noSelectButton ${colorMenu===6 ? "selectButton":""}`} href='#'>Privacy and Security</a>
          <a onClick={()=>{changeMenu(7)}}  className={ `noSelectButton ${colorMenu===7 ? "selectButton":""}`} href='#'>Longin Activiy</a>
          <a onClick={()=>{changeMenu(8)}}  className={ `noSelectButton ${colorMenu===8 ? "selectButton":""}`} href='#'>Help</a>
          <a onClick={()=>{changeMenu(9)}}  className={ `noSelectButton ${colorMenu===9 ? "selectLogout":""}`} href='#'>Logout</a>
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
