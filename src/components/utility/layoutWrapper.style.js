import styled from 'styled-components';

const LayoutContentWrapper = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    padding: 0px 0px;
  }

  @media (max-width: 580px) {
    padding: 0px;
  }
`;

export { LayoutContentWrapper };
