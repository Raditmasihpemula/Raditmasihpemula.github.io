document.addEventListener("DOMContentLoaded", () => {
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");

    // Retrieve the like count from localStorage
    try {
        let count = localStorage.getItem("likeCount");
        if (count) {
            likeCount.textContent = count;
        } else {
            likeCount.textContent = 0;
        }
    } catch (e) {
        console.error("LocalStorage is not available.");
    }

    likeButton.addEventListener("click", () => {
        let currentCount = parseInt(likeCount.textContent);
        currentCount += 1;
        likeCount.textContent = currentCount;
        // Save the new like count to localStorage
        localStorage.setItem("likeCount", currentCount);
    });
});
