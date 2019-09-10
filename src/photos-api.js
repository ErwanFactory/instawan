import photos from './assets/photos.json';

const getPhotos = (tags = []) => {
    if (tags.length === 0) {
        return photos;
    }

    // Usually that part should be done in backend but I don't have any for this example.
    return photos.filter(photo =>
        photo.tags.find(photoTag => 
            tags.find(tag => {
                return tag === photoTag;
            })
        )
    );
}

export default getPhotos;