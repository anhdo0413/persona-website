import './Slider.css';

import design1 from '../assets/slider/design1.png';
import design2 from '../assets/slider/design2.png';
import design3 from '../assets/slider/design3.png';
import design4 from '../assets/slider/design4.png';
import design6 from '../assets/slider/design6.png';
import design7 from '../assets/slider/design7.png';
import design8 from '../assets/slider/design8.png'; 
import design9 from '../assets/slider/design9.png';
import buttonnext from '../assets/slideright.png';
import buttonprev from '../assets/sliderleft.png';
import Script from './Script.js';

<head>
    <script src={Script} defer></script>
</head>

function Slider(){

    return (
        <section aria-label="Photos">
            <div class="carousel" data-carousel>
                <button class="carousel-button prev" data-carousel-button="prev"><img class='buttonimg' src={buttonprev} alt="back"></img></button>
                <button class="carousel-button next" data-carousel-button="next"><img class='buttonimg' src={buttonnext} alt="next"></img></button>

                <ul data-slides>
                    <li class="slide" data-active>
                        <img src={design1} alt="design1"></img>
                    </li>
                    <li class="slide">
                        <img src={design2} alt="design2"></img>
                    </li>
                    <li class="slide">
                        <img src={design3} alt="design3"></img>
                    </li>
                    <li class="slide">
                        <img src={design4} alt="design4"></img>
                    </li>
                    <li class="slide">
                        <img src={design6} alt="design6"></img>
                    </li>
                    <li class="slide">
                        <img src={design7} alt="design7"></img>
                    </li>
                    <li class="slide">
                        <img src={design8} alt="design8"></img>
                    </li>
                    <li class="slide">
                        <img src={design9} alt="design9"></img>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Slider;