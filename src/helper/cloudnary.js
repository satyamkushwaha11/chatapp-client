import {
  CLOUDINARY_API_BASE,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "../config/app.config";


export const UploadImage = async (file, folderId) => {
    try {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        data.append("folder", `${CLOUDINARY_CLOUD_NAME}/${folderId}`)
        const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/image/upload/`;
        const res = await fetch(apiUrl, {
          method: "POST",
          body: data
        });
        const resultJson = await res.json();
        // console.log(resultJson,'lllllllllllllllllll');
        return resultJson.error?resultJson:resultJson.secure_url;
      } catch (error) {
        console.error('failed to upload image: ', error)
        return null;
      }
  }

export const UploadVideo = async (file, folderId) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("folder", `${CLOUDINARY_CLOUD_NAME}/${folderId}`);
    const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/video/upload/`;
    const res = await fetch(apiUrl, {
      method: "POST",
      body: data,
    });
    const resultJson = await res.json();
    return resultJson.secure_url;
  } catch (error) {
    console.error("failed to upload image: ", error);
    return null;
  }
};
