import React, { useMemo } from "react";
import { parseNumber } from "../../utils/string";
import s from "./CommentsBlock.module.scss";

export function CommentBlock({ user, comment }) {
  return (
    <div className={s.CommentBlock}>
      <div className={s.CommentBlock__nickname}>
        {user.nickname} <span>{parseNumber(user.rating)}</span>
      </div>
      <div className={s.CommentBlock__comment}>{comment}</div>
      <button className={s.CommentBlock__replay}>Ответить</button>
    </div>
  );
}
