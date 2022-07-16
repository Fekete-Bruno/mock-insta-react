import Post from "./Post"

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
            
        </div>
    )
}