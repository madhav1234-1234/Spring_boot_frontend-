// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function AddUser() {
//   let navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { name, username, email } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:9090/user", user);
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Register User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Email" className="form-label">
//                 E-mail
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your e-mail address"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  Modal,
  Fade,
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

export default function AddUser({closeModal}) {
  let navigate = useNavigate();
  const classes = useStyles();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);

  const { name, username, email } = user;

  

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      if (!isValidEmail) {
        e.target.setCustomValidity("Please enter a valid email address");
      } else {
        e.target.setCustomValidity("");
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9090/user", user);
    // navigate("/");
   
    window.location.reload()
  };
  
  return (
    <Modal 
    className={classes.modal} 
    open={true} 
    closeAfterTransition
    

    >
      <Fade in={true}>
        <div className={classes.paper}>
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  onBlur={(e) => onInputChange(e)}
                  required
                />
              </Grid>
              <Grid item xs={6} >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.formControl}
                  margin="normal"
                  
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6} >
                <Link to="/" className={classes.formControl}>
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    fullWidth
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}


