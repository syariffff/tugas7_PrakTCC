import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refresh_token: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

export default Users;