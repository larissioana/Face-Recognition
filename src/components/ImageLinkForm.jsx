import styled from "styled-components";


const ImageLinkForm = ({onInputChange, onSubmit}) =>
{
    return (
        <Wrapper>
            <p>
                {'This Magic Cat will detect faces in your pictures. Give it a try.'}
            </p>
            <Container>
                <input type='text' onChange={onInputChange} placeholder="Paste the image link here"/>
                <button onClick={onSubmit}>Detect</button>
            </Container>
        </Wrapper>
    )
};

export default ImageLinkForm;

const Wrapper = styled.div`
    margin-top: 2.5rem;
    display: grid;
    place-items: center;
    padding: 0rem 1rem;

    p
    {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1.3rem, 2vw,2.1rem);
        color: white;
        line-height: 2rem;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 38rem;
    background:
            radial-gradient(circle farthest-side at 0% 50%,#a411ff 23.5%,rgba(240,166,17,0) 0)21px 30px,
            radial-gradient(circle farthest-side at 0% 50%,#623e09 24%,rgba(240,166,17,0) 0)19px 30px,
            linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
            linear-gradient(150deg,#fb1 24%,#B71 0,#a80cf0 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
            linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
            linear-gradient(90deg,#B71 2%,#fb1 0,#401d89 98%,#B71 0%)0 0 #fb1;
    background-size: 40px 60px;
   
    input
    {
        width: 70%;
        padding: 1rem;
    }

    button 
    {
        width: 30%;
        background: #A463F2;
        color: white;
        padding: 1rem;
        font-size: 1rem;
        transition: all .3s ease-in;
        font-weight: bolder;
        &:hover
        {
            color: #A463F2;
            background: white;
            transform: scale(1.05);
        }
     }
    @media (max-width: 600px)
    {
        width: 25rem;
    }

    @media (max-width: 430px)
    {
        width: 20rem;
    }
`;