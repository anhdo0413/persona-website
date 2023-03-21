import './Card.css';

function Card(props){
    const front = props.front;
    const back = props.back;

    return (
        <div className='mainContainer'> 
              < div className='theCard'>
                <div className='cardFront'>
                    <img className="cardImage" src={front} alt=" "/>
                </div>
                <div className='cardBack'>
                    <img className="cardImage" src={back} alt=" "/>
                </div>
              </div>
        </div>
    )
}

export default Card;