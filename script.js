document.addEventListener("DOMContentLoaded", () => {
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");

    // Retrieve the like count from localStorage
    let count = localStorage.getItem("likeCount");
    if (count) {
        likeCount.textContent = count;
    } else {
        likeCount.textContent = 0;
    }

    likeButton.addEventListener("click", () => {
        let currentCount = parseInt(likeCount.textContent);
        currentCount += 1;
        likeCount.textContent = currentCount;
        // Save the new like count to localStorage
        localStorage.setItem("likeCount", currentCount);
    });
});
