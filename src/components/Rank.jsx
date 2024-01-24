import styled from "styled-components";

const Rank = ({name, entries}) =>
{
    return (
        <Wrapper>
            <div>
                {`${name}, your current entry is...`}
            </div>
            <div>
                {entries}
            </div>
        </Wrapper>
    )
};

export default Rank;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    color: white;
    line-height: 2rem;
    h4
    {
        font-weight: lighter;
    }  
`;