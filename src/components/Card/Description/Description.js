/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Description(props) {
  const { text } = props;
  return <p className='Description'>{text}</p>;
}

Description.propTypes = {};

export default Description;
