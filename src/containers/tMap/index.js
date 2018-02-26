import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import ContentHolder from '../../components/utility/contentHolder';
import Box from '../../components/utility/driverbox';
import basicStyle from '../../config/basicStyle';
import Button from 'antd';
import ReactDOM from 'react-dom';
import IntlMessages from '../../components/utility/intlMessages';
import Card from '../../containers/Uielements/expandCard/expandcard.style';
import XDCardWidget from '../Widgets/XDCard/XDCard-widget';
import IsoWidgetsWrapper from '../Widgets/widgets-wrapper';

import driverpic from '../../image/assets/arnieadams.jpg';
import driverstatusicon from '../../image/assets/Driving.png';
import fueliconsrc from '../../image/assets/fuel_pump2.png';
import speediconsrc from '../../image/assets/speedometer.png';
import locationiconsrc from '../../image/assets/locationicon.svg';
import destinationiconsrc from '../../image/icon/destinationicon.svg';
import truckiconsrc from '../../image/icon/truck_front_icon.svg';
import css from '../Collapsible/src/scss/app.scss';

import ColApp from '../Collapsible/src/js/ColApp';

var cardloc = {
  marginLeft: 0,
};

export default class MapCard extends Component {
    render() {
      const { rowStyle, colStyle, gutter } = basicStyle;
      const widgetPageStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        padding: '15px',
        overflow: 'hidden'
      };
    return (
      <div style={widgetPageStyle}>
      <Row style={rowStyle} gutter={gutter} justify="start">
        {/* <Col md={12} sm={12} xs={24} style={colStyle}>
          <ContentHolder style={cardloc}>
            <Card
              title={<IntlMessages id="uiElements.cards.cardTitle" />}
              extra={<a>{<IntlMessages id="uiElements.cards.more" />}</a>}
              style={{ width: '100%' }}>
              <p>{<IntlMessages id="uiElements.cards.lorem" />}</p>
              <p>{<IntlMessages id="uiElements.cards.cardContent" />}</p>
            </Card>
        </ContentHolder>
      </Col> */}
 
      <Col md={12} sm={12} xs={24} style={colStyle}>
        <isoWidgetsWrapper>
          <Box title={ < IntlMessages id = "Drivers" / > }>
        <XDCardWidget
            src={driverpic}
            alt="Arnie"
            statusalt="status"
            fueliconsrc={fueliconsrc}
            speediconsrc={speediconsrc}
            statusiconsrc={driverstatusicon}
            truckiconsrc={truckiconsrc}
            destinationiconsrc={destinationiconsrc}
            locationiconsrc={locationiconsrc}
            name="Arnie Adams"
            title={<IntlMessages id="widget.cardwidget.title" />}
            description={
              <IntlMessages id="widget.cardwidget.description" />
            }
          >
          </XDCardWidget>
        </Box>
        </isoWidgetsWrapper>
        </Col>
      <Col md={12} sm={12} xs={24} style={colStyle}>
      {/* <div><ColApp/></div> */}
      <div></div>
      </Col>
    </Row>

  </div>
    );
  }
}
