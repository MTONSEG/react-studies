import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {
    id: 1,
    message: 'To use imports  you specify, you can add',
    imageSrc: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 2,
    message: 'roject root with the path specified in the SASS_PATH environment variable',
    imageSrc: 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    id: 3,
    message: 'Note: If youre using Flow, override the module.file_ext setting in your .flowconfig so itll recognize .sass or .scss files. You will also need to include the',
    imageSrc: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    message: 'Windows operating system, separate your paths by semicolons',
    imageSrc: 'https://picsum.photos/200/300/?blur'
  },
  {
    id: 4,
    message: 'Windows operating system, separate your paths by semicolons',
    imageSrc: 'https://picsum.photos/200/300/?blur'
  },
];
let userData = [
  { id: 1, name: 'Maksym Savik' },
  { id: 2, name: 'Maksym Slesar' },
  { id: 3, name: 'Maksym Vycheslav Bomyus' },
  { id: 4, name: 'Armat Maksym Gukis' },
  { id: 5, name: 'Maksym Savik' },
  { id: 6, name: 'Artmat Maksym' },
];
let messageData = [
  { id: 1, message: 'Hello, World!' },
  { id: 2, message: 'Hi!' },
  { id: 3, message: 'How old are you ?' },
  { id: 4, message: 'It fine!' },
  { id: 5, message: 'Are you ?' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsData} users={userData} messages={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
