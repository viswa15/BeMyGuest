import React, { useState, useEffect, useRef } from "react";
import { TextField, Button } from "@mui/material";
import { SlCloudUpload } from "react-icons/sl";

const MoreAboutCouple = ({
  handleNext,
  handleBack,
  weddingDetails,
  setWeddingDetails,
}) => {
  const [moreAboutCouple, setMoreboutCouple] = useState({
    image: weddingDetails.image || null,
    about_host: {
      groomSideStory: weddingDetails.about_host?.groomSideStory || "",
      brideSideStory: weddingDetails.about_host?.brideSideStory || "",
    },
  });

  const widgetRef = useRef();
  const cloudinaryRef = useRef();
  const [helperText, setHelperText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoreboutCouple((prevDetails) => ({
      ...prevDetails,
      about_host: {
        ...prevDetails.about_host,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    if (!moreAboutCouple.image) {
      setHelperText("Upload Image");
    } else {
      setWeddingDetails((prev) => ({ ...prev, ...moreAboutCouple }));
      handleNext();
    }

    // setWeddingDetails((prev) => ({ ...prev, ...moreAboutCouple }));
    // handleNext();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dlxjzmiig",
        uploadPreset: "uddjxvnt",
        maxFile: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setMoreboutCouple((prevDetails) => ({
            ...prevDetails,
            image: result.info.secure_url,
          }));
          setHelperText("");
        }
      }
    );
  }, []);

  return (
    <div>
      {!moreAboutCouple.image ? (
        <button
          style={{
            height: "15rem",
            width: "100%",
            border: "2px dashed #808080",
            cursor: "pointer",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => widgetRef.current?.open()}
        >
          <SlCloudUpload size={50} color="grey" />
          <span> Image must not be null</span>
        </button>
      ) : (
        <>
          <div
            className="after-image"
            onClick={() => widgetRef.current?.open()}
          >
            <img
              src={moreAboutCouple.image}
              alt="uploadedImage"
              style={{ objectFit: "cover" }}
            />
            <span
              className="page-heading"
              style={{
                color: "#192331",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              Click on Image to Change Image
            </span>
          </div>
        </>
      )}
      <TextField
        label="Groom's Story *"
        variant="filled"
        size="small"
        name="groomSideStory"
        value={moreAboutCouple.about_host.groomSideStory}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4} // Adjust the number of rows as needed
        placeholder="Share how groom meet bride"
        style={{ marginTop: "40px" }}
      />

      <TextField
        label="Bride's Story *"
        variant="filled"
        size="small"
        name="brideSideStory"
        value={moreAboutCouple.about_host.brideSideStory}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4} // Adjust the number of rows as needed
        placeholder="Share how bride meet groom"
      />
      <p style={{ color: "red" }}>{helperText}</p>

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
  );
};

export default MoreAboutCouple;
