Getting Started
===============

Installation
------------
Install the dependencies:
```
npm install
```

Starting the Development Server
-------------------------------
To start the development server, run:
```
npm start
```
The server reloads automatically when any source files are modified.

Building for Production
-----------------------
To build the site for production, run:
```
npm run build
```
The ready for deployment code will be placed into the `dist` folder. See the
[Deploying over FTP](deploying-over-ftp.md) section for the instructions on
deploying the site. 

Running Specific Gulp Tasks
---------------------------
See the [Available Gulp Tasks](available-gulp-tasks.md) section for the list of
all gulp tasks and instructions on how to execute them.

Using Version Control
---------------------
If you're planning to use a version control system for your project, you may
want first to delete the `.git` directory after cloning the template:
```
rm -rf .git
```
and then initialize your own repo. Don't forget to update `package.json` and
`README.md` with the description of your project (: