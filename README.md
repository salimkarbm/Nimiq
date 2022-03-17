## FENG

Feng is an image processing api that resizes jpeg image to a thumbnail sized image.

## Project Description

 Feng is an API that can be use in two diffrent ways, a simple placeholder API that allow you to place images into your frontend wtih the size set via URL parameters. The second use case is as a library to server properly scaled versions of your images to the frontend to reduce page load size.

## Project tools and frameworks
```
this api has been done using **TypeScript** & **NodeJS** & **ExpressJS** & **Sharp**
```

## Instructions

To run the site you need to run it on your localhost server by downloading node.js  and you need to write on terminal the following codes:

### installation and running

to install the dependencies and devdependencies
`npm install` 

to transpile the typeScript codes into JavaScript codes and save them in the ./build folder.
`npm run build`

to start the server running on port 3000.
`npm run start`

## Testing, Linting and prettier

to lint you need to write the following code :
`npm run lint`

to run prettier you need to write the following code :
`npm run prettier`

to test you will need to write the following code :
`npm run test`

### project End Points
`/api/v1/`: home page endpoint

* HTTP Method: Get

`/api/v1/image?filename=fjord&width=300&height=400`: image processing endpoint

* HTTP Method: Get
* Query Param: `width`, `height`, `filename`.

 `filename`: the specific image you are requesting.

 `width and height`: dimension of the image in pixel

 ## Available images
  1. encenadaport
  2. fjord
  3. icelandwaterfall
  4. palmtunnel
  5. santamonica

 ### Functionality
* you can change the query parameters with width and height as long as it is from the 5 pictures existing
* images that got processed will be saved on your localdisk.
* any processed image will be cached and it wont be reprocessed to the same parameters again
