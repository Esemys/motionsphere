// Create an array of blog posts
const blogPosts = [
    {
        title: "Jane models for the first time",
        date: "February 22, 2023",
        author: "John Doe",
        image: "motionsphere1.jpeg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
    },
    {
        title: "Blog Post 2",
        date: "February 23, 2023",
        author: "Jane Doe",
        image: "motionsphere2.jpeg",
        text: "Phasellus ornare leo ut sapien facilisis, et blandit lectus auctor. Fusce sed lectus euismod, luctus elit sed, placerat orci."
    },
    {
        title: "Blog Post 3",
        date: "February 24, 2023",
        author: "Bob Smith",
        image: "motionsphere3.jpeg",
        text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
    }
];

// Get the blog post section
const blogPostSection = document.getElementById("blog-post");

// Loop through the blog posts array
blogPosts.forEach((post) => {
    // Create a new blog post element
    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    // Create the blog post content
    const blogPostContent = `
        <h1>${post.title}</h1>
        <p>Posted on <span>${post.date}</span> by <span>${post.author}</span></p>
        <img src="${post.image}" alt="Blog Post Image">
        <p>${post.text}</p>
    `;

    // Add the blog post content to the blog post element
    blogPost.innerHTML = blogPostContent;

    // Add the blog post element to the blog post section
    blogPostSection.appendChild(blogPost);
});




const gallery = {
    title: "Skip to Video",
    images: [
        { src: "motionsphere1.jpeg", alt: "photo1" },
        { src: "motionsphere2.jpeg", alt: "photo2" },
        { src: "motionsphere3.jpeg", alt: "photo3" },
        { src: "motionsphere4.jpeg", alt: "photo4", hidden: true },
        { src: "motionsphere5.jpeg", alt: "photo5", hidden: true },
        { src: "motionsphere6.jpeg", alt: "photo6", hidden: true },
        { src: "motionsphere7.jpeg", alt: "photo7", hidden: true },
        { src: "motionsphere8.jpeg", alt: "photo8", hidden: true },
        { src: "motionsphere9.jpeg", alt: "photo9", hidden: true }
    ],
    videos: [
        {
            src: "In vain (1) (compressed).mp4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis quasi quisquam!"
        },
        {
            src: "In vain (1) (compressed).mp4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis quasi quisquam!"
        },
        {
            src: "In vain (1) (compressed).mp4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis quasi quisquam!"
        }
    ]
};

const galleryTitle = document.getElementById("gallery-title");
const imageContainer = document.getElementById("image-container");
const videoContainer = document.getElementById("video-container");

galleryTitle.textContent = gallery.title;

gallery.images.forEach((image) => {
    const imageElement = document.createElement("li");
    const imageTag = document.createElement("img");

    imageTag.src = image.src;
    imageTag.alt = image.alt;
    imageTag.classList.add("li-img");

    if (image.hidden) {
        imageElement.classList.add("hidden");
    }

    imageElement.appendChild(imageTag);
    imageContainer.appendChild(imageElement);
});

gallery.videos.forEach((video) => {
    const videoElement = document.createElement("li");
    const videoTag = document.createElement("video");
    const descriptionParagraph = document.createElement("p");

    videoTag.src = video.src;
    videoTag.controls = true;
    descriptionParagraph.textContent = video.description;

    videoElement.appendChild(videoTag);
    videoElement.appendChild(descriptionParagraph);
    videoContainer.appendChild(videoElement);
});