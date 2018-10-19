import styled from 'styled-components';

const Wrapper = styled.div`

    padding-top: 15px;
    padding-bottom: 10px;
    width: 100%;
    text-align: center;
    left: 0;
    top: 0;
    z-index: 10;


    &::placeholder {
        color: #9eb3ff;
    }

    input {
        box-sizing: border-box;
        border: none;
        border-bottom: solid 2px #9eb3ff;
        background-color: transparent;
        padding-bottom: 5px;
        width: 35%;
        font-size: 20px;
        color: #9eb3ff;
        outline: none;
        margin: 10px;
        min-width: 300px;
    }

`;

export default Wrapper;