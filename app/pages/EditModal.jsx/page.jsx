"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ open, onClose, postId, currentTitle, onUpdated }) => {
  const [newTitle, setNewTitle] = useState(currentTitle);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      const data = await res.json();
      toast.success("Post yangilandi!"); 
      onClose(); 
    } catch (err) {
      toast.error("Yangilashda xatolik!"); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sarlavhani tahrirlash</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Yangi sarlavha"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} 
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Bekor qilish</Button>
        <Button sx={{backgroundColor:"green" }} variant="contained" onClick={handleSubmit}>
          Saqlash
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
