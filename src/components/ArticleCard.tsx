// import React from 'react'
import { Article } from '../@types/home'
import styled from "styled-components";

type Props = {
    article: Article;
}

export default function ArticleCard({ article }: Props) {

  const publishedDate = new Date(article.published_date)
    
    .toLocaleDateString("en-EN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    })


  return (
    <Card>
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        {/* <AuthorNames>{article.byline}</AuthorNames> */}
        <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} />
        <p>Published on: {publishedDate}</p>
        {/* <p>Section: {article.section}</p>
        <p>Subsection: {article.subsection}</p> */}
    </Card>
  )
}



// STYLING

const Card = styled.div`
    border: 1px solid black;
    padding: 2em;
    margin: 3em;
    _text-align:left;
`;

const AuthorNames = styled.h3`
    margin-bottom: 1.5em;
`;