import { Parallax } from 'react-parallax';
import img3 from '../img/img3.webp'
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={img3} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <button style={{backgroundColor:"blue"}}><span className="img-txt">JOIN NOW...</span></button>
        </div>
    </Parallax>
);

export default ImageThree