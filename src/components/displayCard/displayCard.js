import './displayCard.css'

export default function DisplayCard(props){
    
    return( 

            <div className="embededLink">
                <h1>{props.title}</h1>
                <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>
                {props.description}
                </p>
           </div> 
    )
}
