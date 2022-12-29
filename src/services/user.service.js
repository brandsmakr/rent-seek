import API from "../utils/api";

const getUsers = (user_id) => {
  return API.get(`/user/get-all-users/${user_id}`).then((response) => {
    return response.data;
  });
};

const updateUserStatus = (user_id, form_data) => {
  return API.put(`/user/change-user-role/${user_id}`, form_data).then((response) => {
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

const UserService = {
    getUsers,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  updateUserStatus
};

export default UserService;
