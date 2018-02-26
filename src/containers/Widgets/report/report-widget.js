import React, { Component } from 'react';
import { ReportWidgetWrapper } from './style';

export default class ReportsWidget extends Component {
  render() {
    const { label, details, children } = this.props;
    return (
      // <ReportWidgetWrapper className="isoReportsWidget">
      //   <h3 className="isoWidgetLabel">
      //     {label}
      //   </h3>
      //
      //   <div className="isoReportsWidgetBar">
      //     {children}
      //   </div>
      //
      //   <p className="isoDescription">
      //     {details}
      //   </p>
      // </ReportWidgetWrapper>
      <ReportWidgetWrapper>
        <div className="isoReportsWidget">
            <h3 className="isoWidgetLabel">{label}</h3>
            <div>
              <hr class="dividerstyle1"/>
              <br/>
            </div>
            <div className="isoReportsWidgetBar">
              {children}
            </div>

            <p className="isoDescription">{details}</p>
          </div>
        </ReportWidgetWrapper>


    );
  }
}
