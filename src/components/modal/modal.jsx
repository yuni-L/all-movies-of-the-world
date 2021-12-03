import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./modal.scss";
import "asset/style/common.scss";
import axios from "axios";

const modal = ({ setIsShowModal, setClickedMovieInfo, clickedMovieInfo }) => {
  const [hasMovie, setHasMovie] = useState(false);
  useEffect(() => {
    const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${process.env.REACT_APP_KMDB_API_KEY}&query=${clickedMovieInfo.title}&detail=Y&sort=prodYear,1`;
    axios.get(url).then((response) => {
      if (response.data.Data[0].Count) {
        const {
          genre,
          nation,
          plots: { plot },
          rating,
          stlls,
        } = response.data.Data[0].Result[0];
        clickedMovieInfo.actor =
          typeof clickedMovieInfo.actor === "string" &&
          clickedMovieInfo.actor.split("|");
        clickedMovieInfo.director =
          typeof clickedMovieInfo.director === "string" &&
          clickedMovieInfo.director.split("|");
        setClickedMovieInfo({
          ...clickedMovieInfo,
          genre,
          nation,
          plot: plot[0],
          rating,
          stlls: stlls.split("|"),
        });
        setHasMovie(true);
      } else {
        alert("상세 자료가 없습니다.");
        modalClose();
      }
    });
  }, []);
  useEffect(() => {
    console.log("clickedMovieInfo", clickedMovieInfo);
  }, [clickedMovieInfo]);
  /**
   * 모달 닫기
   */
  const modalClose = () => {
    setClickedMovieInfo(null);
    setIsShowModal(false);
  };
  return (
    <div className="back">
      <div className="movie-modal">
        <FaTimes
          className="movie-modal-close f-right pointer"
          onClick={() => {
            modalClose();
          }}
          size="30"
        />
        <div className="clear"></div>
        {hasMovie ? (
          /* movie-modal-contents start */
          <div className="movie-modal-contents">
            <span className="size-30 bold">{clickedMovieInfo.title}</span>
            <br />
            <span className="size-20">{clickedMovieInfo.subtitle}</span>
            <span className="size-20">{clickedMovieInfo.pubDate}</span>
            <div className="movie-modal-contents-info">
              <img
                className="movie-modal-contents-info-img"
                src={clickedMovieInfo.image}
                alt={clickedMovieInfo.title}
              />
              <div className="size-14">
                <div>
                  개요 {clickedMovieInfo.genre} | {clickedMovieInfo.nation}
                </div>
                <div>등급 {clickedMovieInfo.rating}</div>
                <div>감독 {clickedMovieInfo.director}</div>
                <div>
                  출연
                  {clickedMovieInfo.actor}
                </div>
                <div>
                  줄거리{" "}
                  {clickedMovieInfo.plot && clickedMovieInfo.plot.plotText}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* movie-modal-contents end */
          <div>자료없음</div>
        )}
      </div>
    </div>
  );
};

export default modal;
