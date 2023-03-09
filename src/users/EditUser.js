// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   let navigate = useNavigate();

//   const { id } = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { name, username, email } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:9090/user/${id}`, user);
//     navigate("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:9090/user/${id}`);
//     setUser(result.data);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit User</h2>

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
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Fade,
  Grid,
  TextField,
  Typography,
  Modal
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "white",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
}));

export default function EditUser({userEdit, ...props}) {
  let navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyles();

  // const [user, setUser] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  // });
  const [user, setUser] = useState(props.user);

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   loadUser();
    
  // }, []);
  useEffect(() => {
    if (props && props.users != null) {
      setUser(props.user);
    } else {
      loadUser();
    }
  }, []);

  const onSubmit = async (e) => {
    console.log("id", user,id)
    e.preventDefault();
    await axios.put(`http://localhost:9090/user/${user.id}`, user);
    // setUser(props.users);
    // props && props.closeEditModal()
    // props.setUser(user)
    navigate("/")
    window.location.reload()

  };



  

  // const onSubmit=(e)=>{
  //   e.parentDefault();
  //   navigate("/");
  //   props.setUser(user);
  // }
  

   const loadUser = async () => {
     const result = await axios.get(`http://localhost:9090/user/${id}`);
     setUser(result.data);
  };

  return (
    <Modal open={true} className={classes.modal}>
      <Fade in={true}>
        <Container xs={12}>
          <div className={classes.formContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Edit User
            </Typography>

            <form onSubmit={(e) => onSubmit(e)}>
              <Grid Container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    className={classes.formControl}
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
                    className={classes.formControl}
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
                    className={classes.formControl}
                    fullWidth
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </Grid>
                <Grid container item xs={12} spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={props && props.closeEditModal}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  </Fade>
</Modal>
 );
}







