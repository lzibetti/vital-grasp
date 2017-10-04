const express = require("express");
const ResourcesModel = require("../models/resources");
const resourcesRoute = express.Router();

resourcesRoute.route("/")
    .get((req, res) => {
        ResourcesModel.find(req.query, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else if (data.length === 0) {
                res.send({message: "NO DATA", data: data })
            } else {
                res.status(200).send({message: "GET SUCCESS", data: data})
            }
        })
    })
    .post((req, res) => {
        let data = new ResourcesModel(req.body)
        data.save((err, data) => {
            if (err) {
                res.status(500).send(err)
            }  else {
                res.status(200).send({message: "POST SUCCESS", data: data})
            }
        })
    })

resourcesRoute.route("/:id")
    .get((req, res) => {
        ResourcesModel.findById(req.params.id, (err, data) => {
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
        ResourcesModel.findByIdAndRemove(req.params.id, (err, data) => {
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
        ResourcesModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else if (data === null) {
                res.status(404).send({message: "NOT EXIST", data: data })
            } else {
                res.status(200).send({message: "EDIT SUCCESS", data: data})
            }
        })
    })

module.exports = resourcesRoute;