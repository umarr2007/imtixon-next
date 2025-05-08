import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostModal = ({ showModal, setShowModal, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddPost = async () => {
    const newPost = {
      title: title || "Sarlavha yo'q",
      body: body || "Matn yo'q",
      userId: 123, 
    };

    try {
      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        toast.success("Post muvaffaqiyatli qo‘shildi!");
        setShowModal(false);
      } else {
        const data = await res.json();
        toast.error(data.message || "Postni qo‘shishda xatolik yuz berdi!");
      }
    } catch (err) {
      toast.error("Server bilan ulanishda xatolik yuz berdi!");
    }
  };

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Yangi Post qo‘shish
        </Typography>
        <TextField
          label="Sarlavha"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Post matni"
          fullWidth
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          margin="normal"
        />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}
        >
          <Button variant="outlined" onClick={() => setShowModal(false)}>
            Bekor qilish
          </Button>
          <Button
            variant="contained"
            onClick={handleAddPost}
            sx={{ bgcolor: "#46a358" }}
          >
            Add Post
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddPostModal;
