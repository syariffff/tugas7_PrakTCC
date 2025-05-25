import db from "../config/Database.js";
import Users from "./UserModel.js";
import Notes from "./NoteModel.js";

// Relasi
Users.hasMany(Notes, { foreignKey: "userId", onDelete: "CASCADE" });
Notes.belongsTo(Users, { foreignKey: "userId" });

// Sinkronisasi semua tabel
(async () => {
  try {
    await db.authenticate();
    console.log("Koneksi database berhasil!");

    await db.sync({ alter: true });
    console.log("Semua tabel berhasil disinkronisasi.");
  } catch (err) {
    console.error("Gagal konek DB:", err);
  }
})();

export { Users, Notes };