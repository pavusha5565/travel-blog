import React from "react";
import {
  ArticleBlock,
  dataTypeEnum,
} from "../../components/ArticleBlock/ArticleBlock";
import data from "../../data.json";
import s from "./BlogsPage.module.scss";

export function BlogsPage() {
  return (
    <div className={s.BlogsPage__article}>
      {data?.map((article, i) => {
        return <ArticleBlock key={i} {...article} isSplit />;
      })}
    </div>
  );
}
