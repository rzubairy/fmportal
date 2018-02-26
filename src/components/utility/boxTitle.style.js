import styled from 'styled-components';
import { palette, font } from 'styled-theme';

const BoxTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${palette('text', 0)};
  line-height: 1.2;
  ${'' /* margin: 0 0 15px; */}
  ${'' /* margin-top: -3px; */}
  ${'' /* margin-bottom: 5px; */}
`;

const BoxSubTitle = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${palette('text', 3)};
  line-height: 13px;
`;

export { BoxTitle, BoxSubTitle };
