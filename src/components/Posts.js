import Post from "./Post"
import VideoPost from "./VideoPost"

export default function Posts(){

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

    const videoPosts = [
        {
            userName:"adorable_animals",
            userImg:"assets/img/adorable_animals.svg",
            likedBy:"respondeai",
            postVideo:"./assets/video/video",
            likedByImg:"assets/img/respondeai.svg", 
            likesNumber:"65.021",
        },
        {
            userName:"respondeai",
            userImg:"assets/img/respondeai.svg",
            likedBy:"memeriagourmet",
            postVideo:"./assets/video/video",
            likedByImg:"assets/img/memeriagourmet.svg", 
            likesNumber:"37.002",
        },
    ]

    return(
        <div class="posts">

            {posts.map(post =>
                <Post 
                userName={post.userName} 
                userImg={post.userImg} 
                postImg={post.postImg} 
                likedBy={post.likedBy} 
                likedByImg={post.likedByImg} 
                likesNumber={post.likesNumber}
                />
            )}

            {videoPosts.map(post =>
                <VideoPost 
                userName={post.userName}
                userImg={post.userImg}
                postVideo={post.postVideo}
                likedBy={post.likedBy}
                likedByImg={post.likedByImg} 
                likesNumber={post.likesNumber}
                />    
            )}
        </div>

        
    )
}