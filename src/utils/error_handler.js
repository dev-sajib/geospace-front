import { toast } from "react-toastify";

export const CommonErrorHandler = (error) => {
  let errorMessage = "An unexpected error occurred. Please try again.";

  if (error.response) {
    if (error.response.data && error.response.data.Message) {
      errorMessage = error.response.data.Message;
    } else {
      errorMessage = `Error: ${error.response.status} - ${error.response.statusText}`;
    }
  } else if (error.request) {
    errorMessage =
      "No response from server. Please check your network connection.";
  } else {
    errorMessage = error.message;
  }

  toast.warn(errorMessage);

  console.error("API Error:", error);

  return errorMessage;
};
