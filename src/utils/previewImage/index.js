export const previewImage = (e, setData) => {
    const image = e.target.files[0];
    if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => setData(reader.result);
    }
};

export const previewImages = (e, setData) => {
    const images = Array.from(e.target.files);
    if (images.length !== 0) {
        images.forEach((image) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onloadend = () => {
                setData((prev) => {
                    return prev.concat(reader.result);
                });
            };
        });
    }
};
