import './projectCard.css'

export default function ProjectCard(props){
    return( 

            <div className="embededLink">
                
                <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>{props.title}</h4>
                <p className='projectcredit'>
                {props.credit}
                </p>
                <p>
                {props.description}
                </p>
           </div> 
    )
}
