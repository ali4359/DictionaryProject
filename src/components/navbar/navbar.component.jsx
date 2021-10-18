import React,{useState} from 'react';
import SearchBar from '../search-bar/search-bar.component';

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Hidden,Modal,Button,Box,TextField} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withRouter, Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {  
    flexGrow: 1,
    textAlign: 'left',
    color: '#fff', 
    textDecoration: 'none',
  },
}));

const Navbar = ({ history, prefersDarkMode, setTheme }) => {
  const [modalState,setModalState] = useState(false);
  const [modalDeleteState,setModalDeleteState] = useState(false);
  const [wordDelete,setWordDelete] = useState("");
  const [word,setWord] = useState("");

  const classes = useStyles();
  const bg = prefersDarkMode
  ?'linear-gradient(to right, #303030 0%, #303030 100%)'
  :'linear-gradient(to right, #3f6cfe 0%, #00f2fe 100%)';

  const handleOpen = () => {
    setModalState(true)
   
  }

  const handleClose = () => {
    setModalState(false)
  }

  const handleDeleteOpen = () => {
    setModalDeleteState(true)
   
  }

  const handleDeleteClose = () => {
    setModalDeleteState(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign:"center"
  };

  const handleChange = (event)=>{

    setWord(event.target.value)

  }

  const handleDeleteChange = (event)=>{

    setWordDelete(event.target.value)

  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundImage: bg }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link className={classes.title} to='/'>Dictionary</Link>
          </Typography>
          <Hidden smDown><SearchBar edge="end" /></Hidden>
          <IconButton edge="end">
          <AddCircleOutlineIcon onClick={handleOpen} /> 
          <Modal
            open={modalState}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box 
            sx={style}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a word to the dictionary
              </Typography>
              <TextField
                id="outlined-name"
                label="Word"
                name="word"
                value={word}
                onChange={handleChange}
              />
              <br></br>
              <br></br>
               <Button
           
               >Submit</Button>

              
            </Box>
          </Modal>
          </IconButton>

           <IconButton edge="end">
          <DeleteIcon onClick={handleDeleteOpen} /> 
          <Modal
            open={modalDeleteState}
            onClose={handleDeleteClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box 
            sx={style}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter a word to delete from dictionary
              </Typography>
              <TextField
                id="outlined-name"
                label="Word"
                name="wordDelete"
                value={wordDelete}
                onChange={handleDeleteChange}
              />
              <br></br>
              <br></br>
               <Button
           
               >Submit</Button>

              
            </Box>
          </Modal>
          </IconButton>
          <IconButton edge="end" onClick={() => {setTheme(!prefersDarkMode)}} >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
