/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Modal from '../modal/modal'
import './movies.scss'
import 'asset/style/common.scss'

const movies = () => {
  console.log('movies');
  const [ isShowModal, setIsShowModal ] = useState(false);
  const [ movieList, setMovieLsit ] = useState([{title: '무비1'}, {title: '무비2'}, {title: '무비3'}, {title: '무비4'}]);
  useEffect(() => {
    // 무비 리스트 api 연결
  }, [])
  return (
    <>
      {
        movieList.map((movie, index) => (
          <div key={index} className='size-20'>{movie.title}</div>
        ))
      }
      <button className='size-20' onClick={() => setIsShowModal(true)}>모달 테스트 버튼</button>
      {isShowModal && <Modal setIsShowModal={setIsShowModal}/> }
    </>
  )
}

export default movies;