import styled from 'styled-components';
import { palette, font } from 'styled-theme';

const DashAppHolder = styled.div`
  font-family: ${font('primary', 0)};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {
    &::selection {
      background: ${palette('primary', 0)};
      color: #fff;
    }
  }

h1, h2, h3, h4, h5, h6, h7 {
  font-family: ${font('primaryheader', 0)};
}

h7 {
  font-size: 16px;
  color: #4B4B4B;
  font-weight: 500;
  padding-top: 6px;
  line-height: 2.2;
}
  .ant-row:not(.ant-form-item) {
    ${'' /* margin-left: -8px;
    margin-right: -8px; */};
    &:before,
    &:after {
      display: none;
    }
  }

  .ant-row > div {
    padding: 0;
  }

  .isoLeftRightComponent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .isoCenterComponent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default DashAppHolder;
