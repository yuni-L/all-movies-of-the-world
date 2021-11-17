/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import './input.scss'
import 'asset/style/common.scss'
import SearchLayer from './searchLayer'

const input = () => {
  const maxMobileWidth = 750;
  const [isMobile, setIsMobile] = useState(false);
  const [isShowSearchLayer, setIsShowSearchLayer] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= maxMobileWidth);
  }, []);
  return (
    <>
      <input className="input size-18" onClick={() => isMobile && setIsShowSearchLayer(true)}/>
      {
        isShowSearchLayer && <SearchLayer setIsShowSearchLayer={setIsShowSearchLayer}/>
      }
    </>
  )
}

export default input;