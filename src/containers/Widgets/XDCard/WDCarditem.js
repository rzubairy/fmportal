import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactAction from '../../redux/contacts/actions';
import { Layout, Icon } from 'antd';
import XDCardWidget from '../Widgets/XDCard/XDCard-widget';
import { otherAttributes } from './fakeData';
import { PropTypes } from 'prop-types';


function filterContacts(contacts, search) {
  search = search.toUpperCase();
  return search
    ? contacts.filter(contact => contact.name.toUpperCase().includes(search))
    : contacts;
}

export default class driverList extends Component {
  constructor(props) {
    super(props);
    this.singleContact = this.singleContact.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: ''
    };
  }



<XDCardWidget

    src={driverpic}
    alt={drvername}
    statusalt={status}
    fueliconsrc={fueliconsrc}
    speediconsrc={speediconsrc}
    statusiconsrc={driverstatusicon}
    truckiconsrc={truckiconsrc}
    destinationiconsrc={destinationiconsrc}
    locationiconsrc={locationiconsrc}
    name={drivername}

  >
  </XDCardWidget>
