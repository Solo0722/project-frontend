import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const CourseCard = () => {
  return (
    <CourseCardWrapper>
      <ImageWrapper>
        <img src="/img.jpg" alt="course-img" />
      </ImageWrapper>
      <ContentWrapper>
        <p>COE 392: Embedded Systems</p>
        <p>Ing B. Kommey</p>
      </ContentWrapper>
    </CourseCardWrapper>
  );
};

const CourseCardWrapper = styled.div`
  width: 32%;
  min-height: 200px;
  /* padding: 0.5rem; */
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 10px;
  /* background: rgba(255, 255, 255, 0.02); */
  /* backdrop-filter: blur(4px); */
  /* -webkit-backdrop-filter: blur(4px); */
  cursor: pointer;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding-bottom: 0.5rem;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

export default CourseCard;