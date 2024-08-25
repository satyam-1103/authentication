"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
const api_url=process.env.NEXT_PUBLIC_API_URL

const CreateOpportunity = () => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [link, setLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const createOpportunity = async (e) => {
    e.preventDefault();
  
    const data = { title, companyName, description, deadlineDate, link };
  
    try {
      const res = await fetch(`${api_url}/v1/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!res) {
        throw new Error("Failed to create opportunity");
      }
  
      const result = await res.json();
      console.log(result);
      setIsOpen(false);
      
      toast({
        title: "Success",
        description: "Opportunity created successfully and sent for approval",
      });
  
      // Reset form fields
      setTitle("");
      setCompanyName("");
      setDescription("");
      setDeadlineDate("");
      setLink("");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create opportunity",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <p className="text-slate-300 cursor-pointer">Create Opportunity</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Opportunity</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={createOpportunity}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Role
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
              placeholder="Enter role of Opportunity"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyName" className="text-right">
              Company Name
            </Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="col-span-3"
              placeholder="Enter name of Company"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
              placeholder="Enter description of the organization"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadlineDate" className="text-right">
              Date
            </Label>
            <Input
              id="deadlineDate"
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
              className="col-span-3"
              type="date"
              required
              placeholder="Enter the date of event"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Job Link
            </Label>
            <Input
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="col-span-3"
              placeholder="Enter the job link"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Send for approval</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { CreateOpportunity };
