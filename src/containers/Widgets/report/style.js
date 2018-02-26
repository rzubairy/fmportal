import styled from 'styled-components';
import { palette } from 'styled-theme';

const ReportWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 20px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border: 1px solid ${palette('border', 2)};

  .isoWidgetLabel {
    font-size: 18px;
    color: ${palette('text', 0)};
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 15px;
  }

  .isoReportsWidgetBar {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .isoSingleProgressBar {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  hr.dividerstyle1 {
  	border-top: 1px solid #8c8b8b;
    ${'' /* margin-bottom: 10px; */}
    ${'' /* padding-bottom: 30px; */}
  }

  .isoDescription {
    font-size: 12px;
    color: ${palette('primary', 2)};
    font-weight: 400;
    text-decoration: underline;
text-align: right;
    line-height: 1.25;
    margin: 0;
  }
`;

export { ReportWidgetWrapper };
