import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadUserProfile = (image) => {
  if (image === null) {
    return "";
  }
  const imageRef = ref(storage, `images/${image.name} + ${Date.now()}`);
  uploadBytes(imageRef, image).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
    });
  });
};

export const uploadNoteImage = (image) => {
  if (image === null) {
    return "";
  }
  const imageRef = ref(storage, `images/${image.name} + ${Date.now()}`);
  uploadBytes(imageRef, image).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
    });
  });
};

export const uploadNotePreview = (file) => {
  if (file === null) {
    return "";
  }
  const imageRef = ref(storage, `images/${file.name} + ${Date.now()}`);
  uploadBytes(imageRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
    });
  });
};

export const uploadNote = (file) => {
  if (file === null) {
    return "";
  }
  const imageRef = ref(storage, `images/${file.name} + ${Date.now()}`);
  uploadBytes(imageRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
    });
  });
};
