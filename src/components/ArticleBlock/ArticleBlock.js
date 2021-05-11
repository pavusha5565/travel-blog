import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { Tags } from "../Tags/Tags";
import { Link } from "react-router-dom";
import s from "./ArticleBlock.module.scss";

export const dataTypeEnum = {
  TEXT: "text",
  IMAGE: "image",
  LINK: "link",
  HEADER: "header",
};

const parseNumber = (number) => {
  return number > 1000000
    ? (number / 1000000).toFixed(0) + "М"
    : number > 1000
    ? (number / 1000).toFixed(0) + "К"
    : number;
};

export function ArticleBlock({
  id,
  title,
  article,
  isSplit,
  authorData,
  articleRating,
  tags,
  countries,
  className,
}) {
  const [split, setSplit] = useState(isSplit);
  const [rating, setRating] = useState(0);

  const parsedContent = useMemo(() => {
    return article.map((data, i) => {
      if (data.type === dataTypeEnum.IMAGE) {
        return (
          <div key={i} className={s.content__image}>
            <img src={data.content} />
          </div>
        );
      }
      if (data.type === dataTypeEnum.LINK) {
        return (
          <a key={i} className={s.content__link} href={data.content}>
            {data.content}
          </a>
        );
      }
      if (data.type === dataTypeEnum.HEADER) {
        return (
          <p key={i} className={s.content__header}>
            {data.content}
          </p>
        );
      }
      return (
        <p key={i} className={s.content__article}>
          {data.content}
        </p>
      );
    });
  });

  return (
    <div className={clsx(s.ArticleBlock, className)}>
      <div className={s.ArticleBlock__header}>
        <Link to={`/blogs/${id}`} className={s.ArticleBlock__title}>
          {title}
        </Link>
        <div className={s.ArticleBlock__rating}>
          <button
            className={clsx(s.rating__button, {
              [s.rating__button_active]: rating === 1,
            })}
            onClick={() => {
              setRating(rating === 0 ? 1 : 0);
            }}
          >
            +
          </button>
          <div className={s.rating__number}>
            {parseNumber(articleRating + rating)}
          </div>
          <button
            className={clsx(s.rating__button, {
              [s.rating__button_active]: rating === -1,
            })}
            onClick={() => {
              setRating(rating === 0 ? -1 : 0);
            }}
          >
            -
          </button>
        </div>
      </div>
      <Link
        to={`/user/${authorData.userId}`}
        className={s.ArticleBlock__author}
      >
        {authorData.nickname}{" "}
        <span className={s.rating}>{parseNumber(authorData.rating)}</span>
      </Link>
      <div
        className={clsx(s.ArticleBlock__content, {
          [s.ArticleBlock__content_split]: isSplit && split,
        })}
      >
        {parsedContent}
      </div>
      {isSplit && split && (
        <button
          className={s.ArticleBlock__showMore}
          onClick={() => {
            setSplit(!split);
          }}
        >
          Показать все
        </button>
      )}
      <div className={s.ArticleBlock__tags}>
        <Tags tags={[...tags, ...countries]} />
      </div>
    </div>
  );
}
