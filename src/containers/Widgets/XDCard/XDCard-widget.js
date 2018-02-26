import React, { Component } from 'react';
import { XDCardWidgetWrapper } from './style';
import {Icon, Row, Col} from 'antd';
import styled from 'styled-components';
import Async from '../../../helpers/asyncComponent';
import IntlMessages from "../../../components/utility/intlMessages";
import basicStyle from '../../../config/basicStyle';
import Button from '../../../components/uielements/button';
import messageicon from '../../../image/icon/add_chat_filled.svg';
import filesicon from '../../../image/icon/files_icon.svg';
import logsicon from '../../../image/icon/logs.svg';
import dviricon from '../../../image/icon/dvir.svg';
import expandicon_down from '../../../image/assets/down.6.svg';
import expandicon_up from '../../../image/icon/up.2.svg';
import * as configs from '../../hos/config';


var expandicon = expandicon_down;
var expandicondown = expandicon_down;
var expandiconup = expandicon_up;

var downarrow  = {
  width: '20px',
  height: '100%',
};
var hidesome = {
  display: 'none',
};

// function myFunction() {
// var x = document.getElementById("myDIV");
//   const x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
//     return x;
// }

const GoogleChart = (props) => <Async load={import(/* webpackChunkName: "googleChart" */ 'react-google-charts')} componentProps={props} componentArguement={'googleChart'} />;

export default class XDCardWidget extends Component {

        constructor() {
      		super();
      		this.state = {shown: true,};
      	}

      	toggle() {
      		this.setState({
      			shown: !this.state.shown,
      		});
      	}

  render() {

    var shown = {
			display: this.state.shown ? "block" : "none",
  		};

		var hidden = {
			display: this.state.shown ? "none" : "block",
    };

{/*if (this.state === "none") {
    var expandicon = expandicondown}
  else {
    var expandicon = expandiconup}
  }*/}

    const { rowStyle, colStyle, offSet } = basicStyle;
    const {
      src,
      alt,
      statusiconsrc,
      name,
      title,
      fueliconsrc,
      fuellevel,
      description,
      truckiconsrc,
      locationiconsrc,
      speediconsrc,
      currentspeed,
      milestodestination,
      timetodestination,
      destination,
      truckid,
      dotid,
      truckdescription,
      truckodometer,
      truckenginehours,
      truckenginestatus,
      truckbatterystatus,
      destinationiconsrc,
      statusalt,
      children,
      style
    } = this.props;

    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    const margin = {margin: '0 8px 8px 0'};
    return (
      <XDCardWidgetWrapper className="isoXDCardWidgetWrapper" style={style}>
        <div className="isoXDCardBody" onClick={this.toggle.bind(this)}>
        <Row style={rowStyle} gutter={0} justify="start">
          {/* <Col md={5} sm={5} xs={5} style={colStyle}>
            <div>
              <img className="isoXDCardImage" src={src} alt={alt} />
            </div>
          </Col> */}
          <Col md={20} sm={20} xs={20}>
            <div className="statusheader">
              <span><img className="statusicon" src={statusiconsrc} alt={statusalt}/><h7>{name}</h7></span>
            </div>
          </Col>

          <Col md={4} sm={4} xs={4}>
              <img className="buttonicon" src={expandicon} alt="expand"/>
              {/* <Button type="secondary" size="small" icon={expandicon} onClick={this.toggle.bind(this)}>
              <img className="buttonicon" src={expandicon} alt="chat"/>
              </Button> */}
          </Col>
        </Row>

        <div style={hidden}></div>
        <div style={shown}>
              <Row className="margin10Top" style={rowStyle} gutter={0}>
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <div className="livestatus">
                  <span><i><img className="fuelicon" src={fueliconsrc} alt={statusalt}/><icontxt>43%</icontxt></i></span>
                  <span><i><img className="speedicon" src={speediconsrc} alt={statusalt}/><icontxt>63mph</icontxt></i></span>
                </div>
              </Col>
                <Col md={24} sm={24} xs={24} style={colStyle}>
                  <span className="leftjust">
                    <img className="locationicon" src={locationiconsrc} alt={statusalt}/>
                    <psm>63 mph</psm>
                    <psmc>93mi to Dest</psmc>
                    <psmrj>3hr 3mins</psmrj>
                  </span>
                </Col>
                <Col md={24} sm={24} xs={24} style={colStyle}>
                  <span className="leftjust">
                    <img className="locationicon" src={destinationiconsrc} alt={statusalt}/>
                    <psm>Walmart Distribution Center - Hugo, OK</psm>
                  </span>
                </Col>
                <Col md={24} sm={24} xs={24} style={colStyle}>
                  <div style={{borderBottom: '1px solid #E9E9E9',paddingBottom: '15px'}}>
                    <GoogleChart {...configs.lineChart} />
                  </div>
                </Col>
                <Col md={14} sm={14} xs={14}>
                  <div className="tableleft">
                  <span>
                    <img className="statusicon" src={truckiconsrc} alt={statusalt}/>
                    <h7>Truck 12345</h7>
                  </span>
                </div>
                </Col>
                <Col md={10} sm={10} xs={10}>
                  <div className="tableright">
                  <dottxt>DOT99999</dottxt>
                  </div>
                </Col>
                <p className="livestatus">2011 Freightliner Cascadia 125</p>
                <Col md={12} sm={12} xs={12} style={colStyle}>
                  <div className="tableleft">
                    <h7>Data</h7>
                    <p>Fuel</p>
                    <p className="tight">Odometer</p>
                    <p className="tight">Engine Hours</p>
                    <p className="tight">Engine Status</p>
                    <p className="tight">Battery Status</p>
                  </div>
                </Col>
                <Col md={12} sm={12} xs={12} style={colStyle}>
                  <div className="tableright">
                    <h7>Status</h7>
                    <p>43%</p>
                    <p className="tight">247,562mi</p>
                    <p className="tight">4765hrs</p>
                    <p className="tight">Good</p>
                    <p className="tight">23.4V</p>
                  </div>
                </Col>
                </Row>
                <Row type="flex" justify="space-around">
                <Col span={6}>
                  <Button type="primary" size="small"  style={margin} icon={dviricon} onClick={this.handleLogin}>
                    <img className="buttonicon" src={dviricon} alt="DVIR"/>
                  </Button>
                </Col>
                <Col span={6}>
                  <Button type="primary" size="small"  style={margin} icon={filesicon} onClick={this.handleLogin}>
                    <img className="buttonicon" src={filesicon} alt="chat"/>
                  </Button>
                </Col>
                <Col span={6}>
                  <Button type="primary" size="small"  style={margin} icon={logsicon} onClick={this.handleLogin}>
                    <img className="buttonicon" src={logsicon} alt="chat"/>
                  </Button>
                </Col>
                <Col span={6}>
                  <Button type="primary" size="small"  style={margin} icon={messageicon} onClick={this.handleLogin}>
                    <img className="buttonicon" src={messageicon} alt="chat"/>
                  </Button>
                </Col>
              </Row>
            </div>
        </div>
      </XDCardWidgetWrapper>
    );
  }
}
