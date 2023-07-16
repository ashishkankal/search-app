"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddDocumentForm from "./AddDocumentForm";
import { useToast } from "../ui/use-toast";

const dev = process.env.NODE_ENV !== "production";
const server = dev ? "http://localhost:3000" : "";

const AddDocument = () => {
  const onSubmit = (toast: any) => (data: any) => {
    fetch(`${server}/api/create`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      setOpenDialog(false);
      toast({ title: "New Document Added!" });
    });
  };
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();
  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpenDialog(true)} variant="outline">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Document</DialogTitle>
          </DialogHeader>
          <AddDocumentForm onSubmit={onSubmit(toast)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddDocument;
