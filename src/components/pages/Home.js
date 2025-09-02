import './styles/Home.css';
import HomeProjects from '../homeProjects/homeProjects';
import HomeLogos from '../homeLogos/homeLogos';

export default function Home() {
    return(
<div className='mainContent'>
      <div className='topContent'>
            <div className='pfp'>
            <div className='pfpdiv'><img src="..\images\Abinav.jpg"></img></div>
            </div>

            <div className='HeroSection'>
                <div className='HeroHeader'>
                <div><h1>Abinav Srinivas</h1></div>
                <div><h2>Film Editor | 3D Generalist | VFX Artist</h2></div>
                 </div>
                <div className='HeroContent'><p>I am a 69 years old self taught professional who nurtured my
professional skills by learning Graphic Design, Video Editing, VFX and
3D animation.
I was passionate about the creative field since my childhood, started
my YouTube channel at the age of 12 which got me started on this
journey.
</p></div>
               

            </div>
    
        </div>
        
    <div>
        <h2>Projects</h2>
            {/* <div>
                <a href='/'><img src="..\images\PSYCHOCIDE.jpg"></img></a>
                <p>PSYCHOCIDE</p>
            </div>

            */}
            <div className="projects">
                <div>
                    <HomeProjects image="/images/PSYCHOCIDE.jpg" title="PSYCHOCIDE" link="https://www.youtube.com/watch?v=OZISwcwmXwE"/>
                </div>
                
                <div>
                    <HomeProjects image="/images/choice.jpg" title="Choice" link="https://www.youtube.com/watch?v=OZISwcwmXwE"/>
                </div>
            </div>
       <div><a href='/projects'><p>See All Projects</p></a></div>
    </div>

    <div>
        <h2>Softwares I work with</h2>

        <div className="SoftwareLogos"> 

        <div>
            <HomeLogos image="..\images\blender.svg"/>  
        </div>

        <div>
            <HomeLogos image="..\images\resolve.svg"/>  
        </div>
        
        <div>
            <HomeLogos image="..\images\affinity photo.svg"/>  
        </div>

        <div>
            <HomeLogos image="..\images\fusion.png"/>  
        </div>

        </div>

    </div>

    <div>
        <h2>Skills</h2>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </div> 


</div>
    )
}