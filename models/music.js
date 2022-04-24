"use strict";

module.exports = (sequelize, DataTypes) => {
  const playlists = sequelize.define(
    "playlists",
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      artist: DataTypes.STRING,
      genre: DataTypes.STRING,
      musicfile: DataTypes.STRING,
    },
    {
      timestamps: true,
      createdAt: "created_at",
      deletedAt: false,
      updatedAt: "updated_at",
    }
  );
  return playlists;
};
