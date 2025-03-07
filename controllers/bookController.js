// Book array to store book details
let books = [
    { title: 'Randamoozham', author: 'M. T. Vasudevan Nair', price: 999 },
    { title: 'Balyakalasakhi', author: 'Vaikom Muhammad Basheer', price: 499 },
    { title: 'Pathummayude Aadu', author: 'Vaikom Muhammad Basheer', price: 399 },
    { title: 'Khasakkinte Ithihasam', author: 'O. V. Vijayan', price: 899 },
    { title: 'Aadujeevitham', author: 'Benyamin', price: 1099 }
];

// Retrieve all books
const listAllBooks = (req, res) => {
    res.status(200).json({ message: 'Books listed successfully', books })
}

// Add a new book
const addBook = (req, res) => {
    try {
        books.push(req.body)
        res.status(201).json({ message: 'Book added successfully', books })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })
    }
}

// Remove a book by title
const deleteBook = (req, res) => {
    try {
        const initialLength = books.length;
        books = books.filter(b => b.title.toLowerCase() !== req.params.title.toLowerCase());

        if (books.length === initialLength) {
            return res.status(404).json({ message: 'Book not found' })
        }
        res.status(200).json({ message: 'Book deleted successfully', books })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })
    }
}

// Retrieve details of a specific book
const fetchSpecificBook = (req, res) => {
    try {
        const book = books.find(b => b.title.toLowerCase() === req.params.title.toLowerCase());
        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }
        res.status(200).json({ message: 'Book details fetched successfully', book })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })
    }
}

module.exports = {
    listAllBooks, addBook, deleteBook, fetchSpecificBook
}