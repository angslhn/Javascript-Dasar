// Asynchronus async await fetch

const id = Math.floor(Math.random() * (100 + 1));

async function getData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
            throw new Error("Terjadi Kesalahan Pada Jaringan!");
        }
        
        const data =  await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}

(async () => {
    const data = await getData();

    const title = data.title;
    const body = data.body

    console.log(`Title : ${title}`);
    console.log(`Body : ${body}`);
})()