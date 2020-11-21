# note-taker

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Video Demonstration](#video-demonstration)
- [Installation](#installation)
- [License MIT](#licensemit)

## Description

Application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

  * GET `/api/notes` - Will read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Will receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Will receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Video Demonstration

[Video](https://drive.google.com/file/d/11VJhwZc6D59SabmOJnUM72OGoHPU72-R/preview)

In this video you can see that my application is broken. I have tried tirelessly to get my css and data.js file to run on the served website, but can not find a solution. I have tried creating a whole new application, changed how the files are linked multiple times and still get the same outcome. Sometimes in response to the css issue it will say 'incorrect MIME type' and will claim that it is a 'text/html' file, but as you can see it is linked as a 'style/css' file. I have researched this and found no answer.

## Installation

To access this application you must visit this link: [Served via Heroku](https://hidden-lowlands-02936.herokuapp.com/) or to install visit my GitHub page and locate the repository named "note-taker". Once this repository is cloned to your computer, you will be able to edit the files and/or run it on a server. Any questions can be directed to [Garrett Walter](mailto:gtwalter150@gmail.com). This project can be found here: [GitHub Repository](https://github.com/garrettwalter/note-taker)

## License MIT

Copyright 2020 Garrett Walter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 