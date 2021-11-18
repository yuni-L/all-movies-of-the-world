/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Modal from '../modal/modal'
import './movies.scss'
import 'asset/style/common.scss'

const movies = () => {
  console.log('movies');
  const [ isShowModal, setIsShowModal ] = useState(false);
  return (
    <>
      <button className='size-20' onClick={() => setIsShowModal(true)}>모달 테스트 버튼</button>
      {isShowModal && <Modal setIsShowModal={setIsShowModal}/> }
    </>
  )
}

export default movies;