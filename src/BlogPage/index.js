import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../blogData";

function BlogPage() {

    return(

        <>
        
        <h1>BlogPage</h1>

        <ul>

            {blogData.map( post => (

                <BlogLink key={post.slug} post={post} />

            ))}

        </ul>
        
        </>

    )
    
}

function BlogLink({ post }) {

    return(
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
    
}

export { BlogPage }