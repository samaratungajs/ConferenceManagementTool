const Researcher = require('../models/researcher');

//store research paper details in the dataabase
const CreateResearcher = async (req, res) => {
    if (req.body) {
        const research = new Researcher(req.body);
        await research.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//update the status of research paper as approved
const approval = async (req, res) => {
    if (req.params && req.params.id) {
        let userid = req.params.id;

        await Researcher.findByIdAndUpdate(userid, { $set: { status: 'approved' } })
            .then(data => {
                res.status(200).send({ status: "user status approved" });
            }).catch(error => {
                console.log({ status: "Error with updating data", error: err.message });
            })

    }

}


//Retrive all the approved and paid research papers
const getapprovedpaid = async (req, res) => {
    await Researcher.find({ status: "approved", payment: "paid" })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            console.log({ error: error.message });
        });
}

//update the payment status
const updatepayment = async (req, res) => {
    if (req.params && req.params.id) {
        let paperid = req.params.id;

        await Researcher.findByIdAndUpdate(paperid, { $set: { payment: 'paid' } })
            .then(data => {
                res.status(200).send({ status: "payment status approved" });
            }).catch(error => {
                console.log({ status: "Error with updating data", error: err.message });
            })

    }
}

//Retrieve the approved research paper of a specific email address
const findapproval = async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
        await Researcher.find({ email: Email, status: "approved" })
            .then(data => {
                res.status(200).send({ data: data });
            }).catch((err) => {
                console.log(err.message);
                res.status(500).send({ status: "Error loading approved papers", error: err.message });
            })
    }
}


//Retrieve the not approved research paper of a specific email address
const findnotapproval = async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
        await Researcher.find({ email: Email, status: "not approved" })
            .then(data => {
                res.status(200).send({ data: data });
            }).catch((err) => {
                console.log(err.message);
                res.status(500).send({ status: "Error loading not approved papers", error: err.message });
            })
    }
}

//Delete Research paper
const ondelete = async (req, res) => {
    if (req.params && req.params.id) {
        let paperid = req.params.id;

        await Researcher.findByIdAndDelete(paperid).then(() => {
            res.status(200).send({ status: "paper deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })
    }
}

//Update the status of research paper as not approved
const disapproval = async (req, res) => {
    if (req.params && req.params.id) {
        let userid = req.params.id;

        await Researcher.findByIdAndUpdate(userid, { $set: { status: 'not approved' } })
            .then(data => {
                res.status(200).send({ status: "user status is not approved" });
            }).catch(error => {
                console.log({ status: "Error with updating data", error: err.message });
            })

    }

}

//Retrieve all research papers
const getAllReseracher = async (req, res) => {
    await Researcher.find({status:'null'})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            console.log({ error: error.message });
        });
}

//Retrive details of one research paper
const getOneSubjectResearch = async (req, res) => {
    if (req.params && req.params.id) {
        await Researcher.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                console.log({ error: error.message });
            })

    }
}


module.exports = {
    CreateResearcher,
    getAllReseracher,
    getOneSubjectResearch,
    approval,
    disapproval,
    ondelete,
    findapproval,
    updatepayment,
    findnotapproval,
    getapprovedpaid
};