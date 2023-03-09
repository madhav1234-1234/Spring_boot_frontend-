import React, { useState } from "react";
// import { Link } from "react-router-dom";
import AddUser from "../users/AddUser";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Full Stack Application
          </Typography>
          <Button color="inherit" onClick={() => setOpenModal(true)}>
            Add User
          </Button>
          {openModal && <AddUser closeModal={closeModal} />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
