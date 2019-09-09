import photos from './assets/photos.json';

export const getPhotos = () => {
    return photos;
}

export const getPhotosByTags = (tags) => {
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