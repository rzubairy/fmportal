import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../config/style-util';

const XDCardWidgetWrapper = styled.div`
  width: 330px;
  ${'' /* display: flex; */}
  flex-direction: column;
  align-items:flex-start;
  background-color: #ffffff;
  ${'' /* overflow-y: hidden; */}
  border: 1px solid ${palette('border', 2)};
  padding: 10px 10px 10px 10px;

  .isoXDCardImage {
    width: 50px;
    height: 50px;
    ${'' /* float:left; */}
    ${'' /* position: relative; */}
    ${'' /* margin-left: 10px; */}
    ${'' /* margin-top: 10px; */}
    ${'' /* transform: translateY(-50%); */}
    ${'' /* display: -webkit-inline-flex;
    display: -ms-inline-flex;
    display: inline-flex; */}
    ${'' /* align-items: center;
    justify-content: center; */}
    overflow: hidden;
    ${'' /* margin-bottom: 35px; */}
    ${borderRadius('50%')};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .isoXDCardBody {
    align-items: flex-start;
    ${'' /* display: flex; */}
    width: 100%;
    flex-direction: column;
    text-align:justify;
  }
    .isoName {
      font-size: 18px;
      color: ${palette('text', 0)};
      font-weight: 500;
      margin: -50px 0px 5px 100px;
      line-height: 1.2;
    }
    .rightheader {
      margin-left: 75px;
      margin-right: 10px;
      margin-top: -30px;
    }
    .drvname = {
      font-size: 16px;
      color: #4B4B4B;
      font-weight: 600;
      margin-top: 40px;
      padding-left: 10px;
      line-height: 1;
    }
    .leftjust {
      width: 100%;
      align-items: center;
      text-align: justify;
      margin-top: 10px;
      ${'' /* margin-left: 10px; */}
      margin-right: 10px;
    }

    .tableft {
      text-align: left;
      padding-left: 10px;
    }
    .tableright {
      text-align: right;
    }

    .livestatus {
      width: 100%;
      margin-top: 0px;
      margin-left: 40px;
    }
    .statusicon {
      ${'' /* float: left; */}
      position: relative;
      margin-right: 10px;
      padding-right: 10px:
      margin-top: 30px;
      height: 28px;
      width: 28px;
    }

    .fuelicon {
      ${'' /* margin-right: 10px; */}
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
    .margin10Top {
      margin-top: 10px;
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
      height: 20px;
      float: right;
      width: 20px;
      color: inherit;
      .hover {
        transform: scale(1.2,1.2);
      }
    }
    .buttonrightjustify {
      align-items: flex-end;
      float: right;
      width: 18px;
      ${'' /* margin-right: 10px; */}
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
    .buttonnoborder {
      border-width: 0px;
      .hover {
        border-width: 0px;
      }

    }
    .statusheader {
      ${'' /* margin-top: 10px; */}
      justify-content: center;
    }
    hr.style1 {
      border-top: 1px solid #8c8b8b;
    }
    p.tight {
      margin-top: -10px;
      color: #788195;
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
    dottxt {
      font-size: 14px;
      margin-top: 0px;
      align-items: center;
      line-height: 2.5;
      margin-right: 0px;
    }
    drvname = {
      font-size: 16px;
      color: #4B4B4B;
      font-weight: 600;
      margin-top: 40px;
      padding-left: 10px;
      line-height: 1;
    }

`;

export { XDCardWidgetWrapper };
