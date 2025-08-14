import './header.css'


export default function Header() {
return(
<div className='main-header'>
  <div className='Logo'><a href='/'><img src="..\images\favicon 1.png"></img></a></div>
  <div className='navLinks'>
    <a href="/about">About</a>
    <a href="#">Projects</a>
    <a href="#">Show Reel</a>
  </div>
  <div className='cta'>
    <a href="#">Contact</a>
  </div>
</div>
)
}