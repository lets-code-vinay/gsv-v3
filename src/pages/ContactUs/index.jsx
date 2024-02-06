import React, { useState } from "react";
import { string } from "prop-types";

import "./styles.css";
import { validateInput } from "../../utils/validateInputFields";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import SendIcon from "@mui/icons-material/Send";

import MainNavBar from "../../components/StructuredNavbar/MainNavBar";
import Footer from "../../components/Footer";
import ContactImage from "../../assets/images/contact-us.svg";

const ContactUs = ({
  title = "",
  subtitle = "",
  image = "",
  alt = "",
  isComponent = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  /**
   * @description Handle form data to store the value
   *
   * @param {String} type
   * @param {Object} event
   *
   * @returns
   */
  const handleFormData = (type) => (event) => {
    const { target: { value = "" } = {} } = event || {};

    switch (type) {
      case "fullName":
        setFormData({ ...formData, fullName: value });
        break;

      case "email":
        setFormData({ ...formData, email: value });
        break;

      case "subject":
        setFormData({ ...formData, subject: value });
        break;

      case "message":
        setFormData({ ...formData, message: value });
        break;

      default:
        break;
    }
  };

  /**
   * @description Handle Submit form
   */
  const handleSubmitForm = () => {};

  const {
    fullName = "",
    email = "",
    subject = "",
    message = "",
  } = formData || {};

  return (
    <>
      {!isComponent && <MainNavBar />}
      <Grid
        container
        className="displayFlex"
        style={{
          margin: !isComponent ? "10% auto 7%" : "0",
          width: !isComponent ? "86%" : "100%",
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <h1 className={` heading my-2`}>
            {!isComponent ? "Contact us" : title}
          </h1>

          {subtitle && <p className="subtitle">{subtitle}</p>}

          <Box className={`formContainer`}>
            <TextField
              id="fullName"
              label="Full Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={fullName}
              onChange={handleFormData("fullName")}
              error={Boolean(
                validateInput({
                  value: fullName,
                  min: 3,
                  max: 50,
                  field: "Full Name",
                })
              )}
              helperText={validateInput({
                value: fullName,
                min: 3,
                max: 50,
                field: "Full Name",
              })}
            />
            <TextField
              id="email"
              label="Email"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleFormData("email")}
              error={Boolean(
                validateInput({
                  value: email,
                  min: 3,
                  max: 50,
                  field: "Email",
                })
              )}
              helperText={validateInput({
                value: email,
                min: 3,
                max: 50,
                field: "Email",
              })}
            />
            <TextField
              id="subject"
              label="Subject"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={subject}
              onChange={handleFormData("subject")}
              // helperText="This is helper text"
              // error={true}
            />
            <TextField
              style={{ textAlign: "left" }}
              hintText="Message Field"
              margin="normal"
              floatingLabelText="MultiLine and FloatingLabel"
              variant="outlined"
              fullWidth
              id="message"
              label="Message"
              type="text"
              multiline
              rows={7}
              value={message}
              onChange={handleFormData("message")}
              // helperText="This is helper text"
              // error={true}
            />
            <Button
              variant="contained"
              className={`buttonClass`}
              onClick={handleSubmitForm}
              endIcon={<SendIcon className={`sendButton`} />}
            >
              Send
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={5}>
          <img
            className={`contactImage reciprocate`}
            src={isComponent ? ContactImage : image}
            alt={alt}
            width="100%"
          />
        </Grid>
      </Grid>
      {!isComponent && <Footer />}
    </>
  );
};

/**
 * Props validation
 */
ContactUs.propTypes = {
  title: string,
  subtitle: string,
  image: string,
  alt: string,
};

/**
 * Default Props
 */
ContactUs.defaultProps = {
  title: "",
  subtitle: "",
  image: "",
  alt: "",
};
export default ContactUs;
