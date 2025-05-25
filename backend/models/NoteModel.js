import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Notes = db.define("notes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  kategori: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

export default Notes;