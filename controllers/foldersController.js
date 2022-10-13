const Folder = require("../models/Folder");

exports.create = async (req, res) => {
  const newFolder = new Folder(req.body);
  try {
    const savedFolder = await newFolder.save();
    res.status(201).json(savedFolder);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedFolder = await Folder.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFolder);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Folder.findByIdAndDelete(req.params.id);
    res.status(200).json("Folder has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get = async (req, res) => {
  try {
    const Folder = await Folder.findById(req.params.id);
    const { password, ...info } = Folder._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  const query = req.query.new;
  try {
    const Folders = query
      ? await Folder.find().sort({ _id: -1 }).limit(5)
      : await Folder.find();
    res.status(200).json(Folders);
  } catch (err) {
    res.status(500).json(err);
  }
};
