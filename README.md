File Upload System (Node.js + Express + Multer + MongoDB)

A simple and secure file upload system built using Node.js, Express, Multer, and MongoDB.
This project allows users to upload files, store file details in a MongoDB database, and download files when needed.
It is perfect for learning backend development, REST APIs, and file handling in Express.

🚀 Features

📤 Upload any file type (images, documents, etc.)

🗃 Store file metadata in MongoDB

📥 Download files from server

📄 REST API endpoints (upload, list, download)

🔒 Secure handling with Multer middleware

🧹 Clean project structure (routes + controllers)

📁 Project Structure
project-folder/
│
├── server.js
├── db.js
├── routes/
│   └── fileRoutes.js
├── controllers/
│   └── fileController.js
└── uploads/        # Files will be stored here
📦 Installation
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
2. Install dependencies
npm install
3. Set up environment variables

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000
4. Start the server
npm start
🔗 API Endpoints
Upload File
POST /api/files/upload

Send form-data:

file: <your-file>
Get All Files
GET /api/files
Download File
GET /api/files/download/:id
🧰 Technologies Used

Node.js

Express.js

Multer

MongoDB + Mongoose

Cors

📝 How Multer Works (Short Explanation)

Multer is a middleware used to handle file uploads.
It reads the file from the form-data request and saves it into the uploads/ folder.
After saving, its details (name, size, path) are stored in MongoDB.

🤝 Contribution

Feel free to submit issues or pull requests.

📄 License

This project is open-source and free to use.
