const express = require("express");
const ContactsModel = require("../models/contacts");
const contactsRoute = express.Router();

contactsRoute.route("/")
    .get((req, res) => {
        ContactsModel.find(req.query, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else if (data.length === 0) {
                res.send({message: "NO DATA", data: data})
            } else {
                res.status(200).send({message: "GET success", data: data})
            }
        })
    })
    .post((req, res) => {
        let data = new ContactsModel(req.body)
        data.save((err, data) => {
            if (err) {
                res.status(500).send(err)
            }  else {
                res.status(200).send({message: "POST SUCCESS", data: data})
            }
        })
    })

contactsRoute.route("/:id")
    .get((req, res) => {
        ContactsModel.findById(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else if (data === null) {
                res.status(404).send({message: "NOT EXIST", data: data })
            } else {
                res.status(200).send({message: "GET SUCCESS", data: data})
            }
        })
    })
    .delete((req, res) => {
        ContactsModel.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else if (data === null) {
                res.status(404).send({message: "NOT EXIST", data: data })
            } else {
                res.status(200).send({message: "DELETE SUCCESS", data: data})
            }
        })
    })
    .put((req, res) => {
        ContactsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else if (data === null) {
                res.status(404).send({message: "NOT EXIST", data: data })
            } else {
                res.status(200).send({message: "EDIT SUCCESS", data: data})
            }
        })
    })

module.exports = contactsRoute;