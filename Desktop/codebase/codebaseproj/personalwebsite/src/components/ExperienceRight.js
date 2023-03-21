import './ExperienceRight.css';

function ExperienceRight(props){
    const title = props.title;
    const img = props.img;
    const body = props.body;
    const position = props.position;
    const link = props.link;

    return (
        <div className="contentR"> 
              <div className="titleboxR">
                <span class="blue-experience">
                    <a className="linkStyling2" href={link} target="_blank">
                        <h1 className="postitleR">{title}</h1>
                    </a>
                </span>
            
            <h1 className="postitleR">, {position}</h1>
              </div>
              <div className="bodybgR">
                  <div className="bodyR">
                      <h3>{body}</h3>
                  </div>
                  <div className='imageBox'>
                    <img className="imgR" src={img} alt=" "/>
                  </div>
              </div>
        </div>
    )
}

export default ExperienceRight;