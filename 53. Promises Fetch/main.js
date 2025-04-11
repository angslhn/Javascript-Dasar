// Promises fetch

let index = Math.floor(Math.random() * 101);

fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Tidak Tersedia!");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });