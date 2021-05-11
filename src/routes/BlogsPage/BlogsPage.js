import React from "react";
import {
  ArticleBlock,
  dataTypeEnum,
} from "../../components/ArticleBlock/ArticleBlock";
import photo1 from "../../assets/images/gallery-photo-1.jpg";
import s from "./BlogsPage.module.scss";

const data = {
  title: "Кратота природы",
  article: [
    {
      type: dataTypeEnum.TEXT,
      content:
        "Тёплые месяцы уже близко, и полуостров постепенно готовит свои пляжи к сезонному десанту в купальниках. Однако Крым — это не только традиционный отдых на песке у моря. Составили подборку для тех, кто ищет в путешествии чуть больше, чем возможность понежиться на берегу. Крым — перекрёсток цивилизаций. Историческое, этническое и культурное наследие буквально окутало регион таинственностью и мистическими преданиями. В разное время здесь жили греки, скифы, римляне, славяне и сарматы. Их мифы и поверья сплелись воедино, превратились со временем в туристические страшилки и сделали многие местные достопримечательности магнитом для уфологов, шаманов, целителей и прочих эзотериков.",
    },
    {
      type: dataTypeEnum.IMAGE,
      content: photo1,
    },
  ],
  tags: [{ title: "Красота" }, { title: "Море" }],
  countries: [{ title: "Греция" }, { title: "Кипр" }]
};

export function BlogsPage() {
  return (
    <div>
      <ArticleBlock {...data} isSplit authorData={{nickname: 'Путешественник', rating: 124}}  />
    </div>
  );
}
