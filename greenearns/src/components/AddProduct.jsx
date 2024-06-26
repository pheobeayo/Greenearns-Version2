import React, { useState } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    backgroundColor: '#1E1D34',
    p: 4,
  };

const AddProduct = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
    <div>
      <button className="bg-white text-[#427142] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] lg:w-[50%] md:w-[50%] my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold" onClick={handleOpen}>Add Product</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input type="text" placeholder='Amount' className="rounded-lg w-[100%] p-4 bg-[#ffffff23] backdrop-blur-lg mb-4 outline-none" />
          <input type="text" placeholder='Interest' className="rounded-lg w-[100%] p-4 bg-[#ffffff23] backdrop-blur-lg mb-4 outline-none" />
          <input type="Date" placeholder='Return date' className="rounded-lg w-[100%] p-4 bg-[#ffffff23] backdrop-blur-lg mb-4 outline-none" />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>Loan Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="loan currency"
              sx={{ backgroundColor: "#ffffff23", outline: "none", color: "gray", marginBottom: "20px" }}
            >
           <MenuItem>li</MenuItem>
            </Select>
          </FormControl>
          <button className="bg-bg-ash text-darkGrey py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-boldv text-[16px] w-[100%] my-4">Create &rarr;</button>
        </Box>
      </Modal>
    </div>
  </div>
  )
}

export default AddProduct