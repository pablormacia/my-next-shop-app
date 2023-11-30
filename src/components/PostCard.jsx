"use client"
import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <div className="bg-slate-300 p-5 rounded-xl" >
            <Link className="font-bold" href={`/posts/${post.id}`}>
                <h3>{post.id}. {post.title}</h3>
                </Link>
            <p>{post.body}</p>
            <button  onClick={null}>Click</button>
        </div>
    )
}

export default PostCard