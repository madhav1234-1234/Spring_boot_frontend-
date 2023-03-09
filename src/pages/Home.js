// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:9090/users");
//     setUsers(result.data);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:9090/user/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">S.N</th>
//               <th scope="col">Name</th>
//               <th scope="col">Username</th>
//               <th scope="col">Email</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr>
//                 <th scope="row" key={index}>
//                   {index + 1}
//                 </th>
//                 <td>{user.name}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewuser/${user.id}`}
//                   >
//                     View
//                   </Link>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import ViewUser from "../users/ViewUser";
import EditUser from "../users/EditUser";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStepperContext } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("xl")]: {
      minWidth: 2,
      paddingLeft: 8,
      paddingRight: 8,
      "& .MuiButton-startIcon": {
        margin: 0,
      },
    },
  },
  buttonText: {
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  },
}));

export default function Home() {

  const [openModal,setOpenModal]=useState(false);
  const closeModal=()=>{setOpenModal(false);};

  const [openEditModal,setOpenEditModal]=useState(false);
  const closeEditModal=()=>{setOpenEditModal(false);};

  


  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(null);

  const [selectedEditId,setSelectedEditId]=useState(null);


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9090/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:9090/user/${id}`);
    loadUsers();
  };

  const [modal, setModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleDeleteUser = () => {
    deleteUser(userIdToDelete);
    setModal(false);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = (id) => {
    setUserIdToDelete(id);
    setModal(true);
  };

  const handleViewModal = (id) =>{
   setOpenModal(true)
  setSelectedId(()=> id)
  }

  const handleEditViewModal=(id)=>{
    setOpenEditModal(true);
    setSelectedEditId(()=>id)
  }

  return (
    <>
      <Box sx={{ maxWidth: 960, mx: "auto", my: 4, p: 2 }}>
        <Grid container spacing={2} sx={{ bgcolor: "background.paper" }}>
          <Grid item xs={12}>
            <TableContainer component={Box}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.N</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={user.id}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{
                                mr: { xs: 1, sm: 2 },
                                mb: { xs: 1, sm: 0 },
                              }}
                              // component={Link}
                              // to={`/viewuser/${user.id}`}
                               onClick={()=>{handleViewModal(user.id)}}
                              // className="mx-2"
                            >
                              View
                            </Button>
                          
                          </Grid>
                          <Grid item xs>
                            <Button
                              variant="outlined"
                              color="primary"
                              sx={{
                                mr: { xs: 1, sm: 2 },
                                mb: { xs: 1, sm: 0 },
                              }}
                              // component={Link}
                              // to={`/edituser/${user.id}`}
                              className="mx-2"
                              // className={classes.button}
                              onClick={()=>{handleEditViewModal(user.id)}}
                            >
                              Edit
                            </Button>
                            
                          
                          </Grid>
                          <Grid item xs>
                            <Button
                              variant="contained"
                              color="secondary"
                              sx={{ mb: { xs: 1, sm: 0 } }}
                              // onClick={() => deleteUser(user.id)}
                              onClick={() => handleOpenModal(user.id)}
                              // className="mx-2"
                              className={classes.button}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>

                        {/* user={userDetails} */}

                        <Dialog open={modal} onClose={handleCloseModal}>
                          <DialogTitle>Confirm Delete</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Are you sure you want to delete this user?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseModal} color="inherit">
                              Cancel
                            </Button>
                            <Button onClick={handleDeleteUser} color="inherit">
                              Delete
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      {openModal && <ViewUser key ={selectedId} closeModal={closeModal} user={users.find(user=> user.id == selectedId)}/>}
      // {openEditModal && <EditUser key={selectedEditId} closeEditModal={closeEditModal} user={users.find(userEdit=>userEdit.id==selectedEditId)}/>}
      {/* {openEditModal && <EditUser closeEditModal={closeEditModal}/>} */}
    </>
  );
}
