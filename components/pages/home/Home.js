import React from "react";
import styled from "styled-components";
import homepageWorking from "../../../public/homepage-working.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslationRouter } from "../../../hooks/useTranslationRouter";

export const HomeComponent = () => {
  const { langConst } = useTranslationRouter();
  return (
    <StyledHomeComponent>
      <section className="top-section">
        <div className="top-section-left">
          <div className="container">
            <h1>{langConst.HOME_PAGE_TITLE}</h1>
            <Link href="/courses">
              <a color="#82B1FF" className="start-learning-btn">
                {langConst.START_LEARNING}
              </a>
            </Link>
          </div>
        </div>
        <div className="top-section-right">
          <Image
            src={homepageWorking}
            alt="working"
            width={1000}
            height={1000}
            className="background-img"
          />
        </div>
      </section>
    </StyledHomeComponent>
  );
};

const StyledHomeComponent = styled.div`
  background-color: var(--main-background-color);
  color: var(--main-text-color);
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  top: var(--navbar-height);
  padding: 50px 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;

  .top-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 20px;
  }
  .top-section-left {
    width: 100%;
    height: 100%;

    padding-top: 100px;
  }

  .container {
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .start-learning-btn {
    align-self: center;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 40px;
    cursor: pointer;
    border: 2px solid #82b1ff;
    text-decoration: none;
    color: var(--second-text-color);
    font-size: 16px;
    transition: background-color 0.15s ease-in, transform 0.15s ease-in,
      color 0.15s ease-in;
  }

  .start-learning-btn:hover {
    background-color: #82b1ff;
    color: white;
    transform: translateY(-2px);
  }

  .top-section-right {
    width: 100%;
    height: 100%;
    transform: translateY(-50px);
    background-color: var(--main-background-color);
  }

  @media (max-width: 1100px) {
    padding: 0;

    .top-section {
      flex-direction: column;
    }

    .top-section-right {
      transform: translateY(0);
    }
  }
`;
