import React, { Component } from 'react';
import { posts } from './config.js';
import { googleConfig } from '../../../config';
import { GoogleApiWrapper } from 'google-maps-react';
import { Marker, MarkerInfoWindow } from './marker';
import DashMapWrapper from './dashMap.style';
import { getToken } from '../../../helpers/utility';

class DashMap extends Component {

  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
    this.state = {
      center: { lat: 40.78306, lng: -73.971249 }, // 40.783060, -73.971249
      zoom: 13,
      posts,
      infoWindow: null,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.refresh(), 5000);
  }

  refresh() {

    // function to perform async login with OAuth2 server
    const lastLocReq = async() => {

      const access_token = getToken().get('idToken');
      console.log(`MAP: access_token = ${access_token}`);
      console.log(`MAP: localStorage idToken ${localStorage.getItem('id_token')}`);
//      console.log(`MAP: state.Auth.get idToken ${state.Auth.get('idToken')}`);
      

       // TELEMETRY - REQUEST LAST LOCATION
      try {
        var response = await fetch ('/telemetry/getLastLocation', 
          {
          method: 'POST',
          mode: 'same-origin',
          headers: new Headers({
            'Authorization' : `bearer ${access_token}`,
            'Content-Type' :  'application/json'
              }),
          body: JSON.stringify({searchBy:"user",searchValue:"dplustest@r3pi.io",source:"DP"})
        });

        var telRsp = await response.json();

        // debug - log 'Get Trip' to console
        console.log(`OAuth2: Fetch 'Get Trip Response:`);
        console.log(telRsp);

      } catch(e) {
        console.log(`OAuth2: ERROR - Problem occurred fetching 'Get Trip'`);
      }
    }

    lastLocReq();
    console.log("Dashboard Map Refresh")
  }

  loadMap(element) {
    const { google } = this.props;
    if (!element || !google) return;
    const self = this;
    const Map = new google.maps.Map(element, {
      zoom: this.state.zoom,
      center: this.state.center,
      scrollwheel: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
    const RichMarker = require('js-rich-marker');
    const InfoBubble = require('js-info-bubble');
    posts.map(post => {
      const marker = RichMarker
        ? new RichMarker.RichMarker({
            map: Map,
            animation: google.maps.Animation.DROP,
            flat: true,
            content: Marker(post.marker),
            position: new google.maps.LatLng(post.lat, post.lng),
          })
        : new google.maps.Marker({
            position: new google.maps.LatLng(post.lat, post.lng),
            map: Map,
            flat: true,
            animation: google.maps.Animation.DROP,
            content: Marker(post.marker),
          });
      const infoBubble = new InfoBubble({
        maxWidth: 280,
        minWidth: 280,
        maxHeight: 255,
        minHeight: 255,
        shadowStyle: 0,
        padding: 0,
        backgroundColor: '#ffffff',
        position: new google.maps.LatLng(post.lat, post.lng),
        borderRadius: 0,
        arrowSize: 10,
        borderWidth: 0,
        disableAnimation: true,
        autopanMargin: 0,
        hideCloseButton: false,
        arrowStyle: 0,
        content: MarkerInfoWindow(post),
      });
      marker.addListener('click', function() {
        if (self.infowindow) {
          self.infowindow.close();
        }
        infoBubble.open(Map, marker);
        self.infowindow = infoBubble;
      });
      return true;
    });
  }

  render() {
    const { loaded } = this.props;
    return (
      <div>
        {loaded ? (
          <DashMapWrapper>
            <div
              className="isoGoogleMap"
              style={{ height: '650px', width: '100%' }}
              ref={this.loadMap}
            />
          </DashMapWrapper>
        ) : (
          <span>API is Loading</span>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleConfig.apiKey,
})(DashMap);
