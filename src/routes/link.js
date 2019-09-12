const express = require("express")

const { Link } = require("../db")
const c = require("./constants")
const config = require("../config")

let linkRouter = express.Router()

linkRouter.get("/go/:slug", doLinkRedirect)

function doLinkRedirect(req, res) {
	Link.findOne({ slug: req.params.slug })
		.then(link => {
			res.redirect(link.destination)
		})
		.catch(err => {
			// Redirect to creation page when link not found.
			return res.redirect(config.PROXY_PATH)
		})
}

linkRouter.get("/links", getLinks)

function getLinks(req, res) {
	Link.find()
		.then(links => {
			return res.json(links)
		})
		.catch(err => {
			return res.status(c.StatusInternalError).send(err)
		})
}

linkRouter.post("/link", createLink)

function createLink(req, res) {
	let newLink = new Link(req.body)

	newLink
		.save()
		.then(() => {
			return res.json(newLink)
		})
		.catch(err => {
			return res.status(c.StatusInternalError).send(err)
		})
}

module.exports = linkRouter
