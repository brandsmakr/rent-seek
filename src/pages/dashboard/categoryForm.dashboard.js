import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { AvatarDefault } from "../../constants/images";
import { TextField, Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CategoryService, StorageService } from "../../services";
import Swal from "sweetalert2";
import ErrorFormat from "../../utils/errorFormat";

const CategoryForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [description, setDescription] = useState("Description");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [formType, setFormType] = useState(
    location.state && location.state.formType ? location.state.formType : "add"
  );
  const [imagePreview, setImagePreview] = useState(null);
  const [id, setId] = useState(params.id ? params.id : "");

  // console.log(location);

  // console.log(params)

  const addCategory = () => {
    // console.log(name, title, description, image);
    if (description === "Description") {
      setDescription("");
    }

    const data = {
      user: StorageService.getCurrentUser()._id,
      name: name,
      title: title,
      description: description,
      imageOfCat: image,
    };

    //   const data = new FormData();
    //   // data.append("user", StorageService.getCurrentUser()._id);
    //   data.append("name", name);
    //   data.append("title", title);
    //   data.append("description", description);
    //   data.append("imageOfCat", image);

    // const formObj = new FormData();
    // formObj.append("user", StorageService.getCurrentUser()._id);
    // formObj.append("name", name);
    // formObj.append("title", title);
    // formObj.append("description", description);
    // formObj.append("imageOfCat", image);

    // console.log(formObj)
    //   for (var p of formObj) {
    //     let name = p[0];
    //     let value = p[1];

    //     console.log(name, value)
    // }

    let timerInterval;
    Swal.fire({
      title: "Creating Category...",
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
    }).then((result) => {
      /* Read more about handling dismissals below */
      // if (result.dismiss === Swal.DismissReason.timer) {
      //   console.log('')
      // }
    });

    CategoryService.addCategory(data)
      .then((res) => {
        // console.log(res);
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
          // timer: 1500,
        });
        navigate("/admin/categories");
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.data.errors) {
          // console.log(err.response.data.errors)
          // err.response.data.errors.map((error, index) => {
          // console.log(error.msg);
          //   Swal.fire("Category Not Created!" , "error");
          // });
          // err.response.data.errors.map((error, index) => {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: ErrorFormat.validationErrors(err.response.data.errors),
            showConfirmButton: true,
            // timer: 1500,
          });
        } else if (err.response.data.message) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: err.response.data.message,
            showConfirmButton: true,
            // timer: 1500,
          });
        }
        // message => err.response.data.message
      });
  };

  const getCategory = () => {
    if (id && id !== null) {
      CategoryService.getCategory(id).then((res) => {
        // console.log(res);
        setName(res.category.name);
        setTitle(res.category.title);
        setDescription(res.category.description);
        setImagePreview(
          `${process.env.REACT_APP_HOST_API}/${res.category.imgUrl}`
        );
        // setImage(res.category.imgUrl);
      });
    }
  };

  useEffect(() => {
    getCategory();
  }, [id]);

  const updateCategory = () => {
    const data = {
      user: StorageService.getCurrentUser()._id,
      name: name,
      title: title,
      description: description,
      // imageOfCat: image,
    };

    if (image !== null) {
      data["imageOfCat"] = image;
    }

    // console.log(data)

    let timerInterval;
    Swal.fire({
      title: "Updating Category...",
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
    }).then((result) => {
      /* Read more about handling dismissals below */
      // if (result.dismiss === Swal.DismissReason.timer) {
      //   console.log('')
      // }
    });

    CategoryService.updateCategory(id, data)
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
          timer: 1500,
        });
        navigate("/admin/categories");
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.data.errors) {
          // console.log(err.response.data.errors)
          // err.response.data.errors.map((error, index) => {
          // console.log(error.msg);
          //   Swal.fire("Category Not Created!" , "error");
          // });
          // err.response.data.errors.map((error, index) => {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            html: ErrorFormat.validationErrors(err.response.data.errors),
            showConfirmButton: true,
            timer: 1500,
          });
        }
        // message => err.response.data.message
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formType === "add") {
      addCategory();
    } else if (formType === "edit") {
      updateCategory();
    }
  };

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

  useEffect(() => {
    let nameField = document.getElementById("name");
    // console.log(nameField)
    nameField.focus();
  }, []);

  return (
    <>
      <section className="">
        <div className="w-100 box-container">
          <div className="flex justify-between align-items-center dashboard-main-row w-100">
            <h1>{formType === "add" ? "Add" : "Edit"} Category</h1>
            <div className="">
              <Button variant="text" component="label" className="p-0">
                <Link to="/admin/categories" className="dashboard-btn ">
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
                <h3 className="dashobard-page-heading">Category Image</h3>
                <hr />

                <img
                  src={
                    imagePreview && imagePreview != null
                      ? imagePreview
                      : AvatarDefault
                  }
                  alt="Category Image"
                  className="w-100"
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
                <h3 className="dashobard-page-heading">Category Info</h3>
                <hr />
                <div className="flex flex-column">
                  <div className="my-2 w-100">
                    <TextField
                      id="name"
                      label="name"
                      variant="outlined"
                      required={true}
                      className="w-100 text-area"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="my-2 w-100">
                    <TextField
                      id="title"
                      label="title"
                      variant="outlined"
                      required={true}
                      className="w-100 text-area"
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
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

export default CategoryForm;
