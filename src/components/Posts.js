const posts = [
    {
        userName:"meowed",
        userImg:"assets/img/meowed.svg",
        postImg:"assets/img/gato-telefone.svg",
        likedBy:"respondeai",
        likedByImg:"assets/img/respondeai.svg",
        likesNumber:"101.523"
    },

    {
        userName:"barked",
        userImg:"assets/img/barked.svg",
        postImg:"assets/img/dog.svg",
        likedBy:"adorable_animals",
        likedByImg:"assets/img/adorable_animals.svg",
        likesNumber:"99.159"
    },

    {
        userName:"chibirdart",
        userImg:"assets/img/chibirdart.svg",
        postImg:"assets/img/jotaro-chibi.jpg",
        likedBy:"meowed",
        likedByImg:"assets/img/meowed.svg",
        likesNumber:"111.123"
    },
]

export default function Posts(){

    return(
        <div class="posts">

            {posts.map(post =>
                <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={post.userImg} />
                        {post.userName}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.postImg} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={post.likedByImg} />
                        <div class="texto">     
                            Curtido por <strong>{post.likedBy}</strong> e <strong>outras {post.likesNumber} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            )}
            
        </div>
    )
}