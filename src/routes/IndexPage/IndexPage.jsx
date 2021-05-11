import React from "react";
import Gallery from "react-photo-gallery";
import roadImage from "../../assets/images/roadImage.jpg";
import { ContentBlock } from "../../components/ContentBlock/ContentBlock";

// icons
import { ReactComponent as ArticleIcon } from "../../assets/icons/article.svg";
import { ReactComponent as InstructionIcon } from "../../assets/icons/instructions.svg";

// Gallery
import photo1 from "../../assets/images/gallery-photo-1.jpg";
import photo2 from "../../assets/images/gallery-photo-2.jpg";
import photo3 from "../../assets/images/gallery-photo-3.jpg";
import photo4 from "../../assets/images/gallery-photo-4.jpg";
import photo5 from "../../assets/images/gallery-photo-5.jpg";
import photo6 from "../../assets/images/gallery-photo-6.jpg";
import photo7 from "../../assets/images/gallery-photo-7.jpg";
import photo8 from "../../assets/images/gallery-photo-8.jpg";
import photo9 from "../../assets/images/gallery-photo-9.jpg";
import photo10 from "../../assets/images/gallery-photo-10.jpg";

import s from "./IndexPage.module.scss";
import { Link } from "react-router-dom";

const imageGallery = [
  {
    src: photo1,
    width: 3,
    height: 4,
  },
  {
    src: photo2,
    width: 3,
    height: 4,
  },
  {
    src: photo3,
    width: 4,
    height: 3,
  },
  {
    src: photo4,
    width: 3,
    height: 4,
  },
  {
    src: photo5,
    width: 3,
    height: 4,
  },
  {
    src: photo6,
    width: 4,
    height: 4,
  },
  {
    src: photo7,
    width: 3,
    height: 4,
  },
  {
    src: photo8,
    width: 4,
    height: 3,
  },
  {
    src: photo9,
    width: 3,
    height: 4,
  },
  {
    src: photo10,
    width: 3,
    height: 4,
  },
];

export default function IndexPage(props) {
  return (
    <div className={s.IndexPage}>
      <div className={s.image} style={{ backgroundImage: `url(${roadImage})` }}>
        <div className={s.image__content}>
          <div className={s.image__motivationText}>
            <p>Только начни путешествовать</p>
            <p>и ты уже не сможешь остановиться.</p>
          </div>
          <div className={s.image__quote}>
            <p>
              Истинное назначение вашего путешествия — это не место на карте, а
              новый взгляд на жизнь.
            </p>
            <p className={s.image__quoteAuthor}>Генри Миллер</p>
          </div>
        </div>
        <div className={s.image__blur} />
      </div>
      <ContentBlock className={s.iconBlock}>
        <Link to={"/blog"} className={s.iconBlock__content}>
          Блог
          <ArticleIcon />
        </Link>
        <Link to={"/guide"} className={s.iconBlock__content}>
          Гайд
          <InstructionIcon />
        </Link>
      </ContentBlock>
      <ContentBlock title={"Жизнь это движение"}>
        <p>
          Путешествия в наше время очень популярны. Много людей путешествуют в
          другие страны, если у них есть такая возможность. Путешествия
          позволяют получить новый опыт, узнать о жизни людей в других странах и
          континентах. Я думаю, что это очень интересно – исследовать что-то
          новое, новые места и такую разную жизнь. Во время поездки ты
          встречаешь новых людей, пробуешь новую еду, видишь знаменитые
          достопримечательности своими глазами.
        </p>
        <p>
          Есть много способов путешествовать – на поезде, на самолете, на
          корабле, пешком. Если ты хочешь посетить далекую страну, то точно
          выберешь самолет. Если твоя цель – увидеть много стран за короткое
          время, то ты выберешь путешествие на автобусе или машине. Если хочешь
          быть ближе к природе, то, наверное, выберешь пеший поход.
        </p>
      </ContentBlock>
      <div className={s.gallery}>
        <h2 className={s.gallery__header}>Галлерея</h2>
        <Gallery photos={imageGallery} direction={"row"} />
      </div>
    </div>
  );
}
