import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import driverPic from '../../image/drivers/arnieadams.jpg';
import bigPic from '../../image/1.jpg';

  // const styles = ({
  //   body: {height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',},
  //   div: {textAlign: 'center'},
  // });

  const styles = theme => ({
    card: {maxWidth: 400},
    media: {height: 194},
    actions: {display: 'flex'},

    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest}),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      // backgroundColor: red[500],
      width: 60,
      height: 60,
      borderRadius: '50%',
      overflow: 'hidden',
    },
  });

  var today = new Date();
  var todayDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			shown: true,
		};
	}

	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

	render() {
		var shown = {
			display: this.state.shown ? "block" : "none"
		};

		var hidden = {
			display: this.state.shown ? "none" : "block"
		}

		return (



      <div>
				<h2 style={ shown }>this.state.shown = true</h2>
				<h2 style={ hidden }>this.state.shown = false</h2>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
			</div>
		)
	}
}

// const mountNode = document.getElementById('app');
// React.render(<App/>, mountNode);
export default (App);
