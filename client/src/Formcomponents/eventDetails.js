import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import "./formcomponents.css";

const EventDetails = ({
  handleNext,
  handleBack,
  weddingDetails,
  setWeddingDetails,
}) => {
  const [daysOfEvent, setDaysOfEvent] = useState(
    weddingDetails.eventDetails?.length || 1
  );
  const [events, setEvents] = useState(
    weddingDetails.eventDetails?.length
      ? weddingDetails.eventDetails
      : [
          {
            event: "",
            date: "",
            location: {
              area: "",
              city: "",
              postal_code: "",
              country: "",
              optional_venue: "",
            },
            details: {
              starting_time: "",
              venue_contact: "",
              event_description: "",
              dress_code: "",
            },
            other_details: {
              accommodation: false,
              transportation: false,
              music_dancing: false,
              alcohol_offering: false,
            },
          },
        ]
  );

  const [mainLanguage, setMainLanguage] = useState(
    weddingDetails.main_language || []
  );
  const [diet, setDiet] = useState(weddingDetails.diet || []);

  // State to track validation errors
  const [errors, setErrors] = useState([]);

  // Handle increment of days_of_event
  const handleAddDay = () => {
    setDaysOfEvent(daysOfEvent + 1);
    setEvents([
      ...events,
      {
        event: "",
        date: "",
        location: {
          area: "",
          city: "",
          postal_code: "",
          country: "",
          optional_venue: "",
        },
        details: {
          starting_time: "",
          venue_contact: "",
          event_description: "",
          dress_code: "",
        },
        other_details: {
          accommodation: false,
          transportation: false,
          music_dancing: false,
          alcohol_offering: false,
        },
      },
    ]);
  };

  // Handle decrement of days_of_event
  const handleRemoveDay = () => {
    if (daysOfEvent > 1) {
      setDaysOfEvent(daysOfEvent - 1);
      setEvents(events.slice(0, -1));
    }
  };

  // Handle change in event details for a specific day
  const handleEventChange = (index, e) => {
    const { name, value, checked, type } = e.target;
    const updatedEvents = [...events];
    const [section, field] = name.split(".");

    if (type === "checkbox") {
      updatedEvents[index] = {
        ...updatedEvents[index],
        other_details: {
          ...updatedEvents[index].other_details,
          [field]: checked,
        },
      };
    } else if (section === "location" || section === "details") {
      updatedEvents[index] = {
        ...updatedEvents[index],
        [section]: {
          ...updatedEvents[index][section],
          [field]: value,
        },
      };
    } else {
      updatedEvents[index] = {
        ...updatedEvents[index],
        [name]: value,
      };
    }

    setEvents(updatedEvents);

    // Persist changes immediately
    setWeddingDetails((prev) => ({
      ...prev,
      events : updatedEvents,
      eventDetails: updatedEvents,
    }));
  };

  // Handle change in main_language
  const handleLanguageChange = (e) => {
    const { value } = e.target;
    setMainLanguage(typeof value === "string" ? value.split(",") : value);
    setWeddingDetails((prev) => ({
      ...prev,
      main_language: typeof value === "string" ? value.split(",") : value,
    }));
  };

  // Handle change in diet
  const handleDietChange = (e) => {
    const { value } = e.target;
    setDiet(typeof value === "string" ? value.split(",") : value);
    setWeddingDetails((prev) => ({
      ...prev,
      diet: typeof value === "string" ? value.split(",") : value,
    }));
  };

  // Validate all fields before submitting
  const validateForm = () => {
    const newErrors = events.map((eventDetail) => ({
      event: eventDetail.event ? "" : "Event name is required",
      date: eventDetail.date ? "" : "Date is required",
      location: {
        area: eventDetail.location.area ? "" : "Area is required",
        city: eventDetail.location.city ? "" : "City is required",
        postal_code:
          eventDetail.location.postal_code.length === 6
            ? ""
            : "Postal code must be 6 digits",
        country: eventDetail.location.country ? "" : "Country is required",
      },
      details: {
        starting_time: eventDetail.details.starting_time
          ? ""
          : "Starting time is required",
        event_description: eventDetail.details.event_description
          ? ""
          : "Event description is required",
        dress_code: eventDetail.details.dress_code
          ? ""
          : "Dress code is required",
      },
    }));

    setErrors(newErrors);

    // Check if any error exists
    return newErrors.every((error) =>
      Object.values(error).every((val) =>
        typeof val === "object"
          ? Object.values(val).every((subVal) => !subVal)
          : !val
      )
    );
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      setWeddingDetails((prev) => ({
        ...prev,
        events : events,
        eventDetails: events,
        main_language: mainLanguage,
        diet: diet,
      }));
      handleNext();
    }
    // setWeddingDetails((prev) => ({
    //   ...prev,
    //   eventDetails: events,
    //   main_language: mainLanguage,
    //   diet: diet,
    // }));
    // handleNext();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          className="page-heading"
          style={{
            color: "#192331",
            fontSize: "1.5rem",
            marginTop: "10px",
          }}
        >
          How many days event will be ?
        </h3>
        <div>
          <IconButton onClick={handleRemoveDay} disabled={daysOfEvent === 1}>
            <AiFillMinusCircle />
          </IconButton>
          <span>{daysOfEvent}</span>
          <IconButton onClick={handleAddDay}>
            <IoMdAddCircle />
          </IconButton>
        </div>
      </div>

      {events.map((eventDetail, index) => (
        <div key={index}>
          <h3> Day {index + 1}</h3>
          <TextField
            label="Event Name"
            variant="filled"
            size="small"
            name="event"
            value={eventDetail.event}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.event}
            helperText={errors[index]?.event}
            placeholder="e.g., Haldi, Sangeet, Marriage, Reception "
          />
          <div className="fifty-fifty-container">
            <TextField
              variant="filled"
              size="small"
              name="date"
              type="date"
              value={eventDetail.date}
              onChange={(e) => handleEventChange(index, e)}
              fullWidth
              margin="normal"
              error={!!errors[index]?.date}
              helperText={errors[index]?.date}
              className="left-input-container"
            />
            <TextField
              variant="filled"
              size="small"
              name="details.starting_time"
              type="time"
              value={eventDetail.details.starting_time}
              onChange={(e) => handleEventChange(index, e)}
              fullWidth
              margin="normal"
              error={!!errors[index]?.starting_time}
              helperText={errors[index]?.starting_time}
              className="right-input-container"
            />
          </div>
          <h3
            className="page-heading"
            style={{
              color: "#192331",
              fontSize: "1.5rem",
              marginTop: "10px",
            }}
          >
            Location details
          </h3>
          <TextField
            label="Area *"
            variant="filled"
            size="small"
            name="location.area"
            value={eventDetail.location.area}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.location?.area}
            helperText={errors[index]?.location?.area}
            placeholder="Address"
          />
          <TextField
            label="City *"
            variant="filled"
            size="small"
            name="location.city"
            value={eventDetail.location.city}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.location?.city}
            helperText={errors[index]?.location?.city}
          />
          <TextField
            label="Postal Code *"
            variant="filled"
            size="small"
            name="location.postal_code"
            value={eventDetail.location.postal_code}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.location?.postal_code}
            helperText={errors[index]?.location?.postal_code}
          />
          <TextField
            label="Country *"
            variant="filled"
            size="small"
            name="location.country"
            value={eventDetail.location.country}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.location?.country}
            helperText={errors[index]?.location?.country}
          />
          <TextField
            label="Optional Venue"
            variant="filled"
            size="small"
            name="location.optional_venue"
            value={eventDetail.location.optional_venue}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.location?.optional_venue}
            helperText={errors[index]?.location?.optional_venue}
            placeholder="Nearby location to venue"
          />
          <TextField
            label="Venue Contact"
            variant="filled"
            size="small"
            name="details.venue_contact"
            value={eventDetail.details.venue_contact}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.details?.venue_contact}
            helperText={errors[index]?.details?.venue_contact}
            placeholder="If any"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="other_details.accommodation"
                checked={eventDetail.other_details.accommodation}
                onChange={(e) => handleEventChange(index, e)}
              />
            }
            label="Providing Accommodation"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="other_details.transportation"
                checked={eventDetail.other_details.transportation}
                onChange={(e) => handleEventChange(index, e)}
              />
            }
            label="Providing Transportation"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="other_details.music_dancing"
                checked={eventDetail.other_details.music_dancing}
                onChange={(e) => handleEventChange(index, e)}
              />
            }
            label="Music & Dancing"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="other_details.alcohol_offering"
                checked={eventDetail.other_details.alcohol_offering}
                onChange={(e) => handleEventChange(index, e)}
              />
            }
            label="Alcohol Offering"
          />
          <TextField
            label="Event Description *"
            variant="filled"
            size="small"
            name="details.event_description"
            value={eventDetail.details.event_description}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!errors[index]?.details?.event_description}
            helperText={errors[index]?.details?.event_description}
          />
          <TextField
            label="Dress Code *"
            variant="filled"
            size="small"
            name="details.dress_code"
            value={eventDetail.details.dress_code}
            onChange={(e) => handleEventChange(index, e)}
            fullWidth
            margin="normal"
            error={!!errors[index]?.details?.dress_code}
            helperText={errors[index]?.details?.dress_code}
            placeholder="e.g., Traditional, Western"
          />
        </div>
      ))}

      <div style={{ marginTop: "1rem" }}>
        <InputLabel>Main Language *</InputLabel>
        <Select
          multiple
          value={mainLanguage}
          onChange={handleLanguageChange}
          renderValue={(selected) => selected.join(", ")}
          fullWidth
          variant="filled"
          size="small"
          margin="none"
        >
          <MenuItem value="Assamese">Assamese</MenuItem>
          <MenuItem value="Bangla">Bangla</MenuItem>
          <MenuItem value="Bodo">Bodo</MenuItem>
          <MenuItem value="Dogri">Dogri</MenuItem>
          <MenuItem value="Gujarati">Gujarati</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Kashmiri">Kashmiri</MenuItem>
          <MenuItem value="Kannada">Kannada</MenuItem>
          <MenuItem value="Konkani">Konkani</MenuItem>
          <MenuItem value="Maithili">Maithili</MenuItem>
          <MenuItem value="Malayalam">Malayalam</MenuItem>
          <MenuItem value="Manipuri">Manipuri</MenuItem>
          <MenuItem value="Marathi">Marathi</MenuItem>
          <MenuItem value="Nepali">Nepali</MenuItem>
          <MenuItem value="Odia">Odia</MenuItem>
          <MenuItem value="Punjabi">Punjabi</MenuItem>
          <MenuItem value="Tamil">Tamil</MenuItem>
          <MenuItem value="Telugu">Telugu</MenuItem>
          <MenuItem value="Santali">Santali</MenuItem>
          <MenuItem value="Sanskrit">Sanskrit</MenuItem>
          <MenuItem value="Sindhi">Sindhi</MenuItem>
          <MenuItem value="Urdu">Urdu</MenuItem>
        </Select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <InputLabel>Diet</InputLabel>
        <Select
          multiple
          value={diet}
          onChange={handleDietChange}
          renderValue={(selected) => selected.join(", ")}
          fullWidth
          variant="filled"
          size="small"
          margin="none"
        >
          <MenuItem value="Vegan">Vegan</MenuItem>
          <MenuItem value="Vegetarian">Vegetarian</MenuItem>
          <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
        </Select>
      </div>

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

export default EventDetails;
