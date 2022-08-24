const Ranking = require("./ranking.model");
const { errMalformed } = require("../../errors");
//Checked
const createOne = async (req, res) => {
  let doc = {};
  
  try {
    const newRanking = req.body;
    doc = await Ranking.create(newRanking);
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    errMalformed(res, e.message, e.name);
  }
};
//Checked
const updateOne = async (req, res) => {
  const { id } = req.params;
  let doc = {};

  try {
      doc = await Ranking.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if(doc === null) {
      errMalformed(res, `Ranking with id '${id}' not found`, 'NotFound');
    } else {
      res.status(200).json({ results: [doc] });
    }
  } catch (e) {
    if (Object.keys(doc).length === 0) {
      errMalformed(res, `'${id}' is not valid id`, 'NotFound');
    } else {
      console.log(e);
      errMalformed(res, e.message, e.name);
    }
  }
};
//Checked
const findOne = async (req, res) => {
  const { id } = req.params;
  let doc = {};

  try {
    doc = await Ranking.findOne({ _id: id });
    if(doc === null) {
      errMalformed(res, `Ranking with id '${id}' not found`, 'NotFound');
    } else {
      res.status(200).json({ results: [doc] });
    }
  } catch (e) {
    if (Object.keys(doc).length === 0) {
      errMalformed(res, `'${id}' is not valid id`, 'NotFound');
    } else {
      errMalformed(res, '', '');
    }
  }
};
//Checked
const deleteOne = async (req, res) => {
  const { id } = req.params;
  let doc = {};

  try {
    const doc = await Ranking.findOneAndDelete({ _id: id }, { new: true });
    if(doc === null) {
      errMalformed(res, `Ranking with id '${id}' not found`, 'NotFound');
    } else {
      res.status(200).json({ results: [doc] });
    }
  } catch (e) {
    if (Object.keys(doc).length === 0) {
      errMalformed(res, `'${id}' is not valid id`, 'NotFound');
    } else {
      errMalformed(res, '', '');
    }
  }
};

module.exports = {
  createOne,
  updateOne,
  findOne,
  deleteOne,
};
