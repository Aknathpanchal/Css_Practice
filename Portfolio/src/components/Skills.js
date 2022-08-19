import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/image/techstack/css.png";
import meter2 from "../assets/image/techstack/html.png";
import meter3 from "../assets/image/techstack/javascript.png";
import meter4 from "../assets/image/techstack/react.png";
import meter5 from "../assets/image/techstack/firebase.png";
import meter6 from "../assets/image/techstack/node.png";
import meter7 from "../assets/image/techstack/github.png";
import meter8 from "../assets/image/techstack/redux.png";
import meter9 from "../assets/image/techstack/mui.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br>These are the technologies I've worked with</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JAVA SCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>REDUX</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>FIREBASE</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>NODE</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>MATERIAL UI</h5>
                            </div>
                          </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
