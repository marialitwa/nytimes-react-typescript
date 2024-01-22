// import React from 'react'
import { useNavigate } from "react-router-dom";
import { Article_TopStories } from "../@types/topstories";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

type Props = {
  article: Article_TopStories;
};

export default function ArticleCard({ article }: Props) {
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate(
      `/article/${article.uri.slice(14)}/${article.item_type.toLowerCase()}`,
      { state: { title: article.title } }
    );
  };

  const publishedDate = new Date(article.published_date).toLocaleDateString(
    "en-EN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const navigate = useNavigate();

  return (
    <CardWrapper>
      <div>
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        <p>Published on {publishedDate}</p>
        {/* <p>Section: {article.section}</p> */}
        {/* <p>{article.uri.slice(14)}</p> */}
        {/* <AuthorNames>{article.byline}</AuthorNames> */}
      </div>
      <div>
        {/* && Syntax: Überprüfung, ob article.multimedia (sprich ein Bild) enthalten ist und das Array mindestens 1 Element enthält.
            Rendering vom Bild & Copyright erfolgt nur, wenn article.multimedia existiert und mindestens 1 Element enthält. Wenn kein Bild
            existiert, wird nur der übrige Text ohne Bild gerendert*/}
        {article.multimedia && article.multimedia.length >= 0 && (
          <img
            src={article.multimedia[1].url}
            alt={article.multimedia[1].caption}
          />
        )}
        {article.multimedia && article.multimedia.length >= 0 && (
          <p>Photo by {article.multimedia[1].copyright}</p>
        )}
      </div>
      {user ? (
        <button onClick={handleClick}>Read more</button>
      ) : (
        <h3>Login to read more</h3>
      )}
      {/* <button onClick={() => console.log("Button clicked")}>Read more</button> */}
    </CardWrapper>
  );
}

// STYLING

const CardWrapper = styled.div`
  border: 3px solid #18171a;
  padding: 2em;
  margin: 5em;
`;

// const AuthorNames = styled.h3`
//     margin-bottom: 1.5em;
// `;
