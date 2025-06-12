/*
stream are just streams of data.
they are like a result of an array of data and a promise
stream is a way of modelling data, whose arrival time varies and cannot be determined
streams are used to handle large data or files that cannot all be handled or stored once in memory and reduce response time 
*/

const NumberStream = {
  each: (callback) => {
    setTimeout(() => callback(1), 1000);
    setTimeout(() => callback(2), 2000);
    setTimeout(() => callback(2), 3000);
  },
};
NumberStream.each(console.log);
