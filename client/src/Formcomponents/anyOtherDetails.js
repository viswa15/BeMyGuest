import React from "react";
import { TextField, Button } from "@mui/material";

const AnyOtherDetails = ({
  handleNext,
  handleBack,
  propertyDetails,
  setPropertyDetails,
}) => {
  return (
    <div>
      <h1> Other Details</h1>
      <div style={{ marginBottom: "1rem" }}>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          Save
        </Button>
        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default AnyOtherDetails;
