import imageplaceholder from '../assets/no-image-placeholder.webp'
const getCroppedImage = (url:string) => {
    if(!url) return imageplaceholder;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;

    return url.slice(0,index) + 'crop/600/400/'+ url.slice(index);

}

export default getCroppedImage;