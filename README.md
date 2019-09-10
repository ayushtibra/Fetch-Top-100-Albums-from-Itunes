# I-Tunes current top 100 albums

Project hosted on Heroku-
[See Demo](https://i-tunes-fetch-top-100-songs.herokuapp.com/)

This responsive web app(ReactJS) retrieves the top rated albums currently on iTunes and presents the information in an engaging way.
My design process began by listing the top 100 albums from [Itunes API](https://itunes.apple.com/in/rss/topalbums/limit=100/json)<br />
You can sort the albums alphabetically from (A to Z or Z to A).<br /> You can add your favourite album by clicking on Fav Album button.<br />
When clicking on a particular album, a modal show containing detailed information of album.
You can then select Buy Now button to purchase the song, it will redirect you to apple music.
Responsive App you can see it on Mobile also.

Activities in the app:-

## 1. Main Page
This page show our top 100 albums fetched from Itunes API.
<div>
<img src="/Screenshot/ItunesMain.PNG">
</div>

Take some time to load as there are 100 images to load on first page.


## 2. Sort Functionality
As you see in this image the albums are sort from A to Z, as there are images with numerical title present. So they are comimg first and
then title starting with A comes.
<div>
  <img src="/Screenshot/SortAtoZ.PNG">
</div>
  
 
## 3. Modal Appear on clicking Albums
When you click one of the albums, a modal appear contained information of that album.
<div>
  <img src="/Screenshot/modal.PNG">
</div>
  

## 4. Add Albums to Favourite Category.
A button on every album present to add them to Favourite Album category.
<div>
  <img src="/Screenshot/favAlbum.PNG">
</div>

### Any Queries and feedback regarding this project would be appreciable-
Queries - 
1) How to install this project on your local machine?


Feedback -
1) Find any errors please let me know
2) Method to improve any component
3) Anything you would like to say

### Mail me on - aayushtibra1997@gmail.com

### To run this Prject on your system-
1. npm install on your system.
2. node install on your system.

### How to run Project on your system-
- Install node modules where you downloaded the project.
- npm start to run the project

#### On Browser type-
localhost:3000 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
