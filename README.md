[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# isomorphic-react-example

This is a little and simple playground about React, Reflux and Isomorphic server side rendering.

The aim of this example is to provide a simple and undertandable demo of an isomorphic rendering server.

This demonstrate the set up of a microservice architectured Website composed by a rendering server (index.js) and an api only server (api.js)

The api server is a very slim REST service for managing Todo Tasks.

The app uses Webpack and babel for code transpilation.

I set up a isomorphic server and a client only server for demonstrate the advantages of isomorphism. Load the 2 apps (iso & standard) while simulating a 2G network, you will see the magic out there.

**Try the app with javascript disabled, everything should be working proprely :)**

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

### non rendering server
Open a new command tool, lift up the VIEW server and visit localhost:2000
```
node index_unrendered.js
```

To clean up API data juste restart this service.

## To do

Demonstrate routing implementation in the rendering server
