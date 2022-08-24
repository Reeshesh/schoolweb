import React from 'react'
import ArticleCarousel from "./ArticleCarousel";
import Header2 from "./Header2";
import Highlights from "./Highlights";
import News from "./News";

function Teacher() {
  return (
    <div>
      <Header2/>
      <News/>
      <Highlights/>
      <ArticleCarousel/>
    </div>
  )
}

export default Teacher