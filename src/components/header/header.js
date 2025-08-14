import './header.css'


export default function Header() {
return(
<div className='main-header'>
  <div className='Logo'><a href='/'><img src="..\images\favicon 1.png"></img></a></div>
  <div className='navLinks'>
    <a href="/home">Home</a>
    <a href="/projects">Projects</a>
    <a href="/reel">Show Reel</a>
  </div>
  <div className='cta'>
    <a href="/contact">Contact</a>
  </div>
</div>
)
}