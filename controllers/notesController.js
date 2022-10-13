const Note = require("../models/Note");

exports.create = async (req, res) => {
  const newNote = new Note(req.body);
  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json("Note has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get = async (req, res) => {
  try {
    const Note = await Note.findById(req.params.id);
    const { password, ...info } = Note._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  const query = req.query.new;
  try {
    const Notes = query
      ? await Note.find().sort({ _id: -1 }).limit(5)
      : await Note.find();
    res.status(200).json(Notes);
  } catch (err) {
    res.status(500).json(err);
  }
};
