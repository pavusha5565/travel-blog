import React from "react";
import { Link } from "react-router-dom";
import s from "./BaseLayouts.module.scss";

export default function BaseLayouts(Component) {
  return (props) => {
    return (
      <div className={s.BaseLayouts}>
        <div className={s.BaseLayouts__header}>
          <Link to="/" className={s.BaseLayouts__logo}>
            Путешествуй
          </Link>
          <div className={s.BaseLayouts__links}>
            <Link to={"/blogs"}>Блог</Link>
            <Link to={'/blogs/create'}>Создать статью</Link>
            <Link to={"/guide"}>Гайд</Link>
          </div>
        </div>
        <Component {...props} />
      </div>
    );
  };
}
