import React, { useMemo } from "react";
import clsx from "clsx";
import { Tags } from "../Tags/Tags";
import s from "./ArticleBlock.module.scss";

export const dataTypeEnum = {
  TEXT: "text",
  IMAGE: "image",
  LINK: "link",
};

export function ArticleBlock({
  title,
  article,
  isSplit,
  authorData,
  tags,
  countries,
}) {
  const parsedContent = useMemo(() => {
    article.map((data) => {
      if (data.type === dataTypeEnum.image) {
        return <img src={data.content}>{data.content}</img>;
      } else if (data.type === dataTypeEnum.LINK) {
        return <a href={data.content}>{data.content}</a>;
      }
      return <p>{data.content}</p>;
    });
  });

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {authorData.nickname} <span>{authorData.rating}</span>
      </div>
      <div className={clsx(s.article, { [s.split]: isSplit })}>
        {parsedContent}
      </div>
      <div>
        <Tags tags={tags} />
        <Tags tags={countries} />
      </div>
    </div>
  );
}
