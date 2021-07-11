const Attendee = require('../models/attendee.model');

const createAttendee = async (req, res) => {
    if (req.body) {
        const attendee = new Attendee(req.body);
        attendee.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAttendee = async (req, res) => {
    await Attendee.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getAttendeeById = async (req, res) => {
    if (req.params && req.params.id) {
      await Attendee.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  module.exports = {
    createAttendee,
    getAllAttendee,
    getAttendeeById
};