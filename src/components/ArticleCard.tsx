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

        {/* Überprüfung, ob article.multimedia (sprich ein Bild) enthalten ist und das Array mindestens 1 Element enthält. 
        Rendering vom Bild erfolgt nur, wenn article.multimedia existiert und mindestens 1 Element enthält. Wenn kein Bild 
        existiert, wird nur der übrige Text ohne Bild gerendert*/}
        {article.multimedia && article.multimedia.length >= 0 && (
        <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} />)}

        <p>Published on: {publishedDate}</p>
        <p>Section: {article.section}</p>
        <button>Read more</button>
    </Card>
  )
}


// STYLING

const Card = styled.div`
    border: 3px solid #18171A;
    padding: 2em;
    margin: 5em;
`;

// const AuthorNames = styled.h3`
//     margin-bottom: 1.5em;
// `;