import React, { Component } from 'react';
import clone from 'clone';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import CardWidget from './card/card-widgets';
import ProgressWidget from './progress/progress-widget';
import SingleProgressWidget from './progress/progress-single';
import ReportsWidget from './report/report-widget';
import StickerWidget from './sticker/sticker-widget';
import SaleWidget from './sale/sale-widget';
import VCardWidget from './vCard/vCard-widget';
import SocialWidget from './social-widget/social-widget';
import SocialProfile from './social-widget/social-profile-icon';
import userpic from '../../image/user1.png';
import { TableViews, tableinfos, dataList } from '../Tables/antTables';
import * as rechartConfigs from '../Charts/recharts/config';
import { StackedAreaChart } from '../Charts/recharts/charts/';
import { GoogleChart } from '../Charts/googleChart/';
import * as googleChartConfigs from '../Charts/googleChart/config';
import IntlMessages from '../../components/utility/intlMessages';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import Progress from '../../components/uielements/progress';
import BasicMarkerMap from '../Map/GoogleMap/maps/basicMarker';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
// Temp imports for Driver card

import driverpic from '../../image/assets/arnieadams.jpg';
import driverstatusicon from '../../image/assets/Driving.png';
import fueliconsrc from '../../image/assets/fuel_pump2.png';
import speediconsrc from '../../image/assets/speedometer.png';
import locationiconsrc from '../../image/assets/locationicon.svg';

var mapheight = {
  height: '100%',
};


const tableDataList = clone(dataList);
tableDataList.size = 5;

export default class IsoWidgets extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const widgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      padding: '15px',
      overflow: 'hidden'
    };

    // const chartEvents = [
    //   {
    //     eventName: 'select',
    //     callback(Chart) {}
    //   }
    // ];

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500
    };
    return (
      <div style={widgetPageStyle}>
        <Row style={rowStyle} gutter={10} justify="start">
          <Col md={8} sm={24} xs={24} style={colStyle}>
            <isoWidgetsWrapper>
              <ReportsWidget label = {<IntlMessages id = "dashboard.logaudit"/>} details = {<IntlMessages id="View Logs"/>} >
              <Row style={rowStyle} gutter={0} justify="start">
                <Col md={10} sm={10} xs={10}>
                  <div>
                    <Progress type="dashboard" width={80} percent={73} strokeWidth={6}/>
                  </div>
                </Col>
                <Col md={12} sm={12} xs={12}>
                  <p className='progresstext'>{<IntlMessages id="dashboard.logaudit.compliant"/>}</p>
                  <p className='progresstext'>{<IntlMessages id="dashboard.logaudit.hosviolations"/>}</p>
                  <p className='progresstext'>{<IntlMessages id="dashboard.logaudit.logerror"/>}</p>
                </Col>
                <Col md={2} sm={2} xs={2}>
                  <p className='progresstextleft'>{<IntlMessages id="13"/>}</p>
                  <p className='progresstextleft'>{<IntlMessages id="4"/>}</p>
                  <p className='progresstextleft'>{<IntlMessages id="10"/>}</p>
                </Col>
              </Row>
              </ReportsWidget>
            </isoWidgetsWrapper>
            <isoWidgetsWrapper>
              <ReportsWidget label={<IntlMessages id = "dashboard.dashboardDVIRSummaryTitle" />} details = {<IntlMessages id = "View Inspection Reports"/>}>
                <Row style={rowStyle} gutter={0} justify="start">
                  <Col md={10} sm={10} xs={10} style={colStyle}>
                    <div>
                      <Progress type="dashboard" width={80} percent={52} strokeWidth={6}/>
                    </div>
                  </Col>
                  <Col md={12} sm={12} xs={12} style={colStyle}>
                    <p className='progresstext'>{<IntlMessages id="No Defects Found"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Defects Corrected"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Defects Need not be Corrected"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Defects Status Unknown"/>}</p>
                  </Col>
                  <Col md={2} sm={2} xs={2} style={colStyle}>
                    <p className='progresstextleft'>{<IntlMessages id="2"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="1"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="0"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="0"/>}</p>
                  </Col>
                </Row>
              </ReportsWidget>
            </isoWidgetsWrapper>
            <isoWidgetsWrapper>
              <ReportsWidget label={<IntlMessages id = "dashboard.recentDocuments" />} details={<IntlMessages id = "See Recent Documents" />}>
                <Row style={rowStyle} gutter={0} justify="start">
                  <Col md={10} sm={10} xs={10} style={colStyle}>
                    <div>
                      <Progress type="dashboard" width={80} percent={43} strokeWidth={6}/>
                    </div>
                  </Col>
                  <Col md={12} sm={12} xs={12} style={colStyle}>
                    <p className='progresstext'>{<IntlMessages id="Scale Ticket"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Fuel Receipt"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Bill of Lading"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Accident Photo"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Citation"/>}</p>
                    <p className='progresstext'>{<IntlMessages id="Other"/>}</p>
                  </Col>
                  <Col md={2} sm={2} xs={2} style={colStyle}>
                    <p className='progresstextleft'>{<IntlMessages id="2"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="1"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="1"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="0"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="0"/>}</p>
                    <p className='progresstextleft'>{<IntlMessages id="0"/>}</p>
                  </Col>
                </Row>
              </ReportsWidget>
            </isoWidgetsWrapper>
          </Col>

          <Col md={16} sm={24} xs={24} style={colStyle}>
          <LayoutWrapper style={mapheight} >
              <Box title={ < IntlMessages id = "Map.leaflet.leafletCustomMarkerTitle" / > }>
                <ContentHolder>
                  <BasicMarkerMap/>
                </ContentHolder>
              </Box>
            </LayoutWrapper>
          </Col>
        </Row>
      </div>
    );
  }
}
