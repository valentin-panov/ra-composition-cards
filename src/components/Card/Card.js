/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ImageCap from './ImageCap/ImageCap';
import Title from './Title/Title';
import Description from './Description/Description';
import BtnAction from './BtnAction/BtnAction';
import CardBody from './CardBody/CardBody';

function Card(props) {
  return (
    <div className='Card'>
      {props.imgSrc ? <ImageCap {...props} /> : null}
      <CardBody>
        <Title {...props} />
        <Description {...props} />
        <BtnAction {...props} />
      </CardBody>
    </div>
  );
}

Card.propTypes = {};

export default Card;
