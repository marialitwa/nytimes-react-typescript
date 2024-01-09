import './App.css';
import { useState, useEffect } from 'react';
import { Article, FetchResult_NotOK, FetchResult_OK } from './@types/home';
import ArticleCard from './components/ArticleCard';

function App() {

  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {

    try {
      const response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=DIkDkEWNFPZShAystpYlAsOhHdC9w7nL");

      if (response.ok) {
        const result = await response.json() as FetchResult_OK;
        console.log(result)
        setArticles(result.results)

      } else {
        const result = await response.json() as FetchResult_NotOK;
        console.log(result);
        setError(result.error)
      }
    }

    catch(error) {
      console.error("An error occured", error);
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

export default App
