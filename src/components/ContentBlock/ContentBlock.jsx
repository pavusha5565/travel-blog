import clsx from "clsx";
import React from "react";
import s from "./ContentBlock.module.scss";

export function ContentBlock({ title, className, children }) {
  return (
    <div className={clsx(s.ContentBlock, className)}>
      {title && <h2 className={s.ContentBlock__title}>{title}</h2>}
      {children}
    </div>
  );
}
