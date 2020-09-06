import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';

const Home = () => {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( res => res.json())
        .then( posts => setPosts(posts))
    },[]);

    return (
        <div className="home-container">
            { posts.map(post => <Posts post={post}></Posts>) }
        </div>
    );
};

export default Home;