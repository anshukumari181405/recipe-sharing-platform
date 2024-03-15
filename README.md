# Recipe Sharing Platform

Welcome to the Recipe Sharing Platform! This project is a web application where users can explore and save their favorite recipes.

## Installation

To run the Recipe Sharing Platform locally, follow these steps:

### Backend Setup

1. Clone the repository: `git clone https://github.com/anshukumari181405/recipe-sharing-platform.git`
2. Navigate to the backend directory: `cd recipe-sharing-platform/backend`
3. Install dependencies: `npm install`
4. Set up your MySQL database and configure the `.env` file with your database credentials.
5. Start the backend server: `npm start`

### Frontend Setup

1. Navigate to the frontend directory: `cd recipe-sharing-platform/frontend`
2. Install dependencies: `npm install`
3. Start the frontend server: `npm start`

## Usage

Once the backend and frontend servers are running, you can access the Recipe Sharing Platform in your web browser at `http://localhost:3000`.

## Backend Setup

The backend of the Recipe Sharing Platform is built with Node.js and Express, and it utilizes a MySQL database to store user-selected favorite recipes. The backend provides RESTful API endpoints to manage the favorites list, including adding new favorites, removing favorites, and fetching the favorites list.

## Frontend Setup

The frontend of the Recipe Sharing Platform is built with React. It allows users to browse recipes, search for specific recipes, and save their favorites for later reference. The frontend communicates with the backend through HTTP requests to interact with the API endpoints.

## Dependencies

- Node.js
- Express
- MySQL
- Axios
- React
- React Router
- Other dependencies as listed in package.json files of frontend and backend directories

## Contributing

Contributions are welcome! If you'd like to contribute to the Recipe Sharing Platform, please fork the repository and submit a pull request with your changes.
