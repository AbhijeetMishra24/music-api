const sendFailureResponse = ({ res, statusCode, message, error }) => {
  res.status(statusCode).json({ message, error });
};

const sendResponse = ({ res, message, error, data, statusCode }) => {
  // console.log({message, error, data, statusCode })
  if (statusCode > 300) {
    sendFailureResponse({ res, statusCode, message, error });
  } else {
    sendSuccessResponse({ res, statusCode, message, data });
  }
};

const sendSuccessResponse = ({ res, statusCode, message, data }) => {
  // console.log(data)
  res.status(statusCode).json({ message, data });
};

module.exports = { sendFailureResponse, sendResponse };
