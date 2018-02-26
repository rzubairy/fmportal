import React, { Component } from 'react';
import { Table, Row, Col, Icon } from 'antd';
import Input, { InputSearch, InputGroup, Textarea, } from '../../components/uielements/input';
// import PageHeader from '../../components/utility/pageHeader';
import Dropdown, {
  DropdownMenu,
  MenuItem
} from '../../components/uielements/dropdown';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../config/basicStyle';
import InputNumber from '../../components/uielements/InputNumber';
import Select, { SelectOption } from '../../components/uielements/select';
import DatePicker from '../../components/uielements/datePicker';
import AutoComplete from '../../components/uielements/autocomplete';
import Button, { ButtonGroup } from '../../components/uielements/button';
import * as configs from './config';
import IntlMessages from '../../components/utility/intlMessages';
import TableDemoStyle from '../Tables/antTables/demo.style';
import fakeData from '../Tables/fakeData';
import { tableinfos } from '../Tables/antTables/configs';
import * as TableViews from '../Tables/antTables/tableViews/';
import logTable from './logtable';


const dataList = new fakeData(10);
function handleMenuClick(e) {}

const menu = (
  <DropdownMenu onClick={handleMenuClick}>
    <MenuItem key="1">1st item</MenuItem>
    <MenuItem key="2">2nd item</MenuItem>
    <MenuItem key="3">3rd item</MenuItem>
  </DropdownMenu>
);

const Option = SelectOption;

// const margin = '0 8px 8px 0';
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const { rowStyle, colStyle, gutter } = basicStyle;

export default class logs extends Component {
 handleChange = value => {};

 state = {
   size: 'default',
   loading: false,
   iconLoading: false
 };

 handleSizeChange = e => {
   this.setState({ size: e.target.value });
 };

 enterLoading = () => {
   this.setState({ loading: true });
 };

 enterIconLoading = () => {
   this.setState({ iconLoading: true });
 };

 renderTable(tableInfo) {
   let Component;
   switch (tableInfo.value) {
     case 'sortView':
       Component = TableViews.SortView;
       break;
     case 'filterView':
       Component = TableViews.FilterView;
       break;
     case 'editView':
       Component = TableViews.EditView;
       break;
     case 'groupView':
       Component = TableViews.GroupView;
       break;
     case 'customizedView':
       Component = TableViews.CustomizedView;
       break;
     default:
       Component = TableViews.SortView;
   }
   return <Component tableInfo={tableInfo} dataList={dataList} />;
 }

  render() {

    return(
      <LayoutWrapper className="r3piLogDataPage">
        <Box>
      <Row style={rowStyle} gutter={gutter} justify="start" style={{ marginTop: 20 }} >
        <Col md={6} sm={6} xs={24}>

              <InputSearch placeholder="input search text" style= {{width: '100%'}}/>

        </Col>
        <Col md={6} sm={6} xs={6}>

              <Select
                defaultValue="All Drivers"
                onChange={this.handleChange}
                style= {{width: '100%'}}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>

        </Col>
        <Col md={6} sm={6} xs={6}>
          {/* style={{borderBottom: '1px solid #E9E9E9',paddingBottom: '15px'}} */}
              <Select
                defaultValue="All Logs"
                onChange={this.handleChange}
                style= {{width: '100%'}}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>

        </Col>
        <Col md={6} sm={6} xs={6} justify="end">
          <Button type="primary" style={{ float: 'right' }} >
            DOWNLOAD
          </Button>
        </Col>
      </Row>
<Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} xs={24}>

          {/* <Box
            title={"Hours of Service"}> */}
            <ContentHolder style={{ marginTop: 40 }} >
              {/* <TableDemoStyle className="isoLayoutContent"> */}
              {tableinfos.map(tableInfo => (
                  this.renderTable(tableInfo)
              ))}
            {/* </TableDemoStyle> */}
            </ContentHolder>
          {/* </Box> */}
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={24} xs={24}>

                {/* <Box
                  title={"Hours of Service"}> */}
                  <ContentHolder style={{ marginTop: 40 }} >
                     <logTable/>
                  </ContentHolder>
                {/* </Box> */}
              </Col>
            </Row>
</Box>
    </LayoutWrapper>);
  }
};
export { logs };
