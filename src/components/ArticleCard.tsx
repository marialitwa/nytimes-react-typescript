// import React from 'react'
import { Article } from '../@types/home'
import styled from "styled-components";

type Props = {
    article: Article;
}

function ArticleCard({ article }: Props) {
  return (
    <Card>
        <h2>{article.title}</h2>
        <AuthorNames>{article.byline}</AuthorNames>
        <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} />
        <p>Published Date: {article.published_date}</p>
        <p>Section: {article.section}</p>
        <p>Subsection: {article.subsection}</p>
    </Card>
  )
}

export default ArticleCard




// STYLING

const Card = styled.div`
    border: 1px solid black;
    padding: 2em;
    margin: 3em;
`;

const AuthorNames = styled.h3`
    margin-bottom: 1.5em;
`;