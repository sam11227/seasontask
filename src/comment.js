import React from "react";

const CommentDetail = () =>{
    return(
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src='./logo.png'/>
            </a>
            <div className='content'>
                <a href='/' className='author'>Sam</a>
                <div className='metadata'></div>
                <span className='data'>Today at 6:00pm</span>
            </div>
            <div className='text'>
                nice blog post!
            </div>
        </div>
    
    )
}    

export default CommentDetail;