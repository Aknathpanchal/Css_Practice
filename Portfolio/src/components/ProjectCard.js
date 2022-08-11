import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,techStack,git,live}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <h4>{title}</h4>
        <a href={git} target="_blank">
           <button  style={{margin:"10px",padding:"10px",border:"none",borderRadius:"7px",backgroundColor:"skyblue"}}>Github</button>
        </a>
        <a href={live} target="_blank">
          <button  style={{margin:"10px",padding:"10px",border:"none",borderRadius:"7px",backgroundColor:"skyblue"}}>LiveDemo</button>
          </a>
        </div>
        <div  style={{textAlign:"center",marginTop:"20px",paddingBottom:"10px"}}>
          
          <span>{description}
          <br/>
                <h5 style={{color:"orange"}}>{techStack}</h5>  
          </span>
        </div>
      </div>
    </Col>
  )
}


{/* <Col size={12} sm={6} md={4}>
<div >
  <img  src={imgUrl} />
  <div  style={{textAlign:"center",marginTop:"20px",paddingBottom:"10px"}}>
    <h4 >{title}</h4>
    <span>{description}</span>
    <p>{techStack}</p>
    <div>
       <buton></buton>
    </div>
  </div>
</div>
</Col> */}
