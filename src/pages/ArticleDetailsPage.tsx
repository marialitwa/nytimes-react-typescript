import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Article_ArticleSearch,
  FetchResult_NotOK,
  FetchResult_OK,
} from "../@types/articlesearch";
import ArticleDetails from "../components/ArticleDetails";

// const apiKey_TopStories = import.meta.env.VITE_API_KEY
const apiKey_ArticleSearch = import.meta.env.VITE_API_KEY_ARTICLESEARCH;

export default function ArticleDetailsPage() {
  const { id, item_type } = useParams();
  // console.log("Id, Item Type",id, item_type);

  const location = useLocation();
  console.log("Location", location);

  const [article, setArticle] = useState<Article_ArticleSearch | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (!id || !item_type) {
        return;
      }

      const uri = `nyt://${item_type}/${id}`;

      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=_id:"${uri}"&api-key=${apiKey_ArticleSearch}`
        );

        if (response.ok) {
          const data = (await response.json()) as FetchResult_OK;
          // console.log("Data", data)
          // Überprüfe, ob docs vorhanden sind
          if (data.response.docs && data.response.docs.length > 0) {
            setArticle(data.response.docs[0]);
          } else {
            setError("Article not found");
          }
        } else {
          const errorData = (await response.json()) as FetchResult_NotOK;
          // console.log(data)
          setError(errorData.error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData().catch((error) => console.log(error));
  }, [id, item_type]);

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );

  if (article)
    return (
      <>
        <ArticleDetails article={article} key={article.uri} />
      </>
    );
}
