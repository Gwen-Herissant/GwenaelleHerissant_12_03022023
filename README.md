# Project 9 - Front-end Dashboard

This repo contains all the source code to run the profile page for the sports analytics dashboard SportSee.

## 1. General information

In this documentation, we will see several methods to launch the project easily.
For the frontend to work you will need to launch the Project 9 - Front-end Dashboard repository first, which runs the micro API.

## 2. Project

### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- Project 9 - Front-end Dashboard repository (https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

To run the micro API :

- Fork the "Project 9" repository
- Clone it on your computer.
- Run `yarn` or `npm install` to install the dependencies.
- Run `yarn dev` or `npm start` to run the micro API.

To run the frontend :

- Fork the present repository
- Clone it on your computer.
- Run `yarn` or `npm install` to install the dependencies.
- Run `yarn dev` or `npm start` to run the front.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

After running `npm start` you may get a message in the terminal warning you that the port 3000 is already in use, and asking if you want to use another port. In this case, type `Enter` to answer yes.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## 3. Seeing the profile page

Since the profile page is not the index pages of the project, you will get an error upon opening port 3000 on your browser.

To see the profile dashboard, you will need to add `user/${userId}` in the url.
In our case, only two users have been mocked in the API, their Ids are 12 and 18.

So make sure the url in your browser is as follow :
`http://localhost:3000/user/12` or `http://localhost:3000/user/18` (your localhost may not be `3000`, change it accordingly)
