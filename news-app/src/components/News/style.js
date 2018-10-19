import styled from 'styled-components';

const Wrapper = styled.div`
    width: 27vw;
    height: 18vw;
    font-size: 1.7vw; 
    display: inline-block;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    border-radius: 20px;
    transition: ease-in-out 0.2s;
    margin: 5px;
    cursor: pointer;
    animation: tile-move .5s ease-in-out;
    
    .imgNews{  
        display: block;
        position: absolute;
        background-color: black;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        z-index: 1;
        opacity: .7;
        transition: all .5s ease-in-out;
    }

    .titleNews{
        position: absolute;
        font-size: 30px;
        padding: 10px;
        text-align: left;
        opacity: 0;
        z-index: 2;
        color: #9eb3ff;
        border-bottom: 1px solid #9eb3ff;
        text-shadow:  1px 1px black;
    }

    .descriptionNews{
        position: absolute;
        bottom: 10px;
        opacity: 0;
        font-size: 20px;
        padding: 10px;
        z-index: 2;
        border-radius: 10px;
        color: white;
        background-color: rgba(0, 0, 0, 0.253);
        transition: all .5s ease-in-out;
    }

    &:hover .imgNews{
        cursor: pointer;
        filter: brightness(1.1);
        animation: rotate .3s ease-in-out forwards;
    }

    @keyframes rotate{
        to{
            transform: scale(0.1, 0.1);
            opacity: 0;
        }
    }

    &:hover > .titleNews{
        opacity: 1;
    }

    &:hover > .descriptionNews{
        opacity: 1;
    }

    @media screen and (max-width: 1700px) {
        .titleNews{
            font-size: 22px;
        }
    }

    @media screen and (max-width: 1200px) {
        & {
            width: 40vw;
            height: 25vw;
        }

        .titleNews{
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1000px) {
        & {
            width: 70vw;
            height: 40vw;
            margin-bottom: 10px;
        }

        .titleNews{
            font-size: 20px;
        }
    }

    .loading {
        height: 100vh;
        width: 100vw;
        color: #9eb3ff;
        text-align: center;
        font-size: 80px;
        margin-top: 200px;
    }

    @keyframes tile-move{
        from{
            opacity: 0;
        }
    }

@keyframes dot-move {
  0% {
    transform: translateY(0);
  }

  25%{
    transform: translateY(20px);
  }
  50% {  
    transform: translateY(0);
  }

  75%{
    transform: translateY(-20px)
  }

  100%{
    transform: translateY(0);
  }
}

.dot{
  width: 25px;
  height: 25px;
  margin: 10px;
  display: inline-block;
  background-color: #9eb3ff;
  border-radius: 50%;
  animation: dot-move 1s infinite linear
  ;
}

.dot1{
  animation-delay: 0;
}

.dot2{
  animation-delay: .2s;
}

.dot3{
  animation-delay: .4s;
}

`;

export default Wrapper;