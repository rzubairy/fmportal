import React, { Component } from 'react';
import Async from '../../helpers/asyncComponent';
import { Row, Col } from 'antd';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../config/basicStyle';

import * as configs from './config';


const GoogleChart = (props) => <Async load={import(/* webpackChunkName: "googleChart" */ 'react-google-charts')} componentProps={props} componentArguement={'googleChart'} />;

export default class ReCharts extends Component {

  render() {
    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    const { rowStyle, colStyle, gutter } = basicStyle;
    return(<LayoutWrapper className="r3piMapPage">
      {/* <PageHeader>Google Charts</PageHeader> */}
      <Row style={rowStyle} gutter={gutter} justify="start">

        <Col md={24} xs={24} style={colStyle}>
          <Box
            title={"Hours of Service"}
          >
            <ContentHolder>
              <GoogleChart {...configs.lineChart} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>

    </LayoutWrapper>);
  }
};
export { GoogleChart };
