
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UploadImage } from '../../helper/cloudnary';
// import { getImageUrl } from '../../redux/action/upload.action';

const Upload = () => {
    const dispatch = useDispatch()
    const [url, setUrl] = useState()

    const handleUploadFile = async (e) => {
        const fileData = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = async () => {
            const imageUrlIns = reader.result;
            const img = await UploadImage(imageUrlIns)
            setUrl(img)
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }
    return (
        <div className='col-12 col-md-4 col-sm-6 p-2'>
            <input
                accept="image/*"
                id={`product-image-${"web"}`}
                // className="d-none"
                onChange={(e) => handleUploadFile(e)}
                multiple={false}
                onClick={() => setUrl('')}
                type="file"
            />
            <p className=' ' type="text" value={url}  >{url}</p>
        </div>
    )
}

export default Upload