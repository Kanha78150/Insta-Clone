# Instagram Clone

This project is an Instagram clone built using modern web technologies. The frontend is developed with HTML, CSS, and JavaScript, while the backend leverages Node.js and Express.js. MongoDB is used as the database for storing user data, posts, and other relevant information. Authentication is handled with Passport.js, and Multer.js is used for handling file uploads (posts). Axios is utilized for search operations.

# Table of Contents

1. Features
2. Prerequisites
3. Installation
4. Usage
5. Project Structure
6. Technologies Used
7. Contributing
8. License

# 1. Features
- User authentication (sign up, login, logout)
- User profile with the ability to update information
- Create, view, and delete posts
- Like and comment on posts
- Search functionality for finding users and posts
- Responsive design

# 2. Prerequisites
**Before you begin, ensure you have met the following requirements:**
- Node.js and npm installed
- MongoDB installed and running
- Basic knowledge of JavaScript, Node.js, and MongoDB

# 3. Installation
1. Clone the repository:
- `git clone https://github.com/Kanha78150/Insta-Clone`
- ```cd Insta-clone```

2. Install dependencies:
- `npm install`

3. Run the development server:
- `npx nodemon`

# 4. Usage
- Open your browser and navigate to ```http://localhost:3000```
- Sign up for a new account or log in if you already have an account.
- Create posts, like, comment, and search for users and posts.

# 5. Project Structure
Insta-clone/
- bin
- node_modules
- public
  - images
  - uploads
  - stylesheets
    - style.css
- routes
  - index.js
  - post.js
  - user.js
- views
  - partials
    - edit.ejs
    - error.ejs
    - feed.ejs
    - index.ejs
    - login.ejs
    - profile.ejs
    - search.ejs
    - upload.ejs
- REDME.MD
- app.js
- package-lock.json
- package.json

# 6. Technologies Used
1. **Frontend:**
- HTML
- CSS
- JavaScript

2. **Backend:**
- Node.js
- Express.js

3. **Database:**
- MongoDB

4. **Authentication:**
- Passport.js

5. **File Uploads:**
- Multer.js

6. **HTTP Requests:**
- Axios

# 7. Contributing
**Contributions are welcome! Please follow these steps:**
- Fork the repository
- Create a new branch ```git checkout -b feature-name```
- Commit your changes ```git commit -m 'Add some feature```
- Push to the branch ```git push origin feature-name```
- Open a pull request

# 8. License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

**Feel free to contribute and enhance the project! For any queries or issues, please open an issue on GitHub. Enjoy coding!**
