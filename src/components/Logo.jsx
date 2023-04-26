import styled from "styled-components";
import Tilt from 'react-parallax-tilt';
import logo from '../images/logo.png';


const Logo = () => {
    return (
        <TiltParallex>
         <Tilt className="tilt"
         perspective={500}
         glareEnable={true}
         glareMaxOpacity={0.45}
         scale={1.02}
         gyroscope={true}
         style={{width:'200px',height:'200px'}}
         >
        <img src={logo} alt='logo' className='logo'/>
        </Tilt>
        </TiltParallex>
    )
};

export default Logo;

const TiltParallex=styled.div`
.tilt{
    background:linear-gradient(89deg, #9D94FF 0%, #FFCC8A 100%);
     box-shadow:0px 0px 10px;
     display:grid;
     align-items: center;
     justify-content: center;
     margin-left:3rem;
}
`