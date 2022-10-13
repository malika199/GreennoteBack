const Line = require("../models/Line");

exports.create = async (req, res) => {
  const newLine = new Line(req.body);
  try {
    const savedLine = await newLine.save();
    res.status(201).json(savedLine);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedLine = await Line.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLine);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Line.findByIdAndDelete(req.params.id);
    res.status(200).json("Line has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get = async (req, res) => {
  try {
    const Line = await Line.findById(req.params.id);
    const { password, ...info } = Line._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  const query = req.query.new;
  try {
    const Lines = query
      ? await Line.find().sort({ _id: -1 }).limit(5)
      : await Line.find();
    res.status(200).json(Lines);
  } catch (err) {
    res.status(500).json(err);
  }
};
