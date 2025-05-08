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

const EditModal = ({ open, onClose, productId, currentProduct: Mahsulot, onUpdated }) => {
  const [formData, setFormData] = useState({
    title: Mahsulot?.title || "",
    price: Mahsulot?.price || "",
    description: Mahsulot?.description || "",
  });

  const handleSubmit = async () => {
    try {
      await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      toast.success("Mahsulot o'zgartirildi!");
      onUpdated();
    } catch (err) {
      toast.error("O'zgartirishda xatolik!");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Mahsulotni tahrirlash</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Nomi"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Narxi"
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Tavsif"
          multiline
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Bekor qilish</Button>
        <Button 
          sx={{ backgroundColor: "#46a358", color: "white" }} 
          variant="contained" 
          onClick={handleSubmit}
        >
          Saqlash
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal; 