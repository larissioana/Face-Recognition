import styled from "styled-components";


const FaceRecognition = ({imageUrl, box}) => {
    return (
        <Wrapper>
            <div className="content">
            <img id='inputimage'
             src={imageUrl}
             alt=''
             width='500px'
             height='auto'/>
           <div className='bounding-box' style={{
                top:box.topRow,
                right:box.rightCol,
                bottom:box.bottomRow,
                left:box.leftCol,
            }}>
            </div>
            </div>
        </Wrapper>
    )
};

export default FaceRecognition;

const Wrapper = styled.div`
    margin-top:2rem;
    display:grid;
    place-items: center;
    margin-bottom:5rem;
  
   .content{
    position:relative;
   }
    .bounding-box{
    position:absolute;
    box-shadow: 0 0 0 2px #e0dfe2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
}

@media (max-width:439px){
    img{
        width:300px;
    }
}
`