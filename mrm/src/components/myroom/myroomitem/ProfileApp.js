import React from "react";
import './ProfileApp.css'
import { CgProfile } from 'react-icons/cg'
import { BiPencil } from 'react-icons/bi'
import { Link } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import CalendarApp from "./CalendarApp";
// import CalendarMini from "./CalendarMini";
import CalendarModal from "./CalendarModal";



export default function ProfileApp() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  return (
    
    <div>
      <div className="ProfileContainer">
        <div className="Icons">
          <div className="ImageIcon"><CgProfile/></div>
          <div className="EditIcon"><BiPencil/></div>
        </div>
        <h4>프로필</h4>
        <h5>프로필 메시지</h5>
      </div>
      <Link to='/mymemo'>memo</Link>
      <br></br>
      <Link to='/clock'>clock</Link>
      <br></br>
      <CalendarModal/>
      {/* <Button onClick={handleOpen}>{<CalendarApp/>} </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CalendarApp/>
      </Modal> */}
    </div>


  );

}