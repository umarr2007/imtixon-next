"use client";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { toast } from "react-toastify";
const DeleteModal = ({ open, onClose, productId, onDeleted }) => {
  const handleDelete = async () => {
    try {
      await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      });
      toast.success("Mahsulot o'chirildi!");
      onDeleted();
    } catch (err) {
      toast.error("O'chirishda xatolik!");
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> O'chirishga ishonchingiz komilmi?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Yo'q</Button>
        <Button onClick={handleDelete} color="error" variant="contained">
          Ha, o'chir
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteModal;