Getting Started
===============

Installation
------------

Clone the repository:
```
git clone https://github.com/polarfawx/frontend-template.git
```
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
[Deploying over FTP](deploying.md) section for further instructions. 

Running Specific Gulp Tasks
---------------------------

To execute a specific gulp task, run:
```
npm run gulp [task]
```
You can pass the following option to specify that you want to run the task in 
production mode:
```
npm run gulp [task] -- --env=production
```
Running in production mode means that all CSS and JS files will be minimized and
optimized, and linters will complain about the use of some featues such as
`console.log` or `alert` statements.
See [List of Gulp Tasks](gulp-tasks.md).

Using Version Control
---------------------

If you're planning to use a version control system for your project, you may
want first to delete the `.git` directory after cloning the template:
```
rm -rf .git
```
and then initialize your own repo.