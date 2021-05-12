import React, { useMemo } from "react";
import { ArticleBlock } from "../../components/ArticleBlock/ArticleBlock";
import data from "../../articles_data.json";
import s from "./GuidePage.module.scss";

export default function GuidePage() {
  const article = useMemo(() => {
    return data[0];
  }, []);

  return (
    <div className={s.ArticlePage}>
      <ArticleBlock {...article} />
    </div>
  );
}
