import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";


const PostDetails = () => {

    const {postId} = useParams();

    //posts
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then( res => res.json())
        .then( posts => setAllPosts(posts))
    },[]);
    let {title,body} = allPosts;

    //comments
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then( res => res.json())
        .then( comment => setComment(comment) )
    },[])

    //thumbnail image of commenter
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${postId}/photos/`)
        .then( res => res.json())
        .then( photo => setPhoto(photo) )
    },[])
    const  thumbnailImg = photo.slice(0,comment.length);

let images = thumbnailImg.map(image => <img key={image.id} src={image.thumbnailUrl} alt=""/>);


    return (
        <div className="post-details-container">
            <div className="post">
                <h2 style={{textTransform: "capitalize"}}>{title}</h2>
                <p>{body}</p>
            </div>
            <h2 className="total-comments">{comment.length} comments</h2>
            <div className="wrapper">
                <div className="thumbnailUrl">
                    {images}
                </div>
                <div className="comment">
                    {comment.map(comm => {
                        return (
                            <div className="single-comment" key={comm.id}>
                                <h4>{comm.email}</h4>
                                <p>{comm.body}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
  
};

export default PostDetails;