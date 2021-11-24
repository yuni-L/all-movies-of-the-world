import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import "./movies.scss";
import "asset/style/common.scss";
import axios from "axios";
import dayjs from "dayjs";

/**
 *
 * @param {String} title - 무비 라인 대표 제목
 * @param {String} type - 호출 할 api type
 * @returns
 */
const movies = ({ title, type }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [movieList, setMovieList] = useState([]);
  /**
   * @todo 환경변수 오류 해결하기
   */
  useEffect(async () => {
    loadMovieList();
    await axios.get(
      "/api/v1/search/movie.json",
      {
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET_ID,
        },
        params: { query: '아이언맨' },
      }
    ).then((response) => {
      console.log('rrrrr', response);
    });
  }, []);
  /**
   * 영화 리스트 불러오기
   */
  const loadMovieList = () => {
    switch (type) {
      case "boxOffice": {
        const yesterday = dayjs().subtract(1, "day").format("YYYYMMDD"); // api가 오늘 기준으로는 리스트 생성 불가
        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIES_API_KEY}&targetDt=${yesterday}`;
        axios.get(url).then((response) => {
          console.log("response", response);
          setMovieList(response.data.boxOfficeResult.dailyBoxOfficeList);
        });
        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      {movieList.length ? (
        <div className="movie-wrap">
          <div className="movie-title size-20 bold white">{title}</div>
          <div className="movie-list">
            {movieList.map((movie, index) => (
              <div key={index} className="movie-list-item size-20">
                {movie.movieNm}
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
