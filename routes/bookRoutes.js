const express = require('express')
const { listAllBooks, addBook, deleteBook, fetchSpecificBook } = require('../controllers/bookController')
const { validationmiddleware } = require('../middlewares/bookDetailsValidation')
const bookRoutes = express.Router()

bookRoutes.get("/listallbooks", listAllBooks)
bookRoutes.post("/addbook", validationmiddleware, addBook)
bookRoutes.delete("/deletebook/:title", deleteBook)
bookRoutes.get("/fetchspecificbook/:title", fetchSpecificBook)

module.exports = bookRoutes