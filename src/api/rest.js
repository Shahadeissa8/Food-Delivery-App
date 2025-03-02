import instance from ".";
const getAllCategories = async () => {
  const res = await instance.get("/category");
  return res.data;
};

const getAllRestaurants = async () => {
  const res = await instance.get("/resturant");
  return res.data;
};
export { getAllCategories, getAllRestaurants };
