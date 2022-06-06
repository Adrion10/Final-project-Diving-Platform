<<<<<<< HEAD

# MERN template project divingShop

Introduction
This project is a template for building fullstack JavaScript applications running on node.js. The technology stack is as follows:

You Will use
HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
React: Frontend JavaScript library. Components, Props, Events, Hooks, Router, Axios
Redux: Store, Reducers, Actions
Node & Express:Backend JS runtime, Server/routing API for web app, Web API, Body Parser, File Upload, JWT
MongoDB: Mongoose, Aggregation, Database used. Will change in the future when API used instead.
Development: , Git, Github,
Deployment: Heroku
Provides the JSON API for the React app using http
The package.json provides all the commands needed to test and run this application.

npm install install all dependencies for the server and the client.
npm run build builds the static files for the React app.
npm start starts the complete MERN app.
npm run react-dev starts the React app in development mode on http://localhost:3000. Only works if the server is started separately. Alternatively you can just use npm start from the client folder.
Development
Use this template to build your own apps. Since the React app is build using Create React App, you can easily update the React version.

During development of the React app, use npm run react-dev or simply navigate to the client folder and run npm start. Remember you need the server running as well for it to work.

If you want reload-functionality for the server code, I recommend using something like nodemon. You can then navigate to the server folder and start it using nodemon src/index.js.

Before deploying, build and start the app, and test that everything works on http://localhost:8080. The react app should open when you visit http://localhost:8080 in the browser and the API should be available on http://localhost:8080/api/.

Configuration
The app opens on port 8080 by default. If the environment variable PORT is set, that port will be used instead.

In production mode, the React app expects to find the API on the same port as itself on the /api path. In development mode, the React app expects to find the api on http://localhost:8080/api/ instead. You can change this behaviour in the React .env files.

Server implementation
It's worth noting that a few tricks are used in the server implementation to concurrently serve the http REST API and the React app.

# By default when the express.js server receives a request, it tries to match it with one of the API routes. If none matches it serves one of the static files instead. If none of those matches it serves the React index.html file. This enables client-side routing in the React app (with React Router or similar library) without overriding the server API or hiding any of the other static assets.

# divingShop

Hello
