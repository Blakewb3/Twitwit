# TwitWit - Social Media Web Application

## Description

TwitWit is a social media web application built using Node.js, Express, Sequelize (with MySQL), and other technologies. It allows users to create accounts, post "twits," send messages, and interact with others in a social media environment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To use Twitwit, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies:<br>
   In terminal: npm install<br>

3. Login to your mysql using the command line/bash.<br>
   In terminal: mysql -u [username] -p;

4. Set up your database by creating a .env file in the project root directory. Add your sequelize database configuration as follows:<br>

DB_NAME='twitwit_db'<br>
DB_USER='your-database-username'<br>
DB_PASSWORD='your-database-password'<br>
SESSION_SECRET='your-secret'<br>

5. Create the necessary database schema using the provided SQL files in the "db" directory.<br>
   In terminal, once you logged into mysql: CREATE DATABASE twitwit_db;

6. Seed your database with data.<br>
   In terminal: node seeds/seed.js

7. Start the application.<br>
   In terminal: node server.js

## Usage

Open your web browser and navigate to http://localhost:3001.<br>
Register an account or log in if you already have one.<br>
Explore the features of TwitWit, including posting twits and sending messages<br>

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
GitHub: [SacredSoulrend](https://github.com/SacredSoulrend)<br>
add your info here...

## Resources
