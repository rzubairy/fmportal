import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../config/style-util';

const DCardWidgetWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  background-color: #ffffff;
  overflow-y: visible;
  border: 1px solid ${palette('border', 2)};
  padding: 0px 10px 10px 10px;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.25);

  .isoDCardImage {
    width: 80px;
    height: 80px;
    float:left;
    position: relative;
    margin-left: 10px;
    transform: translateY(-50%);
    display: -webkit-inline-flex;
    display: -ms-inline-flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${'' /* margin-bottom: 35px; */}
    ${borderRadius('50%')};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .isoDCardBody {
    align-items: flex-start;
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align:justify;

    .isoName {
      font-size: 18px;
      color: ${palette('text', 0)};
      font-weight: 500;
      margin: -50px 0px 5px 100px;
      line-height: 1.2;
    }

    .rightheader {
      margin-left: 100px;
      margin-right: 10px;
      margin-top: -50px;
    }

    .leftjust {
      width: 100%;
      align-items: center;
      text-align: justify;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }

    .livestatus {
      width: 100%;
      margin-top: 15px;
      margin-left: 100px;
    }
    .statusicon {
      ${'' /* float: left;
      position: relative; */}
      margin-right: 10px;
      margin-top: -10px;
      height: 32px;
      width: 32px;
    }

    .fuelicon {
      margin-right: 10px;
      height: 20px;
      width: 20px;
    }

    .locationicon {
      float: left;
      height: 20px;
      width: 20px;
    }

    .speedicon {
    margin-right: 10px;
    height: 20px;
    }

    .margin10 {
    margin-left: 10px;
    }

    .isoDesgTitle {
      font-size: 13px;
      color: ${palette('text', 2)};
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }

    .isoDescription {
      font-size: 13px;
      color: ${palette('text', 2)};
      font-weight: 400;
      margin: 20px 0 0 0;
      line-height: 1.5;
    }

    .isoSocialWidgetWrapper {
      margin-top: 25px;
    }
    .buttonicon{
      ${'' /* content: '\f2d4';
      font-family: 'Ionicons' !important; */}
      height: 14px;
      width: 14px;
      font-size: inherit;
      color: inherit;
    }
    .buttonrightjustify {
      align-items: flex-end;
      float: right;
      margin-right: 10px;
    }
    .buttonleftjustify {
      align-items:flex-start;
      float: left;
      margin-left: 10px;
    }
    .buttonleftjust {
      width: 100%;
      align-items: center;
      text-align: justify;
      margin-top: 10px;

    }
    psm {
      text-align: justify;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 14px;
      line-height: 125%;
      color: #4B4B4B;
    }

    psmc {
      text-align: justify;
      align-items: center;
      font-size: 14px;
      padding-left: 10px;
      padding-right: 10px;
      line-height: 125%;
      color: #4B4B4B;
    }

    psmrj {
      text-align: right;
      align-items: flex-end;
      padding-top: 10px;
      font-size: 14px;
      padding-left: 10px;
      padding-right: 10px;
      line-height: 125%;
      color: #4B4B4B;
    }

    icontxt {
      font-size: 14px;
      margin-left: 0;
      line-height: 1.5;
      margin-right: 15px;
    }

  }





`;

export { DCardWidgetWrapper };
