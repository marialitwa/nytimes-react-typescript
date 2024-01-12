import '../App.css';
import { useState, useEffect } from 'react';
import { Article, FetchResult_NotOK, FetchResult_OK } from '../@types';
import ArticleCard from '../components/ArticleCard';


const apiUrl = "https://api.nytimes.com/svc/topstories/v2/home.json"
const apiKey = import.meta.env.VITE_API_KEY
// Check Vite Docs: environmental variables

export default function Homepage() {

  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {

    try {

      const response = await fetch(`${apiUrl}?api-key=${apiKey}`);

      if (response.ok) {
        const data = await response.json() as FetchResult_OK;
        console.log(data)
        setArticles(data.results)

      } else {
        const data = await response.json() as FetchResult_NotOK;
        console.log(data);
        setError(data.error)
      }
    }

    catch(error) {
      console.error("An error occured", error);
      const {message} = error as Error;
      setError(message)
    }
  }

  useEffect(() => {
    fetchData().catch((error) => console.error(error))
  }, [])

  return (
    <>
          <h1>The New York Times – Top Stories</h1>
          <div>

            {articles.map((article) => {

              return <ArticleCard article={article} key={article.abstract}/>
            }) }

          </div>
     </>
  )
}


