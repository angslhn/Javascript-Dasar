// Promises axios

const id = Math.floor(Math.random() * (100 + 1));

axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then((response) => {
    console.log(`Title : ${response.data.title}`);
    console.log(`Body : ${response.data.body}`);
})
.catch((error) => {
    console.error(error);
});