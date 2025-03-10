/*   😂 👉 ده لو عاوزين نضيف فيديو في البنر الرئيسي في جلامور او اي بنر في سله عمتا واخد الصوره باك جراوند مش صوره في عاديه في ديف بنحط الصوره عادي ونحط الكود ده لو عاوزين شرح اكتر للكود تابعوني علي تيك توك هسيب اللينك تحت في الديسكربشون */ 

/*    Add background video to target sections  */

const addVideoBackground = (sectionSelector, videoUrl) => {
    const videoSection = document.querySelector(sectionSelector);
    if (videoSection) {
        const videoBackground = document.createElement("video");
        videoBackground.src = videoUrl;
        videoBackground.autoplay = true;
        videoBackground.muted = true;
        videoBackground.loop = true;
        videoBackground.style.position = "absolute";
        videoBackground.style.top = "0";
        videoBackground.style.left = "0";
        videoBackground.style.width = "100%";
        videoBackground.style.height = "100%";
        videoBackground.style.objectFit = "cover";
        videoBackground.style.zIndex = "-1";
        videoSection.style.position = "relative";
        videoSection.style.zIndex = "0";
        videoSection.prepend(videoBackground);

        // Hide all images inside the section
        const images = videoSection.querySelectorAll("img");
        images.forEach((img) => { img.style.display = "none"; });
    }
};

// Example: Add video backgrounds to different sections
addVideoBackground("section:nth-child(1 of .landing-page-first-bannar) > div", "https://github.com/wpAzzrk/hag-ahmed-bokha/raw/refs/heads/main/9dcb189ee84e2040efb4c9c5eb8026f3a38cffdc.mp4");
addVideoBackground("section:nth-child(3 of .landing-page-first-bannar) > div", "https://github.com/wpAzzrk/hag-ahmed-bokha/raw/refs/heads/main/-a3b6-4cc2-a4e6-113ee68e62d2.mp4");
// Add more calls to addVideoBackground for other sections as needed
