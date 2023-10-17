# E-Commerce Back-End

## Description
This is the back-end component of an E-Commerce application. It provides API endpoints for managing categories, products, and tags in an online store. The application is built using Node.js, Express.js, Sequelize (an ORM), and MySQL as the database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To use the E-Commerce Back-End, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies:<br> 
In bash: npm install<br> 

3. Login to your mysql using the command line/bash.<br>
In bash: mysql -u [username] -p;

4. Set up your database by creating a .env file in the project root directory. Add your sequelize database configuration as follows:<br>

DB_NAME='ecommerce_db'<br>
DB_USER='your-database-username'<br>
DB_PASSWORD='your-database-password'<br>

5. Create the necessary database schema using the provided SQL files in the "db" directory.<br>
In bash, once you logged into mysql: CREATE DATABASE ecommerce_db;

6. Seed your database with data.<br>
In bash: node seeds/index.js

7. Start the application.<br>
In bash: node server.js

## Usage
Here is my video example on how to use the application:

https://drive.google.com/file/d/1rj4HTLFP3LOZSqskkbb5oRR8vzFXyyUm/view

## License
![License](https://img.shields.io/badge/license-MIT-yellow)

## License

MIT License

## Contributing
None

## Tests
None

## Questions
For additional questions, contact .
GitHub: [SacredSoulrend](https://github.com/SacredSoulrend)

## Resources
sequelize functions: https://www.npmjs.com/package/sequelize<br>
