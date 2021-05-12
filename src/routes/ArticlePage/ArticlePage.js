import React, { useMemo } from "react";
import { ArticleBlock } from "../../components/ArticleBlock/ArticleBlock";
import data from "../../articles_data.json";
import comments from "../../comments_data.json";
import { CommentsBlock } from "../../components/CommentsBlock/CommentsBlock";
import s from "./ArticlePage.module.scss";

export default function ArticlePage({ match }) {
  const { id } = match.params;

  const article = useMemo(() => {
    return data.find((i) => i.id === +id);
  }, [id]);

  const articleComments = useMemo(() => {
    return comments.find((i) => i.articleId === +id);
  }, [id]);

  return (
    <div className={s.ArticlePage}>
      <ArticleBlock {...article} />
      <CommentsBlock
        comments={articleComments?.comments}
        className={s.ArticlePage__comments}
      />
    </div>
  );
}
