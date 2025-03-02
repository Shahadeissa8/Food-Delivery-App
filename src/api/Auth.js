import instance from ".";
import { setToken } from "./storage";

const register = async (userInfo, image) => {
  const formData = new FormData(); //bc the backend is waiting for us to upload form data for the pic to work
  for (key in userInfo) {
    formData.append(key, userInfo[key]); //whenever wanting to send files to be we use formData
  } //b4 post
  formData.append("image", {
    name: "image.jpeg",
    type: "image/jpeg",
    uri: image,
  });
  console.log(formData);

  const res = await instance.post(
    "/auth/register",
    formData
    // {
    // ...userInfo,
    //we could write name = userInfo.name and so on fo reach element
    // image,
    // }
  );
  console.log(res);
  setToken(res.data.token);
  // console.log(res); why doesnt this work?
  return res.data;
};

const login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);
  setToken(res.data.token);
  return res.data;
};

export { register, login };
