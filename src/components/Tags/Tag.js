import React from "react";
import clsx from "clsx";
import s from "./Tags.module.scss";

export function Tag({ title, className, tagColor, ...props }) {
  return (
    <div
      className={clsx(s.Tag, className)}
      style={{ backgroundColor: tagColor }}
      {...props}
    >
      {title}
    </div>
  );
}
