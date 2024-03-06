import logo from '../../assets/insta.png';
import Icon from '../Icons/icons';
import "./styleheader.css"

export default function Header(){
    

    return  <header>
    <div className='headerLogo '><img src={logo} alt='imagem com logo e nome Instagram'></img></div>
    <div className='headerIcons'>
      <Icon name={"home"}/>
      <Icon name={"location-arrow"}/>
      <Icon name={"plus-square"}/>
      <Icon name={"play-circle"}/>
      <Icon name={"heart"}/>
      <Icon name={"user"}/>
          
      
    </div>
  </header>
}