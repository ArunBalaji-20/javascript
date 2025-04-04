
const textData = document.getElementsByClassName('container')[0];
let p = 9;
let isLoading = false;

// Fetch only if not already loading and p <= 100
async function fetchData() {
    if (isLoading || p > 100) return;
    isLoading = true;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${p}`);
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();

        // Check if same content already exists (to prevent repeats)
        if (!document.getElementById(`post-${data.id}`)) {
            textData.innerHTML += `
                <div class="item" id="post-${data.id}">
                    <h3>${data.title} ${data.id}</h3>
                    <p>${data.body}</p>
                </div>
            `;
        }

        p++; // Move to next post
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
}

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        // Delay calling fetchData to avoid rapid spam
        if (!isLoading) {
            setTimeout(fetchData, 500); // Only delay if not loading
        }
    }
};

window.addEventListener("scroll", handleScroll);
