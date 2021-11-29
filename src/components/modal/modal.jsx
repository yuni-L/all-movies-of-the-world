/* eslint-disable react/style-prop-object */
import React from "react";
import { FaTimes } from "react-icons/fa";
import "./modal.scss";
import "asset/style/common.scss";

const modal = ({ setIsShowModal, setClickedMovieInfo, clickedMovieInfo }) => {
  console.log("modal", clickedMovieInfo);
  return (
    <div className="back">
      <div className="movie-modal">
        <FaTimes
        className="movie-modal-close f-right pointer"
          onClick={() => {
            setIsShowModal(false);
            setClickedMovieInfo(null);
          }}
          size='30'
        />
        <div className="clear"></div>
        {/* movie-modal-contents start */}
        <div className="movie-modal-contents">
          <span className="size-30 bold">{clickedMovieInfo.title}</span><br />
          <span className="size-20">{clickedMovieInfo.subtitle}</span>
          <div className="movie-modal-contents-info">
            <img className="movie-modal-contents-info-img" src={clickedMovieInfo.image} alt={clickedMovieInfo.title}/>
            <div>ssss</div>
          </div>
        </div>
        {/* movie-modal-contents end */}
      </div>
    </div>
  );
};

export default modal;
