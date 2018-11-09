# tellmethe

![dashenv](https://img.shields.io/badge/npm-v1.2.0-blue.svg)

##### A simple and easy to use javascript library to get all the necessary time related information.
#
```
npm i tellmethe
```

## How to use ?
#
```
const tellmethe = require('tellmethe');

tellmethe.year();
//2018

tellmethe.month();
//11

tellmethe.Month();
//Nov

tellmethe.day();
//10

tellmethe.Day();
//Sat

tellmethe.time_24hr();
//00:14:22

tellmethe.time_12hr();
//11:29:02 pm

tellmethe.timezone();
//GMT+530 India Standard time

tellmethe.country();
//India

tellmethe.everything();
//Fri Nov 09 2018 23:29:02 GMT+0530 (India Standard Time)
```
