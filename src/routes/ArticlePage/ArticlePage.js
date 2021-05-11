import React, { useMemo } from "react";
import { ArticleBlock } from "../../components/ArticleBlock/ArticleBlock";
import data from "../../data.json";
import s from "./ArticlePage.module.scss";

export default function ArticlePage({ match }) {
  const { id } = match.params;

  const article = useMemo(() => {
    return data.find((i) => (i.id === +id));
  }, [id]);

  return (
    <div className={s.ArticlePage}>
      <ArticleBlock {...article} />
    </div>
  );
}
