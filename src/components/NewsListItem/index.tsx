import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import { LoadingLottie } from "../LoadingLottie";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface NewsListItemInterface {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  article_url: string;
  main_image: string;
}

export function NewsListItem() {
  const [news, setNews] = useState<NewsListItemInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = () => {
    api.get("latestnews").then((response) => {
      setNews(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      {loading && <LoadingLottie />}
      {!loading && (
        <S.Container>
          {news.map((news) => (
            <S.Content
              key={news.id}
              onClick={() => window.open(news.article_url)}
            >
              <LazyLoadImage
                effect="blur"
                src={news.main_image}
                alt="News photo"
              />
              <S.NewsTitle>{news.title}</S.NewsTitle>
              <S.NewsDescription>{news.short_description}</S.NewsDescription>
            </S.Content>
          ))}
        </S.Container>
      )}
    </>
  );
}
