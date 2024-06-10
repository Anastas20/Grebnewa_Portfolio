import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Мой Блог</h1>
            <p className="font13">
              Здесь я рассказываю о новых статьях, книгах и программах,
              <br />
                которые мне довелось использовать.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Сайт"
                text="Занимаюсь созданием сайта на реймворке React, очень интересно!"
                tag="company"
                author="Анастасия, 2 дня назад"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Книги!"
                text='Прочла книги "Грокаем технологию биткоин", Калле Розенбаум и "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих", Бхаргава Адитья, о них осталось интересне впечатление!'
                tag="company"
                author="Анастасия, неделю назад"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Новый Питон!"
                text="Вышла новая версия Python: 3.13, очень ждала её выхода!"
                tag="company"
                author="Анастасия, месяц назад"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
