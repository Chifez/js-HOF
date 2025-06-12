/*
promises help us to compose or handle multiple callbacks
*/

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      let message = 'could not resolve error';
      reject(new Error(message));
    };

    image.src = url;
  });
};

Promise.all([
  loadImage('/imageurl1'),
  loadImage('/imageurl2'),
  loadImage('/imageurl2'),
])
  .then((image) => console.log(image))
  .catch((error) => console.log(error));
