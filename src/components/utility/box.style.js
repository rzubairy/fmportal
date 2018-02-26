import styled from 'styled-components';
import { palette } from 'styled-theme';

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px 10px 20px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border: 1px solid ${palette('border', 2)};
  ${'' /* margin: 0 17px 30px; */}

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 10px 20px 10px 20px;
    ${'' /* margin: 0 10px 30px; */}
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export { BoxWrapper };
