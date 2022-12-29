import API from "../utils/api";

const addProduct = (data) => {
  return API.post(
    "/prod/add-product",
    { ...data },
    { headers: { "Content-Type": "multipart/form-data" } }
  ).then((response) => {
    return response.data;
  });
};

const getProducts = () => {
  return API.get("/prod/get-products").then((response) => {
    return response.data;
  });
};

const getProduct = (product_id) => {
  return API.get(`/prod/get-product/${product_id}`).then((response) => {
    return response.data;
  });
};

const updateProduct = (product_id, data) => {
  return API.put(
    `/prod/update-product/${product_id}`,
    { ...data },
    { headers: { "Content-Type": "multipart/form-data" } }
  ).then((response) => {
    return response.data;
  });
};

const deleteProduct = (user_id, product_id) => {
  return API.delete(`/prod/delete-product/${user_id}/${product_id}`).then((response) => {
    return response.data;
  });
};

const ProductService = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};

export default ProductService;
