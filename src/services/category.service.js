import API from "../utils/api";

const getCategories = () => {
  return API.get("/cat/get-categories").then((response) => {
    return response.data;
  });
};

const getCategory = (category_id) => {
  return API.get(`/cat/get-category/${category_id}`).then((response) => {
    return response.data;
  });
};

const addCategory = (data) => {
  return API.post(
    "/cat/add-category",
    { ...data },
    { headers: { "Content-Type": "multipart/form-data" } }
  ).then((response) => {
    return response.data;
  });
};

const updateCategory = (category_id, data) => {
  return API.put(
    `/cat/update-category/${category_id}`,
    { ...data },
    { headers: { "Content-Type": "multipart/form-data" } }
  ).then((response) => {
    return response.data;
  });
};

const deleteCategory = (user_id, category_id) => {
  return API.delete(`/cat/delete-category/${user_id}/${category_id}`).then(
    (res) => {
      return res.data;
    }
  );
};

const CategoryService = {
  getCategories,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};

export default CategoryService;
