import photos from './assets/photos.json';

const getPhotos = (tags = []) => {
    if (tags.length === 0) {
        return photos;
    }

    // Usually that part should be done in backend but I don't have any for this example.
    return photos.filter(photo => tags.every(tag=> photo.tags.indexOf(tag.toLowerCase()) >= 0));
}

export default getPhotos;