# Config Manager UI Project

## Pre-requisites

- Install npm
- Install oracle jet cli using following command

```
npm install -g @oracle/ojet-cli
```

## Dev build

Run the following command. It should open the browser. If not, you can visit following url ```http://localhost:8000/```

```
npm install
grunt build
grunt serve
```

## Generating war file

Run the following command to build war file with regular files
```
 grunt clean build war
```



Run the following command to build war file with minified files (Release Build)
```
 grunt clean build:release war
```

This generates a sampleui.war file under build folder
