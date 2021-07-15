/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { title } = props;
  return <h5 className='Title'>{title}</h5>;
}

Title.propTypes = {};

export default Title;
