import styled, { keyframes } from 'styled-components';
import media from '../styled-media-queries';

export const About = styled.div`
    width: 60vw;
    margin-left: auto;
    margin-right: auto; 
`;

export const TeamList = styled.ul`
    display: grid;
    grid-template-columns: 450px 450px;
    align-content: center;
    grid-gap: 30px;
    height: ${props => props.show ? '':'0px'};
    margin-bottom: 50px;
    justify-content: center;
    justify-items: center;
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    color: white;
    z-index: 3;
    transition: all 1s ease-in-out;
   
    & > a{
        pointer-events: ${props => props.show ? 'inherit':'none'};
    }

     ${media.big`
      grid-template-columns: 450px;
     `};
`;

const moveAuthors = keyframes`
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
    pointer-events: inherit;
  }
`;

export const Li = styled.li`
    width: 400px;
    height: 100px;
    background-color: black;
    border: solid 1px #474747;
    border-radius: 10px;
    opacity: 0;
    transition: all .1s linear;
    z-index: 6;
    cursor: pointer;
    text-align: center;
    animation: ${props => props.show? moveAuthors : ''} .5s ${props => {
        switch(props.delay){
            case 0:
            case 1: return '0s';
            case 2:
            case 3: return '.2s';
            case 4: 
            case 5: return '.4s';
            default: ;
        };
    }} linear forwards;

    &:hover{
     background-color: #9eb3ff;
     color: black;
    }
`;

export const Name = styled.div`
    margin-top: 10px;
    font-size: 24px;
    text-shadow: 1px 1px #9eb3ff;
`;

export const Description = styled.div`
    font-size: 13px;
    margin-top: 10px;
`;

export const Label = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    padding: 10px;
    border: solid 1px #474747;
    color: white;
    font-size: 24px;
    margin-bottom: 50px;
    margin-top: 200px;
    letter-spacing: 5px;
    text-shadow: 1px 1px #9eb3ff;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    vertical-align: middle;
    transition: all .2s linear;
    z-index: 10;

    &:hover {
        background: #9eb3ff;
        color: black;
    }

    ${media.big`
      width: 300px;  
    `};

    ${media.middle`
      width: 250px;
    `};
`;

export const Skills = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`;

export const Skill = styled.div`
    font-size: 20px;
    color: #9eb3ff;
    border: solid 1px #9eb3ff;
    border-radius: 20px;
    padding: 10px;
`;
