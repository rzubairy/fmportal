import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import ContentHolder from '../../components/utility/contentHolder';
import Box from '../../components/utility/box';
import basicStyle from '../../config/basicStyle';
import DashMap from './map/dashMap';
import IntlMessages from '../../components/utility/intlMessages';

export default class Dashboard extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>DASHBOARD</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box title={<IntlMessages id="Map.leaflet.leafletDashboardMapTitle" />}>
              <ContentHolder>
                <DashMap />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}

