import './styles/Home.css';
import HomeProjects from '../homeProjects/homeProjects';
export default function Home() {
    return(
<div>
      <div>
            <div className='pfp'>
            <img src="..\images\Abinav.jpg"></img>
            </div>

            <div>
                <div>
                <div><h1>Abinav Srinivas</h1></div>
                <div><p>Film Editor|3D Generalist|VFX Artist</p></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                </div>

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
                    <HomeProjects image="/images/PSYCHOCIDE.jpg" title="PSYCHOCIDE"/>
                </div>
                
                <div>
                    <HomeProjects image="/images/choice.jpg" title="Choice"/>
                </div>
            </div>
       <div><a href='/projects'><p>See All Projects</p></a></div>
    </div>

    <div>
        <h2>Softwares I know</h2>
        <div>
            <a href='/'><img src="..\images\blender.svg"></img></a>
            <p>Blender</p>
        </div>

        <div><a><p>See all Projects</p></a></div>
    </div>

    <div>
        <h2>Skills</h2>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </div> 


</div>
    )
}