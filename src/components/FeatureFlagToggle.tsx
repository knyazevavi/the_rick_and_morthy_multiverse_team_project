import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const FeatureFlagToggle = () => {
  const [flagKey, setFlagKey] = useState("");
  const [flagValue, setFlagValue] = useState(false); // Булевое значение для флага
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const updateFeatureFlag = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/set-feature-flag",
        {
          key: flagKey,
          value: flagValue,
        },
      );
      setMessage(response.data);
    } catch (error) {
      setMessage("Error updating feature flag");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Feature Flag Toggle
      </Typography>
      <TextField
        label="Please use key with name featureSharedLinkByTelegram"
        variant="outlined"
        value={flagKey}
        onChange={(e) => setFlagKey(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={flagValue}
            onChange={(e) => setFlagValue(e.target.checked)}
            color="primary"
          />
        }
        label="Enable Feature"
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={updateFeatureFlag}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Feature Flag"}
      </Button>

      {message && (
        <Typography
          variant="body1"
          color={message.includes("Error") ? "error" : "primary"}
          sx={{ marginTop: 2 }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};
