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
      </div>
    </div>
  );
};

export default modal;
