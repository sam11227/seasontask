import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './comment';
import Card from "./post";
import "./index.css";
// import logo from './logo.png ';



const App = () =>{
    return(
        <div className='ui container comments' style={{display:'flex'}}>
            <Card
            imgscr='https://www.whatsappimages.in/wp-content/uploads/2021/04/black-whatsapp-dp-images-Photo-Download.gif'
            title='A Netfkix Orignal Series'
            sname='DARK'
            link='https://www.netflix.com/pk/'/>
            <Card
            imgscr='https://i.pinimg.com/originals/e3/91/b8/e391b81845081ae72f6c7d5d445cecba.jpg'
            title='A Netfkix Orignal Series'
            sname='Extra Curricular'
            link='https://www.netflix.com/pk/'/>
            <Card
            imgscr='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cY2xKKJogtPZS_-3qB2O3m3BxUMJq59Wnw&usqp=CAU'
            title='A Netfkix Orignal Series'
            sname='Stranger Things'
            link='https://www.netflix.com/pk/'/>
            {/* <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/> */}
    </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
