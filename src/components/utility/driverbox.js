import React from 'react';
import BoxTitleWrapper from './driverboxTitle';
import { BoxWrapper } from './driverbox.style';

export default props => (
  <BoxWrapper className="isoBoxWrapper">
    <BoxTitleWrapper title={props.title} subtitle={props.subtitle} />
    {props.children}
  </BoxWrapper>
);
