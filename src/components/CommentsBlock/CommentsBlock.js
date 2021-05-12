import clsx from "clsx";
import React, { useMemo } from "react";
import { parseNumber } from "../../utils/string";
import { CommentBlock } from "./CommentBlock";
import s from "./CommentsBlock.module.scss";

export function CommentsBlock({ comments, className }) {
  return (
    <div className={clsx(s.CommentsBlock, className)}>
      {comments?.map((comment, i) => {
        return (
          <CommentBlock key={i} user={comment.user} comment={comment.comment} />
        );
      })}
    </div>
  );
}
