const Editor = require('../models/editor.models');

const createEditor = async (req, res) => {
    if (req.body) {
        const editor = new Editor(req.body);
        editor.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllDetails = async (req, res) => {
    await Editor.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const editDetails = async (req, res) => {
    await Editor.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getEditorById = async (req, res) => {
    if (req.params && req.params.id) {
      await Editor.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const updateDetails  = async (req, res) => {
    if (req.params && req.params.id) {
      await Editor.findByIdAndUpdate(req.params.id,{$set:{about:req.body.about,
                                                          FromDate: req.body.FromDate, 
                                                          ToDate: req.body.ToDate , 
                                                          venue: req.body.venue , 
                                                          sponser: req.body.sponser , 
                                                          speaker: req.body.speaker,
                                                          Status: req.body.Status }})
      .then(data => {
        res.status(200).send("Details updated");
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
}

module.exports = {
    createEditor,
    getAllDetails,
    editDetails,
    getEditorById,
    updateDetails
};