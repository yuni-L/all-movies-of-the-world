import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import "./movies.scss";
import "asset/style/common.scss";
import axios from "axios";
import dayjs from "dayjs";

const naverApiHeader = {
  "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
  "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET_ID,
};

/**
 *
 * @param {String} title - 무비 라인 대표 제목
 * @param {String} type - 호출 할 api type
 * @returns
 */
const movies = ({ title, type }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(async () => {
    loadMovieList();
  }, []);
  /**
   * 영화 리스트 불러오기
   * @todo 효율적인 로직 구현 필요
   */
  const loadMovieList = async () => {
    const movieNameList = [];
    const movieInfoList = [];
    switch (type) {
      case "boxOffice": {
        // 박스오피스 순위 불러오기
        const yesterday = dayjs().subtract(1, "day").format("YYYYMMDD"); // api가 오늘 기준으로는 리스트 생성 불가
        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIES_API_KEY}&targetDt=${yesterday}`;
        await axios.get(url).then((response) => {
          for (const movie of response.data.boxOfficeResult
            .dailyBoxOfficeList) {
            movieNameList.push(movie.movieNm);
          }
        });
        break;
      }
      default:
        break;
    }
    for (const movieName of movieNameList) {
      await axios
        .get("/api/v1/search/movie.json", {
          headers: naverApiHeader,
          params: { query: movieName },
        })
        .then((response) => {
          response.data.items[0].title = response.data.items[0].title
            .replace("<b>", "")
            .replace("</b>", "");
          movieInfoList.push(response.data.items[0]);
        });
    }
    setMovieList(movieInfoList);
  };
  return (
    <>
      {movieList.length ? (
        <div className="movie-wrap">
          <div className="movie-title size-20 bold white">{title}</div>
          <div className="movie-list">
            {movieList.map((movie, index) => (
              <div key={index} className="movie-list-item size-20">
                <img className="movie-list-item-img" src={movie.image} alt={movie.title} />
                <div>{movie.title}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <button className="size-20" onClick={() => setIsShowModal(true)}>
        모달 테스트 버튼
      </button>
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
    </>
  );
};

export default movies;
