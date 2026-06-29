import emailjs from "@emailjs/browser";
import {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_ADMIN_TEMPLATE_ID_CONTACT,
    VITE_EMAILJS_REPLY_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY
} from "../config.js";
const SERVICE_ID = VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = VITE_EMAILJS_ADMIN_TEMPLATE_ID_CONTACT;
const AUTO_REPLY_TEMPLATE_ID = VITE_EMAILJS_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
    try {
        // Send email to IISJ Admin
        // console.log(formData, "formData")
        // console.log("Sending Admin Email");
        await emailjs.send(
            SERVICE_ID,
            ADMIN_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                subject:
                    formData.subject || "Contact Form Submission",
                message: formData.message,
            },
            PUBLIC_KEY
        );

        // console.log("Admin Email Sent");

        // console.log("Sending Auto Reply");
        // Send auto reply to user
        await emailjs.send(
            SERVICE_ID,
            AUTO_REPLY_TEMPLATE_ID,
            {
                to_name: formData.name,
                to_email: formData.email,
            },
            PUBLIC_KEY
        );

        // console.log("Auto Reply Sent");
        return {
            success: true,
        };
    } catch (error) {
        console.error("EmailJS Error:", error);

        return {
            success: false,
            message:
                error?.text || "Failed to send email",
        };
    }
};

export const sendMSCSupportEmail = async (email) => {
    try {
      // Send email to IISJ Admin
      await emailjs.send(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        {
          from_name: "MSC Support Inquiry",
          from_email: email,
          subject: "New MSC Support Inquiry",
          message:
            "A visitor has expressed interest in supporting MSC. Please contact them regarding donation/support opportunities.",
        },
        PUBLIC_KEY
      );
  console.log("Admin Email Sent for MSC Support Inquiry");
      // Auto reply
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          to_name: "Supporter",
          to_email: email,
        },
        PUBLIC_KEY
      );
  
      console.log("auto reply send")
      return { success: true };
    } catch (error) {
      console.error("EmailJS Error:", error);
  
      return {
        success: false,
        message: error?.text || "Failed to send email",
      };
    }
  };