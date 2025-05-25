import Notes from "../models/NoteModel.js";

export const createNotes = async (req, res) => {
  const { title, isi, kategori } = req.body;
  const id = req.user.id;

  try {
    const notes = await Notes.create({
      title,
      isi,
      kategori,
      userId: id,
    });
    res.status(201).json({
      message: "Notes berhasil dibuat",
      userId: id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  const id = req.user.id;
  console.log(id);

  try {
    const notes = await Notes.findAll({ where: { userId: id } });

    res.status(200).json({
      message: "Notes berhasil diambil",
      userId: id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNotes = async (req, res) => {
  const { id } = req.params;

  const userId = req.user.id;
  const { title, isi, kategori } = req.body;
  try {
    const notes = await Notes.update(
      {
        title,
        isi,
        kategori,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      message: "Notes berhasil diupdate",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNotes = async (req, res) => {
  const { id } = req.params;
  console.log("ID NOTES = ", id);

  const userId = req.user.id;
  try {
    const notes = await Notes.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      message: "Notes berhasil dihapus",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const note = await Notes.findOne({
      where: {
        id,
        userId,
      },
    });

    if (!note) {
      return res.status(404).json({ message: "Note tidak ditemukan" });
    }

    res.status(200).json({
      message: "Note berhasil ditemukan",
      data: note,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};