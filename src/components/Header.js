import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { openCommentsModal } from "store/slices/view";

//components
import TopCommenters from "./TopCommenters";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const Header = (props) => {
  let { comments } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleOpen = () => dispatch(openCommentsModal());

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Commentor
          </Typography>
          <Button
            endIcon={<Icon>send</Icon>}
            variant="outlined"
            color="secondary"
            onClick={handleOpen}
          >
            Add Comment
          </Button>
        </Toolbar>
      </AppBar>
      <TopCommenters comments={comments} />
    </>
  );
};

export default Header;
