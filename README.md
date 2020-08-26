# Netflix Clone

[Demo](uujx-netflix-clone.herokuapp.com)

This is a Netflix frontend clone project built with TypeScript, React, Redux, React-Router. It uses The MovieDB API to search for movies and display details.

---

## Tech Stack

Front-end:

- **TypeScript**
- **React** with functional components and hooks
- **Redux** and **Redux-thunk** for state management
- **React-Router** for client-side routing
- **Axios** for HTTP requests
- **SASS** and **CSS Modules** for styles
- **Swiper.js** for swipe effect
- **React Hook Form** for form validation
- **Webpack** for bundling
- **lodash** for utility functions

Back-end:

- **Node.js**
- **Express**
- MongoDB with **mongoose**
- **validator**
- **bcryptjs**
- **jsonwebtoken**

---

## Running Project Locally

1. Install all the dependencies: `npm install`
2. Get API key from [The MovieDB](https://www.themoviedb.org/documentation/api)
3. Create .env file in root project and add: `API_KEY=YOUR_API_KEY_HERE`
4. Run project: `npm start`

---

## User Stories

- User can sign up and sign in to the website. If choose Remember Me, user can automatically login in 7 days.
- User can the see a landing movie and other genre movies or shows in showcases. Data updates dayly.
- User can swipe the showcase or click the navigation icon to browse.
- User can search for movies and TV shows on TMDb.
- User can click on a movie and a modal should pop up. It should display the title, rating, language and overview.
- User can click Add My List to add the movie into their account. They can see their saved movies from the My List page.
- The webpage adapts to any screen size.

---

Please feel free to create a pull request and submit any issues!
