// Async Await Axios

const id = Math.floor(Math.random() * (100 + 1));

const getDataPost = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(`${response.data.title}`);
        console.log(`${response.data.body}`);
    } 
    catch (message) {
        console.error(message);
    }
}

getDataPost()