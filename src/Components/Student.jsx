import React from 'react'
import ArticleCarousel from "./ArticleCarousel";
import FeedbackForm from "./FeedbackForm";
import Header from "./Header";
import Highlights from "./Highlights";
import News from "./News";
import Resources from "./Resources";


function Student() {
  return (
    <div>
      <Header/>
      <News/>
      <Highlights/>
      <ArticleCarousel/>
      <Resources/>
      <FeedbackForm/>
    </div>
  )
}

export default Student