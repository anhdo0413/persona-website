import './ExperienceLeft.css';

function ExperienceLeft(props){
    const title = props.title;
    const img = props.img;
    const body = props.body;
    const position = props.position;
    const link = props.link;

    return (
        <div className="contentL"> 
              <div className="titleboxL">
                <span class="blue-experience">
                    <a className="linkStyling" href={link} target="_blank" >
                        <h1 className="postitleL">{title}</h1>
                    </a>
                </span>
                  <h1 className="postitleL">, {position}</h1>
              </div>
              <div className="bodybgL">
                <img className="imgL" src={img} alt=" "/>
                  <div className="bodyL">
                      <h3>{body}</h3>
                  </div>
              </div>
        </div>
    )
}

export default ExperienceLeft;