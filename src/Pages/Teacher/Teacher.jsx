import React from 'react'
import ArticleCarousel from "../Student/ArticleCarousel";
import FeedbackForm from "../Student/FeedbackForm";
import Header2 from "../../Components/Common/Header2";
import Highlights from "../Student/Highlights";
import News from "../Student/News";

function Teacher() {
  return (
    <div>
      <Header2/>
      <News/>
      <Highlights/>
      <ArticleCarousel/>
      <FeedbackForm/>
    </div>
  )
}

export default Teacher