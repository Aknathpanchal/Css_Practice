import { Parallax } from 'react-parallax';
import img1 from '../img/img1.webp'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={img1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
        <button style={{backgroundColor:"red"}}><span className="img-txt">NOVEL BOOKS SHOP</span></button>
            
        </div>
    </Parallax>
);

export default ImageOne