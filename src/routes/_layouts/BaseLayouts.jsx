import { Button } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../../assets/icons/arrow.svg";
import s from "./BaseLayouts.module.scss";

export default function BaseLayouts(Component) {
  return (props) => {
    console.log(props);
    const { history, match } = props;

    return (
      <div className={s.BaseLayouts}>
        <div className={s.BaseLayouts__header}>
          <Link to="/" className={s.BaseLayouts__logo}>
            Путешествуй
          </Link>
          <div className={s.BaseLayouts__links}>
            <Link to={"/blogs"}>Блог</Link>
            <Link to={"/blogs/create"}>Создать статью</Link>
            <Link to={"/guide"}>Гайд</Link>
          </div>
        </div>
        {match.path !== "/" && (
          <div className={s.BaseLayouts__back} onClick={() => history.goBack()}>
            <ArrowSvg />
            <div>Назад</div>
          </div>
        )}
        <Component {...props} />
      </div>
    );
  };
}
