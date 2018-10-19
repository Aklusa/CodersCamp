import styled from "styled-components";
import media from "../styled-media-queries";

export const Container = styled.div`
    width: 800px;
    margin: auto;
    ${media.desktop`
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const CategoryList = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 10px;
    ${media.desktop`
        grid-template-columns: repeat(3, 120px);
        grid-template-rows: 50px 50px;
        justify-items: center;
        grid-gap: 5px;
    `};
    ${media.phablet`
        grid-template-columns: repeat(2, 140px);
    `};
`;

export const CategoryElement = styled.div.attrs({
    color: props => props.color || "white",
})`
    width: 100px;
    padding: 5px;
    color: #9eb3ff;
    border: 2px solid #9eb3ff;
    padding-bottom: 10px;
    text-align: center; 
    margin-bottom: 15px;
    border-radius: 30px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
        color: ${props => props.color};
        background-color: transparent;
        border-color: ${props => props.color};
        cursor: pointer;
    }
    &:active {
        transform: scale(1.05);
        background-color: white;
    }
`;