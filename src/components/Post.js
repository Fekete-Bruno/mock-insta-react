import React from "react"

export default function Post(props){

    const [like, setLike] = React.useState("hidden");
    let firstIcon = (like==="hidden") ? "" : "hidden";
    
    function likePost(){
        if(like === "red"){
            setLike("hidden");
            firstIcon = "";
        }else{
             setLike("red");
             firstIcon = "hidden";
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