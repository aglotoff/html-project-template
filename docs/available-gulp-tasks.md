Available Gulp Tasks
====================

To execute a specific gulp task, run:
```
npm run gulp -- [task]
```
You can pass the following option to specify that you want run the task in 
production mode:
```
npm run gulp -- [task] --env=production
```
Running in production mode means that all CSS and JS files will be minimized and
optimized, and linters will complain about the use of some featues such as
`console.log` or `alert` statements.

| Task                  | Description                                       |
| ----------------------| ------------------------------------------------- |
| ```default```         | Run development server and watch code for changes |
| ```serve```           | Run development server                            |
| ```deploy```          | Compile the entire project and deploy through ftp |
| ```build```           | Compile the entire project                        |
| ```build:css```       | Compile only CSS                                  |
| ```lint:css```        | Check CSS                                         |
| ```build:fonts```     | Copy fonts into the destination directory         |
| ```build:html```      | Compile only HTML                                 |
| ```build:icons```     | Build only icons                                  |
| ```build:img```       | Optimize images                                   |
| ```build:js```        | Compile only JavaScript                           |
| ```watch```           | Watch all source files for changes                |
| ```watch:css```       | Watch only for CSS changes                        |
| ```watch:fonts```     | Watch only for font changes                       |
| ```watch:html```      | Watch only for HTML changes                       |
| ```watch:icons```     | Watch only for icon changes                       |
| ```watch:img```       | Watch only for image changes                      |
| ```watch:js```        | Watch only for JavaScript changes                 |
| ```clean```           | Clean the entire destination folder               |
| ```clean:css```       | Clean only CSS                                    |
| ```clean:fonts```     | Clean only fonts                                  |
| ```clean:html```      | Clean only HTML                                   |
| ```clean:icons```     | Clean only icons                                  |
| ```clean:img```       | Clean only images                                 |
| ```clean:js```        | Clean only JavaScript                             |
