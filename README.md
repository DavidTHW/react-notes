# React Notes

## How to Start?
Import the project as a private repo https://github.com/new/import 

Clone your private repo into your folder

start the project using `npm start`

### Note
- You may choose to any component/UI libraries for the design as we are not looking at how good you are at designing the components :)
- You do not need to make a Backend API server for this challenge. Just use the user.json data.
- You can store the information you need on redux or local storage.

## Requirements
- As a user, When I login with the correct credential, I should be able to access my personal notes.
  => can refer to user list from mocks (users)
- As a user, When I login with the wrong credential, I should receive a message saying "invalid username/password"
  => working
- As a user, I should not be able to access my personal notes without validating my credential.
  => working , can add user specific notes to notes mock
- As a user, I want to be able to add a note in my personal note
  => works with redux to reset the state refresh the page
- As a user, I want to be able to delete a note in my personal note.
  => works with redux
- As a user, I want to be able to view a note details in my personal note.
  => can click the show details button
- As a note, I should have a title that is shown in the user's personal notes
  => title is show, click show details to see the detail info
- As a note, I should have a description that is shown in the detail view.
  => the content is shown in the detail view

  done with redux-toolkit , react-router-6 in functional components, nanoid to generate random ids (for delete and add post)

  # TODOs and enhancements
  1 - When deployed, if a user logs out, the user is not redirected to the login page unlike on local. (probably an issue where useNavigate hook not supported) 
  Possible solution : add a redirect link / troubleshoot the useNavigate hook

  2 - Possible bug when user is looking at the notes, the content is the title and vice versa
  Possible solution : error when passing prop. will be fixed 
  FIXED

  3 - When user refreshes, immediately directed to github's 404. is there a way to catch this behaviour (from auth-ed to not auth-ed) and reirect to my 404 page. 
  Possible solution - need more information useNavigate hook properties and behaviours

  4 - CSS to be added , planning on adding tailwind package for styling


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
