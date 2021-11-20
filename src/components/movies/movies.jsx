/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Modal from '../modal/modal'
import './movies.scss'
import 'asset/style/common.scss'
import axios from 'axios';
import dayjs from 'dayjs';

const movies = () => {
  const [ isShowModal, setIsShowModal ] = useState(false);
  const [ movieList, setMovieList ] = useState([]);
  useEffect(() => {
    const day = dayjs().subtract(1, 'day').format('YYYYMMDD');
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIES_API_KEY}&targetDt=${day}`
    axios.get(url).then((response) => {
      setMovieList(response.data.boxOfficeResult.dailyBoxOfficeList);
    });
  }, [])
  return (
    <>
      {
        movieList.length ?
        movieList.map((movie, index) => (
          <div key={index} className='size-20'>{movie.movieNm}</div>
        ))
        : null
      }
      <button className='size-20' onClick={() => setIsShowModal(true)}>모달 테스트 버튼</button>
      {isShowModal && <Modal setIsShowModal={setIsShowModal}/> }
    </>
  )
}

export default movies;