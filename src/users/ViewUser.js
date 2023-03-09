// import axios from "axios";
// import React, { useEffect,useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ViewUser() {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:9090/user/${id}`);
//     setUser(result.data);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">User Details</h2>

//           <div className="card">
//             <div className="card-header">
//               Details of user id : {user.id}
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                   <b>Name:</b>
//                   {user.name}
//                 </li>
//                 <li className="list-group-item">
//                   <b>UserName:</b>
//                   {user.username}
//                 </li>
//                 <li className="list-group-item">
//                   <b>Email:</b>
//                   {user.email}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <Link className="btn btn-primary my-2" to={"/"}>
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Modal,
  makeStyles,
  Fade

} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    borderRadius: "8px",
    outline: "none",
  },
}));

export default function ViewUser({user,...props}) {
  const classes = useStyles();
  // const [user, setUser] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  // });

  const { id } = useParams();

  // useEffect(() => {
  //   console.log("print props",props)
  //   if(props && props.users!=null){
  //     // setUser(props.users);
  //   }
  //   // console.log(props.user, user, props)
  // }, []);

  // const loadUser = async () => {
  //   const result = await axios.get(`http://localhost:9090/user/${id}`);
  //   setUser(result.data);
  // };

  return (
    

    <Modal 
    open={true} 
    className={classes.modal}>
    <Fade in={true}>
      <div>
        <Card sx={{ mb: 2 }}>
          <CardHeader
            title={
              <Typography variant="h5">
                Details of user id : {user?.id}
              </Typography>
            }
            sx={{
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
            }}
          />
          <CardContent>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">Name:</Typography>
                  }
                  secondary={user?.name}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">Username:</Typography>
                  }
                  secondary={user?.username}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">Email:</Typography>
                  }
                  secondary={user?.email}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Button variant="contained" color="primary" onClick={props && props.closeModal}>
          Back to Home
        </Button>
      </div>
    </Fade>
  </Modal>

  );
}





// import { useState } from "react";
// import {
//   Modal,
//   Fade,
//   Card,
//   CardHeader,
//   CardContent,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Button,
// } from "@material-ui/core";

// function UserDetails({ user, open, onClose }) {
//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={handleClose}>
//       <Fade in={open}>
//         <div>
//           <Card sx={{ mb: 2 }}>
//             <CardHeader
//               title={
//                 <Typography variant="h5">
//                   Details of user id : {user.id}
//                 </Typography>
//               }
//               sx={{
//                 backgroundColor: "secondary.main",
//                 color: "secondary.contrastText",
//               }}
//             />
//             <CardContent>
//               <List>
//                 <ListItem>
//                   <ListItemText
//                     primary={
//                       <Typography variant="subtitle1">Name:</Typography>
//                     }
//                     secondary={user.name}
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText
//                     primary={
//                       <Typography variant="subtitle1">Username:</Typography>
//                     }
//                     secondary={user.username}
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText
//                     primary={
//                       <Typography variant="subtitle1">Email:</Typography>
//                     }
//                     secondary={user.email}
//                   />
//                 </ListItem>
//               </List>
//             </CardContent>
//           </Card>
//           <Button variant="contained" onClick={handleClose}>
//             Back to Home
//           </Button>
//         </div>
//       </Fade>
//     </Modal>
//   );
// }









