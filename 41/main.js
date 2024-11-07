// Asynchronus promises fetch biasa post

const postData = {
    title: "New Post",
    body: "This is new post",
    userId: 1
}

fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(postData)
})
.then((response) => {
    if(!response.ok) {
        throw new Error("Tidak tersedia!");
    }
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
});