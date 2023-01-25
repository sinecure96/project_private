import React from "react";
import CalendarApp from "./CalendarApp";
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import CalendarMini from "./CalendarMini";


export default function CalendarModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <div>
    <Button onClick={handleOpen}>{<CalendarApp/>} </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CalendarApp/>
    </Modal>
  </div>
  )
}