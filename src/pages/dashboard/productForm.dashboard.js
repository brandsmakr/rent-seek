import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { AvatarDefault } from "../../constants/images";
import { Button, TextField } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  CategoryService,
  ProductService,
  StorageService,
} from "../../services";
import Select from "react-select";
import Swal from "sweetalert2";
import ErrorFormat from "../../utils/errorFormat";

const ProductForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [description, setDescription] = useState("Description");
  const [categories, setCategories] = useState([]);
  const [formType, setFormType] = useState(
    location.state && location.state.formType ? location.state.formType : "add"
  );
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [options, setOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [qty, setQty] = useState("");
  const [regPrice, setRegPrice] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [id, setId] = useState(params.id ? params.id : "");

  const getAllCategories = () => {
    CategoryService.getCategories().then((res) => {
      setCategories(res.categories_data);
    });
  };

  useEffect(() => {
    getAllCategories();
    let categoryField = document.getElementById("category");
    // console.log(nameField)
    categoryField.focus();
  }, []);

  const categoryOptions = () => {
    if (categories.length > 0) {
      let data;
      data = categories.map((category) => ({
        ...category,
        value: category._id,
        label: category.name,
      }));
      setOptions(data);
    }
  };

  useEffect(() => {
    categoryOptions();
  }, [categories]);

  const handleImageChange = (e) => {
    let file = e.target.files[0];
    setImage(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + " kB",
        base64: reader.result,
        file: file,
      };
      setImagePreview(fileInfo.base64);
    };
  };

  const addProduct = () => {
    if (description === "Description") {
      setDescription("");
    }

    const data = {
      imageOfProduct: image,
      category: selectedCategory.value,
      title: title,
      description: description,
      regular_price: regPrice,
      rented_price: rentPrice,
      user: StorageService.getCurrentUser()._id,
    };

    let timerInterval;
    Swal.fire({
      title: "Creating Product...",
      html: "Please wait while updating info!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },

      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    ProductService.addProduct(data)
      .then((res) => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          title: res.message,
          showConfirmButton: true,
        });
        navigate("/admin/products");
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.data.errors) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: ErrorFormat.validationErrors(err.response.data.errors),
            showConfirmButton: true,
          });
        } else if (err.response.data.message) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: err.response.data.message,
            showConfirmButton: true,
          });
        }
      });
  };

  const getProduct = () => {
    if (id && id !== null) {
      ProductService.getProduct(id).then((res) => {
        // console.log(res);
        setSelectedCategory(res.product.category);
        setTitle(res.product.title);
        setDescription(res.product.description);
        setQty(res.product.qty);
        setRegPrice(res.product.regular_price);
        setRentPrice(res.product.rented_price);
        setImagePreview(
          `${process.env.REACT_APP_HOST_API}/${res.product.imgUrls}`
        );
      });
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const updateProduct = () => {
    const data = {
      title: title,
      description: description,
      regular_price: regPrice,
      rented_price: rentPrice,
      user: StorageService.getCurrentUser()._id,
    };

    if (image !== null) {
      data["imageOfProduct"] = image;
    }

    if (selectedCategory !== null || selectedCategory !== {}) {
      data["category"] = selectedCategory.value;
    }

    let timerInterval;
    Swal.fire({
      title: "Creating Product...",
      html: "Please wait while updating info!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },

      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    ProductService.updateProduct(id, data)
      .then((res) => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          title: res.message,
          showConfirmButton: true,
        });
        navigate("/admin/products");
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.data.errors) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: ErrorFormat.validationErrors(err.response.data.errors),
            showConfirmButton: true,
          });
        } else if (err.response.data.message) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: err.response.data.message,
            showConfirmButton: true,
          });
        }
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formType === "add") {
      addProduct();
    } else if (formType === "edit") {
      updateProduct();
    }
  };

  return (
    <>
      <section className="">
        <div className="w-100 box-container">
          <div className="flex justify-between align-items-center dashboard-main-row w-100">
            <h1>{formType === "add" ? "Add" : "Edit"} Product</h1>
            <div className="">
              <Button variant="text" component="label" className="p-0">
                <Link to="/admin/products" className="dashboard-btn ">
                  {/* <i className="ion-ios-arrow-back ml-2" /> */}
                  Back
                </Link>
              </Button>
            </div>
          </div>
          <hr />
          <form
            className="mt-2 col-row"
            onSubmit={(e) => submitHandler(e)}
            encType="multipart/form-data"
          >
            <div className="col-4 border left-box">
              <div className="box-container">
                <h3 className="dashobard-page-heading">Product Image</h3>
                <hr />
                <img
                  src={
                    imagePreview && imagePreview != null
                      ? imagePreview
                      : AvatarDefault
                  }
                  accept="image/png, image/jpeg"
                  alt="Product Cover Image"
                  className="w-100"
                  required={true}
                />
                <div className="p-b">
                  <Button variant="outlined" component="label" className="p-0">
                    <input
                      type="file"
                      className="file-input"
                      hidden
                      accept="image/*"
                      multiple
                      // value={image}
                      onChange={(e) => handleImageChange(e)}
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-8 border right-box">
              <div className="box-container">
                <h3 className="dashobard-page-heading">Product Info</h3>
                <hr />
                <div className="flex flex-column">
                  <div className="my-2 w-100">
                    <Select
                      // defaultValue={selectedCategory}
                      onChange={setSelectedCategory}
                      options={options}
                      required={true}
                      className="select-text"
                      id="category"
                      name="category"
                    />
                  </div>
                  <div className="my-2 w-100">
                    <TextField
                      id="title"
                      label="Title"
                      variant="outlined"
                      required={true}
                      className="w-100 text-area"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                  <div className="my-2 w-100">
                    <TextField
                      id="quantity"
                      label="Quantity"
                      variant="outlined"
                      required={true}
                      className="w-100 text-area"
                      type="number"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between w-100">
                    <div className="my-2 w-50">
                      <TextField
                        id="regular_price"
                        label="Regular Price"
                        type="number"
                        variant="outlined"
                        required={true}
                        className="w-100 text-area"
                        value={regPrice}
                        onChange={(e) => setRegPrice(e.target.value)}
                      />
                    </div>
                    <div className="my-2  w-50">
                      <TextField
                        id="sale_price"
                        label="Rent Price"
                        type="number"
                        variant="outlined"
                        required={false}
                        className="w-100 text-area"
                        value={rentPrice}
                        onChange={(e) => setRentPrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    className="my-2 br-8"
                  />
                  <div className="w-100 text-right mt-2 submit-btn">
                    <Button
                      variant="contained"
                      type="submit"
                      className="dashboard-btn"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProductForm;
