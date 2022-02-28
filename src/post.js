import React from 'react';


function Card(props){
    return (
        <>
        <div className='cards' style={{height:'5%', width:'30%'}}>
            <div className='card'>
                <img style={{height:'100%', width:'100%', backgroundPosition:'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
                 src={props.imgscr} alt='myPic' className='card__img'/>
                <div className='card__info'>
                    <span className='card__category'> {props.title} </span>
                    <h3 className='card__title'>{props.sname}</h3>
                    <a href={props.link} target='_blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default  Card;
// ReactDOM.render(<Card/>,document.querySelector('#root'));
