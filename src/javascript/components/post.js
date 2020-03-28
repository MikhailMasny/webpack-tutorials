export default class Post {
    constructor(title, image) {
        this.title = title;
        this.image = image;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            image: this.image
        })
    }
}