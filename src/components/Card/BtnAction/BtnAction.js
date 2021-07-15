/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function BtnAction(props) {
  const { actionLink, actionCall } = props;
  return (
    <a className='BtnAction' href={actionLink}>
      {actionCall}
    </a>
  );
}

BtnAction.propTypes = {};

export default BtnAction;
