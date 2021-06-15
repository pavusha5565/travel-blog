import { Button, OutlinedInput, TextField } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { parseNumber } from "../../utils/string";
import s from "./CommentsBlock.module.scss";

export function CommentBlock({ user, comment }) {
  const [answer, setAnswer] = useState(null);

  return (
    <div className={s.CommentBlock}>
      <div className={s.CommentBlock__nickname}>
        {user.nickname} <span>{parseNumber(user.rating)}</span>
      </div>
      <div className={s.CommentBlock__comment}>{comment}</div>
      {answer === null && (
        <button
          className={s.CommentBlock__replay}
          onClick={() => {
            setAnswer("");
          }}
        >
          Ответить
        </button>
      )}
      {answer !== null && (
        <div className={s.CommentBlock__answer}>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            className={s.CommentBlock__input}
          />
          <Button
            variant="contained"
            className={s.CommentBlock__send}
            onClick={() => {
              setAnswer(null);
            }}
          >
            Ответить
          </Button>
        </div>
      )}
    </div>
  );
}
