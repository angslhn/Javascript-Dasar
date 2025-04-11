// Async Await Fetch

const id = Math.floor(Math.random() * (100 + 1));

async function getDataPost() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) throw new Error("Terjadi kesalahan saat mengambil data!");
        
        return await response.json();

    } catch (error) {
        console.error(error);
    }
}

const getPostData = async () => {
    const data = await getData();

    const title = data.title;
    const body = data.body

    console.log(`Title : ${title}`);
    console.log(`Body : ${body}`);
}

getPostData()