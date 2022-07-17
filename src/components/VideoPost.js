import React from "react"

export default function VideoPost(props){

    const [like, setLike] = React.useState("hidden");
    let firstIcon = (like==="hidden") ? "" : "hidden";
    
    function likePost(){
        if(like === "hidden"){
            setLike("red");
            firstIcon = "hidden";
        }else{
             setLike("hidden");
             firstIcon = "";
        }
    }

    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={()=>setLike("red")}>
                <video autoPlay muted loop>
                    <source src={props.postVideo + ".mp4"} type="video/mp4" />
                    <source src={props.postVideo + ".ogg"} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <img src={props.postImg} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={firstIcon + " md hydrated"} onClick={likePost} name="heart-outline"></ion-icon>
                        <ion-icon class={like + " md hydrated"} onClick={likePost} name="heart"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedByImg} />
                    <div class="texto">     
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likesNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}