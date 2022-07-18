export default function Curtidas(props){
    return(
        <div class="curtidas">
            <img src={props.likedByImg} />
            <div class="texto">     
                Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likesNumber} pessoas</strong>
            </div>
        </div>
    )
}