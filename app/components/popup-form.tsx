"use client";
import React, { use, useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { services } from "../sections/services";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
const PopupForm = ({ handleClose }: { handleClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.service) newErrors.service = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill in all required fields.", {
        description: "Fields marked with * are mandatory.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Request submitted successfully!", {
          description: "We’ll contact you shortly.",
        });
        handleClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong!", {
        description: "Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to get input style
  const getInputClass = (field: string) =>
    `mt-2 ${
      errors[field] ? "border-red-500 bg-red-50 placeholder:text-red-500" : ""
    }`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="fixed w-screen h-screen inset-0 z-50 flex items-center bg-black/40 justify-center"
    >
      <div className="bg-white p-7 border border-slate-500 w-full max-w-lg rounded-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 rounded-lg p-1 hover:bg-slate-200"
        >
          <X />
        </button>
        <h1 className="text-2xl font-domine font-bold">Book a Service Today</h1>
        <p className="mt-1 font-inter text-gray-700 pb-3">
          Fill out the form below to book a service today.
        </p>
        <form onSubmit={handleSubmit} className="pt-3 border-t space-y-4">
          {/* Full Name */}
          <div>
            <Label>
              <span className="text-gray-500 font-inter font-regular">
                Full Name <span className="text-red-500">*</span>
              </span>
            </Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => validate()}
              className={getInputClass("name")}
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <Label>
              <span className="text-gray-500 font-inter font-regular">
                Email <span className="text-red-500">*</span>
              </span>
            </Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => validate()}
              className={getInputClass("email")}
              placeholder="user@example.com"
            />
          </div>

          {/* Phone & Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <Label>
                <span className="text-gray-500 font-inter font-regular">
                  Phone <span className="text-red-500">*</span>
                </span>
              </Label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => validate()}
                className={getInputClass("phone")}
                placeholder="Phone number"
              />
            </div>

            <div>
              <Label>
                <span className="text-gray-500 font-inter font-regular">
                  Select Service <span className="text-red-500">*</span>
                </span>
              </Label>
              <div className="mt-2">
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.service}
                >
                  <SelectTrigger
                    className={`w-full ${
                      errors.service
                        ? "border-red-500 text-red-500! bg-red-50"
                        : ""
                    }`}
                  >
                    <SelectValue placeholder="Not Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service, idx) => (
                      <SelectItem value={service.title} key={idx}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label>
              <span className="text-gray-500 font-inter font-regular">
                Message
              </span>
            </Label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Anything to add on"
              className="w-full mt-2 h-24 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 font-inter tracking-tight mt-2 py-2 bg-yellow-400 hover:bg-yellow-500 rounded w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default PopupForm;
