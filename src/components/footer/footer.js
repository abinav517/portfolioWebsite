import './footer.css'
export default function Footer() {
return(<div className='mainfooter'>
      <div className='footerLogo'>
        <a href='https://www.instagram.com/abinavsrinivas_517/' target='_blank'><img src="..\images\Instagram.svg"></img></a>
        <a href='https://www.linkedin.com/in/abinav-srinivas/' target='_blank'><img src="..\images\LinkedIn.svg"></img></a>
        <a href='https://www.artstation.com/abinavsrinivas' target='_blank'><img src="..\images\Artstation.svg"></img></a>
        <a href='https://www.imdb.com/name/nm15638876/' target='_blank'><img src="..\images\imdb.svg"></img></a>
      </div>
      <div className='navfooter'>
        <a href="/home">Home</a>
        <a href="/projects">Projects</a>
        <a href="/reel">Show Reel</a>
      </div>  
</div>)
}


      