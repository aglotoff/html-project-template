Deploying over FTP
==================

To deploy the production-ready files over FTP, first edit the following fields
in `gulp/config.js`:

```
...
const config = {
  ...
  paths: {
    ...
    deploy: {
      ...
      dest: `/path-to-document-root-folder`,
    }
  }

  ...
  plugins: {
    ...
    ftp: {
      host: 'host',
      user: 'user',
      password: 'password',
      ...
    }
}
```

and then run:

```
npm run deploy
```