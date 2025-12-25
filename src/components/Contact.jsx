// Import necessary React hooks and libraries
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

// Reusable input field component - makes code cleaner and easier to maintain
const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

// Main Contact Form Component
const Contact = () => {
  const formRef = useRef();
  
  // State to store form data (name, email, message)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // State to manage loading status and error/confirmation messages
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  // Function to update form fields when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Function that runs when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Veuillez entrer une adresse email valide.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Le nom est requis.");
      return;
    }

    setLoading(true);

    // Send email using EmailJS - Free service to send emails from contact form
    // Visit https://www.emailjs.com/ to create your own account and get your IDs
    emailjs
      .send(
        "service_r2i0by4",        // Your EmailJS Service ID
        "template_mf5x3bh",       // Your EmailJS Template ID
        {
          from_name: form.name,
          to_name: "Fatima Zahra Bensmail",
          from_email: form.email,
          to_email: "bensmail.fatimazahra.pro@gmail.com",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"       // Your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Merci ! Je vous répondrai dès que possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Entrons en contact</p>
        <h3 className={styles.sectionHeadText}>Contactez-moi</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Votre Nom"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Entrez votre nom..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Adresse Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Quelle est votre adresse email ?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Votre Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Que voulez-vous dire...?"
            type="text"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
