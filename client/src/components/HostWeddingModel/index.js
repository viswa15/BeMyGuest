import React from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import "./index.css";
import BasicDetails from "../../Formcomponents/basicDetails";
import MoreAboutCouple from "../../Formcomponents/moreAboutCouple";
import EventDetails from "../../Formcomponents/eventDetails";
import CermonyGuideDetails from "../../Formcomponents/cermonyGuideDetails";
import AnyOtherDetails from "../../Formcomponents/anyOtherDetails";
import axios from "axios";

const steps = [
  {
    label: "Step 1 (Basic details)",
  },
  {
    label: "Step 2 (More about couple)",
  },
  {
    label: "Step 3 (Event detials)",
  },
  {
    label: "Step 4 (Cermoney guide details)",
  },
];

const HostWeddingModel = ({ opened, setOpened }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [confirmClose, setConfirmClose] = React.useState(false);
  const [weddingDetails, setWeddingDetails] = React.useState({
    relation_with_couple: "",
    weddingCity: "",
    weddingCountry: "",
    weddingPinCode: "",
    weddingState: "",
    groom_firstname: "",
    groom_surname: "",
    groom_email: "",
    groom_number: "",
    bride_firstname: "",
    bride_surname: "",
    bride_email: "",
    bride_number: "",
    image: null,
    about_host: {
      groomSideStory: "",
      brideSideStory: "",
    },
    days_of_event: 1,
    alcohol_offering: false,
    main_language: [],
    diet: [],
    events: [],
    ceremony_guide_first_name: "",
    ceremony_guide_last_name: "",
    ceremony_guide_number: "",
    ceremony_guide_email: "",
    ceremony_guide_relation_with_couple: "",
    ceremony_guide_spoken_language: "",
    paypal_email: "",
  });

  const handleReset = () => {
    setActiveStep(0);
    setWeddingDetails({
      relation_with_couple: "",
      weddingCity: "",
      weddingCountry: "",
      weddingPinCode: "",
      weddingState: "",
      groom_firstname: "",
      groom_surname: "",
      groom_email: "",
      groom_number: "",
      bride_firstname: "",
      bride_surname: "",
      bride_email: "",
      bride_number: "",
      image: null,
      about_host: {
        groomSideStory: "",
        brideSideStory: "",
      },
      days_of_event: 1,
      alcohol_offering: false,
      main_language: [],
      diet: [],
      events: [],
      ceremony_guide_first_name: "",
      ceremony_guide_last_name: "",
      ceremony_guide_number: "",
      ceremony_guide_email: "",
      ceremony_guide_relation_with_couple: "",
      ceremony_guide_spoken_language: "",
      paypal_email: "",
    });
  };

  console.log(weddingDetails);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddWedding = async (e) => {
    e.preventDefault();
    try {
      //api to push data to datbase
      console.log(weddingDetails);
      const response = await fetch(
        `https://bemyguest-backend.onrender.com/weddings/add-wedding`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(weddingDetails),
        }
      );
      const data = await response.json();
      // const {data} = await axios.post(`https://bemyguest-backend.onrender.com/weddings/add-wedding`,weddingDetails)
      if (data.success) {
        console.log("Wedding details added successfully:", data);
        setOpened(false);
        handleReset();
      } else {
        alert("Something went wrong,Please try again");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleConfirmClose = () => {
    setConfirmClose(true);
  };

  const handleCloseDialog = () => {
    setConfirmClose(false);
  };

  const handleCloseModal = () => {
    setOpened(false);
    handleCloseDialog();
    handleReset();
  };

  return (
    <>
      <Modal
        open={opened}
        onClose={handleConfirmClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle} container>
          <div className="modalHeader">
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, pb: "1rem" }}
            >
              Host wedding
            </Typography>
            <Button onClick={handleConfirmClose}>
              <IoCloseSharp size={25} />
            </Button>
          </div>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 3 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>

                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      {index === 0 && (
                        <BasicDetails
                          handleNext={handleNext}
                          handleBack={handleBack}
                          weddingDetails={weddingDetails}
                          setWeddingDetails={setWeddingDetails}
                        />
                      )}
                      {index === 1 && (
                        <MoreAboutCouple
                          handleNext={handleNext}
                          handleBack={handleBack}
                          weddingDetails={weddingDetails}
                          setWeddingDetails={setWeddingDetails}
                        />
                      )}
                      {index === 2 && (
                        <EventDetails
                          weddingDetails={weddingDetails}
                          setWeddingDetails={setWeddingDetails}
                          handleNext={handleNext}
                          handleBack={handleBack}
                        />
                      )}
                      {index === 3 && (
                        <CermonyGuideDetails
                          handleNext={handleNext}
                          handleBack={handleBack}
                          weddingDetails={weddingDetails}
                          setWeddingDetails={setWeddingDetails}
                        />
                      )}
                      {/* {index === 4 && (
                        <AnyOtherDetails
                          handleNext={handleNext}
                          handleBack={handleBack}
                          weddingDetails={weddingDetails}
                          setWeddingDetails={setWeddingDetails}
                        />
                      )} */}
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re successfully hosted wedding
                live
              </Typography>
              {/* <Button
                variant="contained"
                onClick={handleReset}
                sx={{ mt: 1, mr: 1 }}
              >
                Reset
              </Button> */}
              <Button
                variant="contained"
                onClick={handleAddWedding}
                sx={{ mt: 1, mr: 1 }}
              >
                Host wedding
              </Button>
            </Paper>
          )}
        </Box>
      </Modal>
      <Dialog
        open={confirmClose}
        onClose={handleCloseDialog}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">Confirm Close</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            Are you sure you want to close? Data will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  width: "90vw",
  maxWidth: "800px",
  overflowY: "auto",
  maxHeight: "80vh",
};

export default HostWeddingModel;
