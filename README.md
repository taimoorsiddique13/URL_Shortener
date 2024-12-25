
# URL Shortener App

This is a simple URL shortener application built using **Node.js**, **Express**, **MongoDB**, and plain **HTML**, **CSS**, and **JavaScript** for the frontend.

## Features
- User registration and login with secure password storage (using bcrypt).
- JSON Web Token (JWT) authentication for secure user sessions.
- URL shortening functionality for logged-in users.
- Responsive and user-friendly interface.

## Project Structure
```
url-shortener/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── login.js
│   │   ├── register.js
│   │   └── app.js
│   ├── login.html
│   ├── register.html
│   └── index.html
├── routes/
│   ├── auth.js
│   └── shortener.js
├── models/
│   ├── user.js
│   └── url.js
├── .env
├── app.js
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following content:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

## Endpoints

### **Authentication**
- `POST /auth/register`  
  Register a new user with `username` and `password`.

- `POST /auth/login`  
  Log in with `username` and `password` to receive a JWT token.

### **URL Shortening**
- `POST /shorten`  
  Send a request with the original URL and your JWT token to receive a shortened URL.

### **Static Pages**
- `/register.html` - Registration page.
- `/login.html` - Login page.
- `/index.html` - URL shortener homepage (only accessible after logging in).

## Usage

1. Navigate to `/register.html` to create an account.
2. Log in using `/login.html`.
3. After logging in, use `/index.html` to shorten URLs.

## Technologies Used
- Backend: Node.js, Express
- Database: MongoDB
- Frontend: HTML, CSS, JavaScript
- Authentication: JWT, bcrypt


## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

**Author**: Taimoor Ul Hassan  
For inquiries or collaboration, feel free to contact me!
