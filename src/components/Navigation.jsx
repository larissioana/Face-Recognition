import styled from 'styled-components';

const Navigation = ({onRouteChange, isSignedIn}) =>
{
        if (isSignedIn)
        {
            return (
                <Nav>
                    <p onClick={() => onRouteChange('signout')}>Sign Out</p>
                </Nav>
            )
        } else 
        {
            return (
                <Nav>
                    <p onClick={() => onRouteChange('signin')}>Sign In</p>
                    <p onClick={() => onRouteChange('register')}>Register</p>
                </Nav>
            )
        }
};

export default Navigation;


const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;

    p
    {
        text-decoration: underline;
        padding: 1rem;
        color: #17181a;
        font-size: clamp(1rem, 2vw, 1.2rem);
        cursor: pointer;
        font-weight: bolder;
        :hover
        {
            opacity:.7;
        }
    }
`;