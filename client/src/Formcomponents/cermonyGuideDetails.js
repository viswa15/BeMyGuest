import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail } from "../utils/validateEmail";
import "./formcomponents.css";

const CermonyGuideDetails = ({
  handleNext,
  handleBack,
  weddingDetails,
  setWeddingDetails,
}) => {
  const [cermonyGuideDetails, setCermonyGuideDetails] = useState({
    ceremony_guide_first_name: "",
    ceremony_guide_last_name: "",
    ceremony_guide_number: "",
    ceremony_guide_email: "",
    ceremony_guide_relation_with_couple: "",
    ceremony_guide_spoken_language: "",
    paypal_email: "",
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setCermonyGuideDetails({
      ceremony_guide_first_name: weddingDetails.ceremony_guide_first_name || "",
      ceremony_guide_last_name: weddingDetails.ceremony_guide_last_name || "",
      ceremony_guide_number: weddingDetails.ceremony_guide_number || "",
      ceremony_guide_email: weddingDetails.ceremony_guide_email || "",
      ceremony_guide_relation_with_couple:
        weddingDetails.ceremony_guide_relation_with_couple || "",
      ceremony_guide_spoken_language:
        weddingDetails.ceremony_guide_spoken_language || "",
      paypal_email: weddingDetails.paypal_email || "",
    });
  }, [weddingDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCermonyGuideDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!cermonyGuideDetails.ceremony_guide_first_name.trim()) {
      newErrors.ceremony_guide_first_name = "Cermony guide first name";
    }
    if (!cermonyGuideDetails.ceremony_guide_last_name.trim()) {
      newErrors.ceremony_guide_last_name = "Cermony guide last name";
    }
    if (cermonyGuideDetails.ceremony_guide_number.length !== 10) {
      newErrors.ceremony_guide_number = "Cermony guide number require";
    }
    if (!validateEmail(cermonyGuideDetails.ceremony_guide_email)) {
      newErrors.ceremony_guide_email = "Cermony guide email is required";
    }
    if (!cermonyGuideDetails.ceremony_guide_relation_with_couple.trim()) {
      newErrors.ceremony_guide_relation_with_couple =
        "Cermony guide relation with couple ?";
    }
    if (!cermonyGuideDetails.ceremony_guide_spoken_language.trim()) {
      newErrors.ceremony_guide_spoken_language =
        "Cermony guide spoken languages";
    }
    if (!validateEmail(cermonyGuideDetails.paypal_email)) {
      newErrors.ceremony_guide_spoken_language = "Paypal email id required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setWeddingDetails((prev) => ({ ...prev, ...cermonyGuideDetails }));
      handleNext();
    }
    // setWeddingDetails((prev) => ({ ...prev, ...cermonyGuideDetails }));
    // handleNext();
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box sx={{ mb: 2 }}>
          <h3
            className="page-heading"
            style={{ color: "#192331", fontSize: "1.5rem", marginTop: "10px" }}
          >
            Cermony guide's detail
          </h3>
          <div className="fifty-fifty-container">
            <TextField
              label="Cermony guide first name *"
              variant="filled"
              size="small"
              name="ceremony_guide_first_name"
              value={cermonyGuideDetails.ceremony_guide_first_name}
              fullWidth
              onChange={handleChange}
              margin="normal"
              className="left-input-container"
              error={!!errors?.ceremony_guide_first_name}
              helperText={errors?.ceremony_guide_first_name}
            />
            <TextField
              label="Cermony guide last name *"
              variant="filled"
              size="small"
              name="ceremony_guide_last_name"
              value={cermonyGuideDetails.ceremony_guide_last_name}
              fullWidth
              onChange={handleChange}
              margin="normal"
              className="right-input-container"
              error={!!errors?.ceremony_guide_last_name}
              helperText={errors?.ceremony_guide_last_name}
            />
          </div>

          <div className="fifty-fifty-container">
            <TextField
              label="Ceremony guide email *"
              variant="filled"
              size="small"
              name="ceremony_guide_email"
              value={cermonyGuideDetails.ceremony_guide_email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="left-input-container"
              error={!!errors?.ceremony_guide_email}
              helperText={errors?.ceremony_guide_email}
              placeholder="Must contain @gmail.com"
            />

            <TextField
              label="Ceremony guide number *"
              variant="filled"
              size="small"
              name="ceremony_guide_number"
              value={cermonyGuideDetails.ceremony_guide_number}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="right-input-container"
              error={!!errors?.ceremony_guide_number}
              helperText={errors?.ceremony_guide_number}
              placeholder="00000 00000"
            />
          </div>

          <TextField
            label="Ceremony relation with couple ? *"
            variant="filled"
            size="small"
            name="ceremony_guide_relation_with_couple"
            value={cermonyGuideDetails.ceremony_guide_relation_with_couple}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors?.ceremony_guide_relation_with_couple}
            helperText={errors?.ceremony_guide_relation_with_couple}
            placeholder="eg: Friend, Father, Mother "
          />

          <TextField
            label="Ceremony spoken language *"
            variant="filled"
            size="small"
            name="ceremony_guide_spoken_language"
            value={cermonyGuideDetails.ceremony_guide_spoken_language}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors?.ceremony_guide_spoken_language}
            helperText={errors?.ceremony_guide_spoken_language}
            placeholder="eg: Hindi, English ..."
          />

          <TextField
            label="Paypal email ID *"
            variant="filled"
            size="small"
            name="paypal_email"
            value={cermonyGuideDetails.paypal_email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors?.paypal_email}
            helperText={errors?.paypal_email}
          />
        </Box>
      </div>

      <div>
        <div style={{ marginBottom: "1rem" }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 1, mr: 1 }}
          >
            Continue
          </Button>
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CermonyGuideDetails;
