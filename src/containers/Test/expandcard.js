import React from 'react';
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

class DriverCardExpand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  // handleExpandClick = () => { console.log('Made it here')
  //   this.setState({ expanded: !this.state.expanded });
  // };
  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}


		var shown = {
			display: this.state.shown ? "block" : "none"
		};

		var hidden = {
			display: this.state.shown ? "none" : "block"
	};



  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar alt="Arnie" src={driverPic} className={classes.avatar}>
              </Avatar>
            }

            title="Arnie Adams"
            subheader={todayDate}
          />
          <CardMedia
            className={classes.media}
            image={bigPic}
            title="Alter Persona"
          />
          {/* <CardContent>
            <Typography component="p">
              Arnie's long lost Sister! (He wishes!) .
            </Typography>
          </CardContent> */}
          <CardContent>
            <p>
              Arnie's long lost Sister! (He wishes!) .
            </p>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={() => this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more">
              <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

DriverCardExpand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DriverCardExpand);
