import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { Button, LinearProgress, Box, ButtonGroup } from "@mui/material";
import { CategoryService, StorageService } from "../../services";
import { DefaultImage } from "../../constants/images";
import Swal from "sweetalert2";
import ErrorFormat from "../../utils/errorFormat";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [user, setUser] = useState(StorageService.getCurrentUser()._id);
  const [columns, setColumns] = useState([
    {
      field: "sr_no",
      headerClassName: "header-text",
      headerName: "Sr. no",
      width: 90,
    },
    {
      field: "image",
      headerName: "Image Cover",
      width: 150,
      headerClassName: "header-text",
      headerAlign: "center",
      editable: true,
      renderCell: (params) => {
        // console.log(params.row.image)
        return (
          <img
            src={
              params.row.image && params.row.image !== null
                ? `${process.env.REACT_APP_HOST_API}/${params.row.image}`
                : DefaultImage
            }
            alt={params.row.name}
            className="img-thumbnail"
          />
        );
      },
    },
    {
      field: "id",
      headerClassName: "header-text",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "header-text",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      headerClassName: "header-text",
      width: 350,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      headerClassName: "header-text",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const handleEdit = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          // alert("return me");
          return navigate(`/admin/category-form/${params.row.id}`, {
            state: { formType: "edit" },
          });
        };

        const handleDelete = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              deleteCategory(params.row.id);
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        };

        return (
          <ButtonGroup
            disableElevation
            className="mx-auto"
            aria-label="Disabled elevation buttons"
          >
            <Button
              variant="outlined"
              className="ft-2 text-capitalized cursor-pointer"
              color="secondary"
              onClick={(e) => handleEdit(e)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
              variant="contained"
              color="error"
              className="ft-2 text-capitalized cursor-pointer"
              onClick={(e) => handleDelete(e)}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </ButtonGroup>
        );
      },
    },
    // {
    //   field: "description",
    //   headerName: "Description",
    //   width: 300,
    //   editable: true,
    //   renderCell: (params) => {
    //     // console.log(params)
    //     return (
    //       <div
    //         dangerouslySetInnerHTML={{
    //           __html: params.row.description,
    //         }}
    //       />
    //     );
    //   },
    // },
  ]);

  const deleteCategory = (id) => {
    setIsLoading(true);

    CategoryService.deleteCategory(user, id)
      .then((res) => {
        setIsLoading(false);
        getAllCategories();
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
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data.errors) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            html: ErrorFormat.validationErrors(err.response.data.errors),
            showConfirmButton: true
          });
        } else if (err.response.data.message) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Errors Occur",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            html: err.response.data.message,
            showConfirmButton: true,
          });
        }
      });
  };

  const getAllCategories = () => {
    CategoryService.getCategories().then((res) => {
      setCategories(res.categories_data);
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllRows = () => {
    if (categories && categories.length > 0) {
      const allRows = categories.map((category, index) => {
        return {
          sr_no: index + 1,
          id: category._id,
          name: category.name,
          title: category.title,
          image: category.imgUrl,
        };
      });
      setRows(allRows);
    }
  };

  useEffect(() => {
    getAllRows();
  }, [categories]);

  return (
    <>
      <section className="">
        <div className="w-100 box-container">
          <div className="flex justify-between align-items-center dashboard-main-row w-100">
            <h1>
              <b>Categories</b>
            </h1>
            <div className="">
              <Button variant="text" component="label" className="p-0">
                <Link to="/admin/category-form" className="dashboard-btn ">
                  Add Category
                  <i className="ion-ios-arrow-forward" />
                </Link>
              </Button>
            </div>
          </div>
          <hr />
          <div className="mt-2">
            <Box
              sx={{
                height: 380,
                width: "100%",
              }}
              className="data-grid-shadow"
            >
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                className="ft-2 "
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                loading={isLoading}
                components={{
                  LoadingOverlay: LinearProgress,
                }}
                hideFooter={false}
                columnVisibilityModel={{
                  // Hide columns status and traderName, the other columns will remain visible
                  id: false,
                }}
              />
            </Box>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
