import IonIcon from "./IonIcon"

const stories = [
    {img:"assets/img/9gag.svg", userName:"9gag"},
    {img:"assets/img/meowed.svg", userName:"meowed"},
    {img:"assets/img/barked.svg", userName:"barked"},
    {img:"assets/img/nathanwpylestrangeplanet.svg", userName:"nathanwpylestrangeplanet"},
    {img:"assets/img/wawawicomics.svg", userName:"wawawicomics"},
    {img:"assets/img/respondeai.svg", userName:"respondeai"},
    {img:"assets/img/filomoderna.svg", userName:"filomoderna"},
    {img:"assets/img/memeriagourmet.svg", userName:"memeriagourmet"},
]

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
    }
]

export default function Esquerda(){
    return(
    <div class="esquerda">
        <Stories />
        <Posts />
    </div>
    );
}

function Stories(){
    return(
        <div class="stories">

            {stories.map(story =>
                <div class="story">
                    <div class="imagem">
                        <img src={story.img} />
                    </div>
                    <div class="usuario">
                        {story.userName}
                    </div>
                </div>
            )}

            <div class="setinha">
                <IonIcon name="chevron-forward-circle" />
            </div>
        </div>
    )
}

function Posts(){
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
                        <IonIcon name="ellipsis-horizontal" />
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.postImg} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <IonIcon name="heart-outline" />
                            <IonIcon name="chatbubble-outline" />
                            <IonIcon name="paper-plane-outline" />
                        </div>
                        <div>
                            <IonIcon name="bookmark-outline" />
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