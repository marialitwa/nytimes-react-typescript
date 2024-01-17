// import React from 'react'
import { Article_ArticleSearch } from "../@types/articlesearch";
import { Link } from "react-router-dom";


type Props = {
    article: Article_ArticleSearch,

}

export default function ArticleDetails({ article }: Props) {

  

  return (
    <div>
      <h2>{article.headline.main}</h2>
      <h3>{article.byline.original}</h3>
      <p>{article.lead_paragraph}</p>
      <p>{article.abstract}</p>

      {article.multimedia && article.multimedia.length >= 0 && (
        <img 
        src={`https://static01.nyt.com/${article.multimedia[0].url}`} 
        alt={article.snippet} />
      )
        }
        <p>Source: {article.source}</p>
        <p>Section: {article.type_of_material}</p>
        <p>Word count: {article.word_count}</p>
        <Link to={article.web_url} target="_blank" rel="noopener noreferrer">Read full article here</Link>
        {/* Empfehlung: rel Attribut um Sciherehitsprobleme zu vermeiden => rel="noopener noreferrer" */}
    </div>
  )
}



