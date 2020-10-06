import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(4),
      width: theme.spacing(35),
      height: theme.spacing(20)
    }
  },
  solution: {
    PaddingTop: "2em",
    backgroundColor: "rgba(238, 238, 238, .5)"
  },
  comingSoon: {
    color: "#fb0000"
  },
  title: {
    textAlign: "center",
    color: "#404040"
  },
  description: {
    color: "#404040"
  },
  bold: {
    fontWeight: "500"
  }
}));

export default function SolutionsDisplay() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2 className={classes.title}>
        Addressing Lack of Transparency in Job Search with
      </h2>
      <div className={classes.root}>
        <Paper className={classes.solution}>
          <h3 className={classes.bold}>Percentage Match</h3>
          <p className={classes.description}>
            Find out how your skills match before applying
          </p>
        </Paper>
        <Paper className={classes.solution}>
          <h3 className={classes.bold}>Access to Vital Information</h3>
          <p className={classes.description}>
            company goals & expectations
            <br />
            work-life balance <br />
            salary range
          </p>
        </Paper>
        <Paper className={classes.solution}>
          <h3 className={classes.bold}>Machine Learning</h3>
          <p className={classes.comingSoon2}>Predict your dream job today!</p>
        </Paper>
      </div>
    </React.Fragment>
  );
}
