# YouClone
## A React, Redux, Axios, SCSS and HTML project
YouClone is a react, redux project that interacts with YouTube v3 API to display videos based on the user search. This project is developed to showcase the understanding on concepts of React, Redux, Axios and HTML/SCSS. 

## Installation
To install the dependencies run command:-
*npm run install*

## Code structure
### public - 
All the public files images and icon svg files are place here. These files can be accessed inside the code using *window.location.origin*
***Icon Files*** - *window.location.origin + /assets/icons/sprite.svg#<icon-name>*

### src - 
It is comprised of 
1. actions - all action creators are defined here
2. apis - API call to YouTube v3 API using axios
3. components - It is comprised of Layout, Navigation and UI components in addition to Helper functions
4. key - It contains YouTube API key
5. reducers - as this application only needs to work with video data, it has only 1 reducer
6. utils - It is a utility folder to manage SCSS files 
7. history.js file - In order to get access to the history object we need to define a custom history object using history.js file
8. index.js file - Renders app component 
9. index.scss file - all of the scss files are linked to one index.scss file

## Thank you visiting here and spending time to look at my work. If you like my work and effort, then follow me on [LinkedIn](https://www.linkedin.com/in/princedogra/).