import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail } from "../utils/validateEmail";
import "./formcomponents.css";

const BasicDetails = ({
  handleNext,
  handleBack,
  weddingDetails,
  setWeddingDetails,
}) => {
  const [basicDetails, setBasicDetails] = useState({
    relation_with_couple: "",
    weddingCity : "",
    weddingCountry:"",
    weddingPinCode:"",
    weddingState:"",
    groom_firstname: "",
    groom_surname: "",
    groom_email: "",
    groom_number: "",
    bride_firstname: "",
    bride_surname: "",
    bride_email: "",
    bride_number: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Validate all fields before submitting
  const validateForm = () => {
    const newErrors = {};

    if (!basicDetails.relation_with_couple.trim()) {
      newErrors.relation_with_couple = "Relation with couple is required";
    }
    if (!basicDetails.weddingCity.trim()) {
      newErrors.relation_with_couple = "Wedding city is required is required";
    }
    if (!basicDetails.weddingCountry.trim()) {
      newErrors.relation_with_couple = "Wedding country is required";
    }
    if (!basicDetails.weddingPinCode.trim()) {
      newErrors.relation_with_couple = "Wedding pincode is required";
    }
    if (!basicDetails.weddingState.trim()) {
      newErrors.relation_with_couple = "Wedding state is required";
    }
    if (!basicDetails.groom_firstname.trim()) {
      newErrors.groom_firstname = "Groom's first name is required";
    }
    if (!basicDetails.groom_surname.trim()) {
      newErrors.groom_surname = "Groom's surname is required";
    }
    if (!validateEmail(basicDetails.groom_email)) {
      newErrors.groom_email = "Valid Gmail is required";
    }
    if (basicDetails.groom_number.length !== 10) {
      newErrors.groom_number = "Groom's phone number must contain 10 digits";
    }
    if (!basicDetails.bride_firstname.trim()) {
      newErrors.bride_firstname = "Bride's first name is required";
    }
    if (!basicDetails.bride_surname.trim()) {
      newErrors.bride_surname = "Bride's surname is required";
    }
    if (!validateEmail(basicDetails.bride_email)) {
      newErrors.bride_email = "Valid Gmail is required";
    }
    if (basicDetails.bride_number.length !== 10) {
      newErrors.bride_number = "Bride's phone number must contain 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setWeddingDetails((prev) => ({ ...prev, ...basicDetails }));
      handleNext();
    }
    // setWeddingDetails((prev) => ({ ...prev, ...basicDetails }));
    // handleNext();
  };

  React.useEffect(() => {
    setBasicDetails({
      relation_with_couple: weddingDetails.relation_with_couple || "",
      weddingCity: weddingDetails.weddingCity || "",
      weddingCountry: weddingDetails.weddingCountry || "",
      weddingPinCode: weddingDetails.weddingPinCode || "",
      weddingState: weddingDetails.weddingState || "",
      groom_firstname: weddingDetails.groom_firstname || "",
      groom_surname: weddingDetails.groom_surname || "",
      groom_email: weddingDetails.groom_email || "",
      groom_number: weddingDetails.groom_number || "",
      bride_firstname: weddingDetails.bride_firstname || "",
      bride_surname: weddingDetails.bride_surname || "",
      bride_email: weddingDetails.bride_email || "",
      bride_number: weddingDetails.bride_number || "",
    });
  }, [weddingDetails]);

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="What is your relation with the couple? *"
            variant="filled"
            size="small"
            name="relation_with_couple"
            value={basicDetails.relation_with_couple}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="eg: groom, bride, friend"
            error={!!errors?.relation_with_couple}
            helperText={errors?.relation_with_couple}
          />
          <TextField
            label="Wedding location*"
            variant="filled"
            size="small"
            name="weddingCity"
            value={basicDetails.weddingCity}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="eg: Hyderabad,Mumbai,Chennai etc"
            error={!!errors?.weddingCity}
            helperText={errors?.weddingCity}
          />
          <TextField
            label="Country *"
            variant="filled"
            size="small"
            name="weddingCountry"
            value={basicDetails.weddingCountry}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="eg: India"
            error={!!errors?.weddingCountry}
            helperText={errors?.weddingCountry}
          />
          <TextField
            label="Pincode *"
            variant="filled"
            size="small"
            name="weddingPinCode"
            value={basicDetails.weddingPinCode}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="eg: 522235"
            error={!!errors?.weddingPinCode}
            helperText={errors?.weddingPinCode}
          />
          <TextField
            label="State *"
            variant="filled"
            size="small"
            name="weddingState"
            value={basicDetails.weddingState}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="eg: Andhra Pradesh"
            error={!!errors?.weddingState}
            helperText={errors?.weddingState}
          />
          <h3
            className="page-heading"
            style={{ color: "#192331", fontSize: "1.5rem", marginTop: "10px" }}
          >
            Groom's detail
          </h3>

          <div className="fifty-fifty-container">
            <TextField
              label="Groom's First Name *"
              variant="filled"
              size="small"
              name="groom_firstname"
              value={basicDetails.groom_firstname}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="left-input-container"
              // style={{ marginRight: "5px" }}
              error={!!errors?.groom_firstname}
              helperText={errors?.groom_firstname}
            />

            <TextField
              label="Groom's Surname *"
              variant="filled"
              size="small"
              name="groom_surname"
              value={basicDetails.groom_surname}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="right-input-container"
              error={!!errors?.groom_surname}
              helperText={errors?.groom_surname}
            />
          </div>

          <div className="fifty-fifty-container">
            <TextField
              label="Groom's Email *"
              variant="filled"
              size="small"
              name="groom_email"
              value={basicDetails.groom_email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="left-input-container"
              placeholder="Must contain @gmail.com"
              error={!!errors?.groom_email}
              helperText={errors?.groom_email}
            />

            <TextField
              label="Groom's Phone Number *"
              variant="filled"
              size="small"
              name="groom_number"
              value={basicDetails.groom_number}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="right-input-container"
              placeholder="00000 00000"
              error={!!errors?.groom_number}
              helperText={errors?.groom_number}
            />
          </div>
          <h3
            className="page-heading"
            style={{ color: "#192331", fontSize: "1.5rem", marginTop: "10px" }}
          >
            Bride's detail
          </h3>
          <div className="fifty-fifty-container">
            <TextField
              label="Bride's First Name *"
              variant="filled"
              size="small"
              name="bride_firstname"
              value={basicDetails.bride_firstname}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="left-input-container"
              error={!!errors?.bride_firstname}
              helperText={errors?.bride_firstname}
            />

            <TextField
              label="Bride's Surname *"
              variant="filled"
              size="small"
              name="bride_surname"
              value={basicDetails.bride_surname}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="right-input-container"
              error={!!errors?.bride_surname}
              helperText={errors?.bride_surname}
            />
          </div>
          <div className="fifty-fifty-container">
            <TextField
              label="Bride's Email *"
              variant="filled"
              size="small"
              name="bride_email"
              value={basicDetails.bride_email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              placeholder="Must contain @gmail.com"
              className="left-input-container"
              error={!!errors?.bride_email}
              helperText={errors?.bride_email}
            />

            <TextField
              label="Bride's Phone Number *"
              variant="filled"
              size="small"
              name="bride_number"
              value={basicDetails.bride_number}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="right-input-container"
              placeholder="00000 00000"
              error={!!errors?.bride_number}
              helperText={errors?.bride_number}
            />
          </div>
        </Box>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button
          variant="contained"
          sx={{ mt: 1, mr: 1 }}
          // disabled={!nextAccess} // Disable button if not all fields are filled
          onClick={handleSubmit}
        >
          Continue
        </Button>
        <Button disabled onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default BasicDetails;
