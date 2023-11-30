import PostCard from "@/src/components/PostCard"


async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

async function PostPage() {

    const posts = await loadPosts()
    return (
        <div className="grid grid-cols-3 gap-2 m-5">
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
    ))
                }
    </div>
    )
}

export default PostPage