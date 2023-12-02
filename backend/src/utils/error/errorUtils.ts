import { AxiosError } from "axios";
import { Response } from "express";

/**
 * Handles internal errors.
 *
 * @param error - The error to be handled.
 * @param res - The response object.
 *
 */

export const handleInternalError = (error: any, res: Response) => {
  console.error("Error in redirectToCallbackUrl:", error);
  res.status(500).send("Internal Server Error");
};

/**
 * Handles Axios errors.
 *
 * @param error - The error to be handled.
 * @param res - The response object.
 *
 */

export const handleAxiosError = (error: any, res: Response) => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    console.error(
      `Error: ${axiosError.response.data} ${axiosError.response.status}`
    );
    res.status(axiosError.response.status).send(axiosError.response.data);
  } else if (axiosError.request) {
    console.error("No response received:", axiosError.request);
    res.status(500).send("No response from server");
  } else {
    console.error("Error:", axiosError.message);
    res.status(500).send("Error in making request");
  }
};
