import React, { Component } from 'react';
import { DCardWidgetWrapper } from './style';
import {Icon} from 'antd';
import IntlMessages from "../../../components/utility/intlMessages";
import basicStyle from '../../../config/basicStyle';
import Button from '../../../components/uielements/button';
import messageicon from '../../../image/assets/add-chat.svg'

export default class DCardWidget extends Component {
  render() {
    const { src, alt, statusiconsrc, name, title, fueliconsrc, description, locationiconsrc, speediconsrc, statusalt, children, style } = this.props;
    return (
      <DCardWidgetWrapper className="isoDCardWidgetWrapper" style={style}>
        <div className="isoDCardImage">
          <img src={src} alt={alt} />
        </div>

        <div className="isoDCardBody">
          {/* <h3 className="isoName">
            {statusiconsrc}{name}
          </h3> */}

            <span className="rightheader">
              <img className="statusicon" src={statusiconsrc} alt={statusalt}/><drvname>{name}</drvname>
            </span>

            <div className="livestatus">
              <span><i><img className="fuelicon" src={fueliconsrc} alt={statusalt}/><icontxt>43%</icontxt></i></span>
              <span><i><img className="speedicon" src={speediconsrc} alt={statusalt}/><icontxt>63mph</icontxt></i></span>
            </div>

            <span className="leftjust">
                <img className="locationicon" src={locationiconsrc} alt={statusalt}/>

                <psm>63 mph</psm>

                <psmc>93mi to Dest</psmc>

                <psmrj>3hr 3mins</psmrj>
            </span>
            <span className="buttonleftjust">
              <Button className="buttonleftjustify" type="primary" size="small" style={{width: '60%'}} onClick={this.handleLogin}>
                <IntlMessages id="VIEW DRIVER PROFILE"/>
              </Button>
              <Button className="buttonrightjustify" type="primary" size="small" icon="ion-android-chat" style={{width: '20%'}} onClick={this.handleLogin}>
                <img className="buttonicon" src={messageicon} alt="chat"/>
              </Button>
            </span>

          {/* <span className="isoDesgTitle">
            {title}
          </span>

          <p className="isoDescription">
            {description}
          </p>

          <div className="isoWidgetSocial">
            {children}
          </div> */}
        </div>
      </DCardWidgetWrapper>
    );
  }
}
