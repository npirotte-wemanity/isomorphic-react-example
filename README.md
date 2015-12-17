[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# isomorphic-react-example

This is a little playground about React, Reflux and Isomorphic server side rendering.

This demonstrate the set up of a microservice architectured Website composed by a rendering server (index.js) and an api only server (api.js)

The api server is a very slim REST service for managing Todo Tasks.

The app uses Webpack and babel for code transpilation.

I choose to use material-ui to demonstrate the ability to generate complex layout on the server without pain (the cost is a slow front-end, material-ui is a very heavy framework).

I set up a isomorphic framework and a client only framework for demonstrate the advantages of isomorphism. Load the 2 apps (iso & client) while simulating a 2G network, you will see the magin out there.

Time to view the content on 2G with isomorphism : around 500ms

Time to view the content on 2G without isomorphism : around 40s (the material ui generate heavy scripts)

## Run the app

First install dependencies
```
npm install
```

Open a new command tool and lift up the API server
```
node api.js
```
### Rendering server
Open a new command tool, lift up the VIEW server and visit localhost:3000
```
node index.js
```

### non rendering server (for comparison)
Open a new command tool, lift up the VIEW server and visit localhost:2000
```
node index_unrendered.js
```

To clean up API data juste restar this service.

## To do

Demonstrate routing implementation in the rendering server
