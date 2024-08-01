const express = require('express');
const router = express.Router();

let books = [
    { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata' },
    { id: 2, title: 'Naruto', author: 'Masashi Kishimoto' },
  ];

// GET
router.get('/', (req, res) => {
    res.json({ books: books });
}); 

router.get('/find', (req, res) => { 
    const bookId = req.query.id;
    const book = books.find(b => b.id === parseInt(bookId));
    if(!book){
        res.status(404).json({ message: 'The book with the given ID was not found.' });
    }else{
        res.json({book});
    }
    
});

// POST
router.post('/', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.status(201).json({ book });
});

// PUT
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === parseInt(bookId));
    if(!book){
        res.status(404).json({ message: 'The book with the given ID was not found.' });
    }else{
        book.title = req.body.title;
        book.author = req.body.author;
        res.status(200).json({ book });
    }
});

// DELETE
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === parseInt(bookId));
    if(!book){
        res.status(404).json({ message: 'The book with the given ID was not found.' });
    }else{
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.status(200).send("The book has been deleted.");
    }
}); 

module.exports = router;