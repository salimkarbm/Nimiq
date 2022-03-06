//Get element by its id
const fileName = document.getElementById('filename');
const width = document.getElementById('width');
const height = document.getElementById('height');
const resize = document.getElementById('resize');

let url = window.location.href;

//load event listeners
function loadEvent() {
    document.addEventListener('DOMContentLoaded', function () {
        //Array of provided images
        const images = [
            'encenadaport',
            'fjord',
            'icelandwaterfall',
            'palmtunnel',
            'santamonica'
        ];
        //loop through images
        images.forEach((image) => {
            fileName.innerHTML += `<option>${image}</option>`;
        });
    });
}
loadEvent();

//listen for click event to resize image
resize.addEventListener('click', () => {
    //Get location url
    const imageName = fileName.value;
    const imageWidth = width.value;
    const imageHeight = height.value;

    url = `${url}/image?filename=${imageName}&width=${imageWidth}&height=${imageHeight}`;
    if (
        imageName === 'select image' ||
        imageWidth === '' ||
        imageHeight === ''
    ) {
        alert('insert valid data');
    } else {
        window.location.href = url;
        alert('image created successfully');
    }
});
