# Book API

A simple REST API to manage a collection of books.

## Features

- Get all books
- Get a book by ID
- Add a new book
- Update a book by ID
- Delete a book by ID

## Requirements

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation
1. Clone the repository
```
git clone https://github.com/your-username/book-api.git
cd book-api
```
2. Install dependencies
```
npm install
```
3. Run application
```
nodemon .
```

## Endpoints
- GET /books
```
curl -X GET http://localhost:3000/books
```
response
```
{
    "books": [
        {
            "id": 1,
            "title": "Laskar Pelangi",
            "author": "Andrea Hirata"
        },
        {
            "id": 2,
            "title": "Naruto",
            "author": "Masashi Kishimoto"
        }
    ]
}
```

- GET BY ID /books/find?id=1
```
  curl -X GET http://localhost:3000/books/find?id=1
```
response
```
{
    "book": {
        "id": 1,
        "title": "Laskar Pelangi",
        "author": "Andrea Hirata"
    }
}
```

- ADD NEW BOOK /books
```
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "New Book", "author": "Author Name"}'
```
response
```
{
    "book": {
        "id": 3,
        "title": "new book 1",
        "author": "john"
    }
}
```

- UPDATE BOOK /books/1
```
curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"title": "new book 2", "author": "john"}'
```
response
```{
    "book": {
        "id": 1,
        "title": "new book 2",
        "author": "john"
    }
}
```

-- DELETE BOOK /books/1
```
curl -X DELETE http://localhost:3000/books/1
```
response
```
The book has been deleted.
```
