import React from "react";
import clsx from "clsx";
import { Tag } from "./Tag";
import { useHistory } from "react-router";
import s from "./Tags.module.scss";

export function Tags({ tags }) {
  const history = useHistory();
  return (
    <div className={s.Tags}>
      {tags.map((tag, i) => {
        return (
          <Tag
            key={i}
            title={tag.title}
            onClick={tag.link && history.push(tag.link)}
            tagColor={tag.color}
            className={s.Tags__element}
          />
        );
      })}
    </div>
  );
}
