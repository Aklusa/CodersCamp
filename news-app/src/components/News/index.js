import React from 'react';
import Wrapper from './style';
const News = ({news}) => {
  
  const imgURL = news.urlToImage;
  const description = news.description;
  const title = news.title;
  const urlToPage = news.url;

  return( 
    !imgURL? <div></div>
    :
    <Wrapper onClick={() => {window.open(urlToPage, "_blank");}} className="Tile">
      <img className="imgNews" alt="" src={imgURL} height="100%" width="100%" />      
      <div className="titleNews">{title}</div>
      <div className="descriptionNews">{description}</div>      
    </Wrapper>
    );
};

export default News;
