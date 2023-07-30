import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./ContactFormStyles.css";
import { DateTimePicker, DatePickerInput,TimeInput } from '@mantine/dates';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box } from '@mantine/core';

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aen4ivw",
        "template_dbp058l",
        form.current,
        "BJuljjhhVOrDvEJ9P"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className= "from-container">
      <form ref={form} onSubmit={sendEmail}>
        <h1>Fill out the form below!</h1>
        
        <DateTimePicker
        clearable
        placeholder="Date and Time"
        gap="1rem"
        name= "Date_time"
        size="md"
        valueFormat="MMM DD YYYY hh:mm A"
        c="blue.6"
        />
        <input placeholder="Name" type="text" name="user_name"  style={{ marginTop: '2rem' }}/>
        
        
        <input placeholder="Email" type="email" name="user_email" />
        
       
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" />
        
      </form>
    </div>
  );
};

export default ContactForm;


