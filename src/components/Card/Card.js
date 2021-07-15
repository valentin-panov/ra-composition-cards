/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ImageCap from './ImageCap/ImageCap';
import Title from './Title/Title';
import Description from './Description/Description';
import BtnAction from './BtnAction/BtnAction';

function Card(props) {
  return (
    <div className='Card'>
      {props.imgSrc ? <ImageCap {...props} /> : null}
      <div className='Card_body'>
        <Title {...props} />
        <Description {...props} />
        <BtnAction {...props} />
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
