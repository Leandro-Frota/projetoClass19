/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import { useState } from 'react';
import Header from './components/Header/header';
import ButtonMenu from './components/Menu/buttonMenu';
import CardsScores from './components/Cards/cardsScores';
import { CardImage } from './components/Images/images';

function App() {

  const [colorMenu, setcolorMenu] = useState("1")


  function changeMenu(number) {
    setcolorMenu(number)
  }


  return (
    <div className='body'>
      <Header />

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
            <CardsScores
              title="Total Followers"
              score="4000"
              nameLink="viewdetails"
              href="_Blank"
            />
            <CardsScores
              title="Total Followers"
              score="4000"
              nameLink="viewdetails"
              href="_Blank"
            />
            <CardsScores
              title="Account Reached"
              score="1244"
              nameLink="viewdetails"
              href="_Blank"
            />
             <CardsScores
              title="Account Engaged"
              score="36"
              nameLink="viewdetails"
              href="_Blank"
            />

        </div>
          <div>
            <h3>Recent Post</h3>
          </div>

        <div className='divImagens'>
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
   
        </div>


        </section>
      </div>
    </div>
  );
}

export default App;
