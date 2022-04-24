const { create, getAll, getOne } = require("../services/music-services");
const { sendFailureResponse, sendResponse } = require("../utils/utils");

const createMusic = async (req, res) => {
  try {
    let response = await create(req.body, req.file.buffer);
    sendResponse({
      res,
      statusCode: response.statusCode,
      message: response.message,
      error: response.error,
      data: response.data,
    });
  } catch (err) {
    sendFailureResponse({
      res,
      statusCode: err.statusCode || 500,
      message: "Internal server error",
      error: err.message || "Internal Server error",
    });
  }
};

const getAllMusic = async (req, res) => {
  try {
    let response = await getAll(req.query);
    console.log(response);
    sendResponse({
      res,
      statusCode: response.statusCode,
      message: response.message,
      error: response.error,
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      statusCode: err.statusCode || 500,
      message: "Internal server error",
      error: err.message || "Internal Server error",
    });
  }
};

const getMusic = async (req, res) => {
  try {
    let response = await getOne(req.params);
    sendResponse({
      res,
      statusCode: response.statusCode,
      message: response.message,
      error: response.error,
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      statusCode: err.statusCode || 500,
      message: "Internal server error",
      error: err.message || "Internal Server error",
    });
  }
};


module.exports = {
  createMusic,
  getAllMusic,
  getMusic
};
