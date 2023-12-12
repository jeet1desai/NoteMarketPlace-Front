import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadDocument = (folder, file) => {
  return new Promise((resolve, reject) => {
    if (file === null) {
      resolve("");
    }

    const imageRef = ref(storage, `${folder}/${file.name} + ${Date.now()}`);
    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            resolve(url);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};
