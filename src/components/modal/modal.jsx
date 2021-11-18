/* eslint-disable react/style-prop-object */
import React from 'react';
import './modal.scss'
import 'asset/style/common.scss'

const modal = ({setIsShowModal}) => {
  console.log('modal');
  return (
    <div>
      <button onClick={() => setIsShowModal(false)}>닫기</button>
    </div>
  )
}

export default modal