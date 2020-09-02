import React from "react";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state={isLoggedin:false};
  }

  render() {
    const useStyles = {
      root: {
        width: "250px",
        margin: "auto"
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    };
    const classes = useStyles;

    return (

        <Card style={classes.root} variant="outlined">
          <CardContent>
            <CardActionArea>
              <Typography variant="h5" component="h2">
                Text:
              </Typography>
              <Typography
                style={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {this.props.text}
              </Typography>
              <Typography variant="h5" component="h2">
                Priority:
              </Typography>
              <Typography
                style={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {this.props.priority}
              </Typography>
              <Typography variant="h5" component="h2">
                Due Date:
              </Typography>
              <Typography
                style={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {this.props.dueDate.toString()}
              </Typography>
            </CardActionArea>
          </CardContent>
        </Card>

    );
  }
}
