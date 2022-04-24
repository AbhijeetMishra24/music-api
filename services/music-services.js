const { playlists: Playlist } = require("../models");

const { uploadAudio } = require("../utils/s3");

const create = async (body, file) => {
    console.log('file',file);
  let existingMusic = await Playlist.findOne({
    where: { name: body.name, artist: body.artist },
  });
  if (existingMusic) {
    return {
      statusCode: 200,
      message: "Song added",
    };
  }
  try {
    let songLink = await uploadAudio(body.name, file);
    let music = await Playlist.create(
      {
        name: body.name,
        artist: userData.id,
        genre: body.genre,
        category: body.category,
        musicfile: songLink,
      }
    );
    return {
      data: music.dataValues,
      message: "Song added",
      statusCode: "200",
    };
  } catch (err) {
    return {
      message: err.message || "Internal server error",
      statusCode: 500,
    };
  }
};

const getAll = async (query) => {
  let findProjectQuery = {};
  if (!findProjectQuery.where) {
    findProjectQuery.where = {};
  }
  if (query.genre) {
    findProjectQuery.where.genre = query.genre;
  }
  if (query.category) {
    findProjectQuery.where.category = query.category;
  }

  let playlist = await Playlist.findAll(findProjectQuery);
  if (playlist.length > 0) {
    playlist = playlist.map((item) => item.playlist);
  }
  return {
    data: playlist,
    message: "Success.",
    statusCode: "200",
  };
};

const getOne = async (params) => {
  let song = await Project.findOne({
    where: { id: params.id },
    attributes: ["name","artist","musicfile"],
  });
  if (!song) {
    return {
      statusCode: 400,
      message: "song is not present in playlist..",
    };
  }
  return {
    data: song,
    message: "Success.",
    statusCode: "200",
  };
};

module.exports = { create, getAll, getOne };
