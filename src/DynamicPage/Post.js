import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pages.css";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };

        fetchPost();
    }, [id]);

    if (!post) return <div className = "loading" > Loading... < /div>;

    return ( <
        div className = "page post" >
        <
        h1 > { post.title } < /h1> <
        p > { post.body } < /p> <
        /div>
    );
};

export default Post;