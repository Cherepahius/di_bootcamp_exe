class Vidoe {
    constructor(title, uploader, item) {
        this.title = title;
        this.uploader = uploader;
        this.tiem = item;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

const video1 = new Vidoe("Video1", "Uploader1", 100);
video1.watch();

const video2 = new Vidoe("Video2", "Uploader2", 200);
video2.watch();

const videoData = [
    { title: "Video3", uploader: "Uploader3", time: 100 },
    { title: "Video4", uploader: "Uploader4", time: 200 }
]

const videos = videoData.map(data => new Vidoe(data.title, data.uploader, data.time));

videos.forEach(video => video.watch())