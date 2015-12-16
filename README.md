# isomorphic-react-example

This is a little playground about React, Reflux and Isomorphic server side rendering.

This demonstrate the set up of a microservice architectured Website composed by a rendering server (index.js) and un api only server (api.js)

The api server is a very slim REST service for managing Todo Tasks.

The app uses Webpack and babel for code transpilation.

## Run the app

First install dependencies
```
npm install
```

Open a new command tool and lift up the API server
```
node api.js
```

Open a new command tool and lift up the VIEW server
```
node index.js
```

To clean up API data juste restar this service.

## To do

Demonstrate routing implementation in the rendering server
