Deploying over FTP
==================

To automatically deploy the production files over FTP, first add your connection
details to the `gulp/config.js` file:
```
...
const config = {
  ...
  paths: {
    ...
    deploy: {
      ...
      dest: `/path-to-root-folder`,
    }
  }

  ...
  plugins: {
    ...
    ftp: {
      host:     'host',
      user:     'user',
      password: 'password',
      ...
    }
}
```
and then run:
```
npm run deploy
```