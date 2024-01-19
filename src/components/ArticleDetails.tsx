// import React from 'react'
import { Article_ArticleSearch } from "../@types/articlesearch";
import { Link } from "react-router-dom";
import styled from "styled-components";


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
        <LinkStyled to={article.web_url} target="_blank" rel="noopener noreferrer">Read full article here</LinkStyled>
        {/* Empfehlung: rel Attribut um Sciherehitsprobleme zu vermeiden => rel="noopener noreferrer" */}
    </div>
  )
}


// STYLING

const LinkStyled = styled(Link)`

  padding: 1em;
  font-size: 2rem;  
  text-decoration-thickness: 6px;
  text-decoration-color: hotpink;

  // _text-decoration-style: solid;
  // _text-decoration-line: line-through;
  // _text-decoration-line: overline;
  // _text-decoration: hotpink overline 12px wavy;
  // _text-decoration-skip-ink: none;
  // _text-decoration-skip-ink: auto;
  // _text-decoration-skip-ink: all;

  // _text-underline-offset: 1em;

  // // transition:
  // //   color 500ms,
  // //   text-decoration-color 1500ms;

  // //   &:hover {
  // //     color: lime;
  // //     text-decoration-color: blue;
  // //   }

`;



