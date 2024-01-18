import '../App.css';
import { useState, useEffect } from 'react';
import { Article_TopStories, FetchResult_NotOK, FetchResult_OK } from '../@types/topstories';
import ArticleCard from '../components/ArticleCard';
import { Outlet, useLocation } from 'react-router-dom';


const apiUrl = "https://api.nytimes.com/svc/topstories/v2/home.json"
const apiKey_TopStories = import.meta.env.VITE_API_KEY_TOPSTORIES
// Check Vite Docs: environmental variables

export default function ArticlesPage() {

  const location = useLocation()

  const [articles, setArticles] = useState<Article_TopStories[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {

    try {

      const response = await fetch(`${apiUrl}?api-key=${apiKey_TopStories}`);

      if (response.ok) {
        const data = await response.json() as FetchResult_OK;
        // console.log(data)
        setArticles(data.results)

      } else {
        const data = await response.json() as FetchResult_NotOK;
        setError(data.error);
        console.log(error);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles])


  if (location.pathname !== "/articles") return <Outlet />

  return (
    <>
          <h1>The New York Times – Top Stories</h1>
          <div>

            {articles.map((article) => {

              return <ArticleCard article={article} key={article.uri}/>
            }) }

          </div>
     </>
  )
}


