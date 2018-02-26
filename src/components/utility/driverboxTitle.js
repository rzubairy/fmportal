import React from 'react';
import { BoxTitle, BoxSubTitle } from './driverboxTitle.style';

export default props => {
  return (
    <div>
      {props.title
        ? <BoxTitle className="isoBoxTitle">
            {' '}{props.title}{' '}
          </BoxTitle>
        : ''}
      {props.subtitle
        ? <BoxSubTitle className="isoBoxSubTitle">
            {' '}{props.subtitle}{' '}
          </BoxSubTitle>
        : ''}
    </div>
  );
};
