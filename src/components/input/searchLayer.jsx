import React from 'react'
import './input.scss'
import 'asset/style/common.scss'

const searchLayer = ({setIsShowSearchLayer}) => {
  console.log('searchLayer');
  return (
    <div className='search-layer'>
      <button onClick={() => setIsShowSearchLayer(false)}>
        ssssssssss
      </button>
    </div>
  )

}

export default searchLayer;