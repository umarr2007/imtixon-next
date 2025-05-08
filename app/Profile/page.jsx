"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import InventoryIcon from "@mui/icons-material/Inventory";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [addForm, setAddForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  const handleCloseDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleAddProduct = async () => {
    setAddLoading(true);
    try {
      await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: addForm.title,
          price: addForm.price,
          description: addForm.description,
        }),
      });
      toast.success("Product qoshildi");
      setOpenAddDialog(false);
      setAddForm({ title: "", price: "", description: "" });
    } catch {
      toast.error("Xatolik yuz berdi");
    } finally {
      setAddLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <hr className="mt-[20px] max-w-[1440px] mx-auto border-green-600" />

      <div className="container max-w-[1440px] mx-auto">
        <div className="wrapper flex  justify-between mt-[50px]">
          <div className="card w-[300px] h-[431px] bg-[#FBFBFB]">
            <div className="text">
              <h2 className="font-[700] text-[30px] p-4 leading-[3] text-[#000]">
                My Account
              </h2>
            </div>
            <div className="flex items-center p-4 gap-3">
              <InventoryIcon className="w-[80px] h-[80px] text-[#000]" />
              <Link
                className="font-[600] text-[18px] leading-[3] text-[#000]"
                href="/pages/Profile/MyProduct"
              >
                My Products
              </Link>
            </div>

            <div className="flex items-center p-4 gap-3 pb-20">
              <ExitToAppIcon className="w-[80px] h-[80px] text-[#000]" />
              <button
                onClick={() => setOpenLogoutDialog(true)}
                className="font-[600] text-[18px] leading-[3] text-red-600"
              >
                Log Out
              </button>
            </div>
          </div>

          <div>
            <button
              className="border px-4 py-2 rounded text-[#000] hover:bg-[#46a358] hover:text-white"
              onClick={() => setOpenAddDialog(true)}
            >
              Add New
            </button>
            <Dialog
              open={openAddDialog}
              onClose={() => setOpenAddDialog(false)}
            >
              <DialogTitle sx={{ textAlign: "center" , color: "#000" , fontWeight: "600" }  }>Yangi mahsulot qo'shish</DialogTitle>
              <DialogContent>
                <TextField
                  label="Title"
                  fullWidth
                  margin="normal"
                  value={addForm.title}
                  onChange={(e) =>
                    setAddForm((f) => ({ ...f, title: e.target.value }))
                  }
                />
                <TextField
                  label="Price"
                  type="number"
                  fullWidth
                  margin="normal"
                  value={addForm.price}
                  onChange={(e) =>
                    setAddForm((f) => ({ ...f, price: e.target.value }))
                  }
                />
                <TextField
                  label="Description"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  value={addForm.description}
                  onChange={(e) =>
                    setAddForm((f) => ({ ...f, description: e.target.value }))
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button
                  style={{
                    backgroundColor: "#46A358",
                    fontWeight: "600",
                    color: "white",
                  }}
                  onClick={() => setOpenAddDialog(false)}
                  disabled={addLoading}
                >
                  Bekor qilish
                </Button>
                <Button
                  onClick={handleAddProduct}
                  variant="contained"
                  style={{
                    backgroundColor: "#46A358",
                    fontWeight: "600",
                    color: "white",
                  }}
                  disabled={addLoading || !addForm.title || !addForm.price}
                >
                  Qo'shish
                </Button>
              </DialogActions>
            </Dialog>
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      </div>

      <Dialog open={openLogoutDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ fontWeight: "600" }}>
          Haqiqatdan ham chiqib ketasizmi?
        </DialogTitle>
        <DialogContent>
          <p className="text-gray-700 font-[500]">Ishonchingiz komilmi?</p>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "white",
              width: "100px",
              height: "40px",
              backgroundColor: "green",
              fontSize: "11px",
            }}
            onClick={handleCloseDialog}
            color="primary"
          >
            Bekor qilish
          </Button>
          <Button
            sx={{
              color: "white",
              width: "100px",
              height: "40px",
              backgroundColor: "red",
            }}
            onClick={handleLogout}
            color="secondary"
          >
            Chiqish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;