import React, { useState, useEffect } from "react";
import { DefaultImage } from "../../constants/images";
import { ProductService, StorageService } from "../../services";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { Button, LinearProgress, Box, ButtonGroup } from "@mui/material";
import Swal from "sweetalert2";
import ErrorFormat from "../../utils/errorFormat";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [rows, setRows] = useState([]);
  const [user, setUser] = useState(StorageService.getCurrentUser()._id);
  const [columns, setColumns] = useState([
    {
      field: "sr_no",
      headerClassName: "header-text",
      headerName: "Sr. no",
      width: 75,
    },
    {
      field: "image",
      headerName: "Image Cover",
      width: 150,
      headerClassName: "header-text",
      headerAlign: "center",
      // editable: true,
      renderCell: (params) => {
        // console.log(params.row.image)
        return (
          <img
            src={
              params.row.image && params.row.image !== null
                ? `${process.env.REACT_APP_HOST_API}/${params.row.image}`
                : DefaultImage
            }
            alt={params.row.title}
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
      field: "title",
      headerName: "Title",
      headerClassName: "header-text",
      width: 200,
      editable: true,
    },
    {
      field: "qty",
      headerName: "Quantity",
      headerClassName: "header-text",
      width: 100,
      editable: true,
    },
    {
      field: "reg_price",
      headerName: "Regular Price",
      headerClassName: "header-text",
      width: 150,
      editable: true,
    },
    {
      field: "rent_price",
      headerName: "Rented Price",
      headerClassName: "header-text",
      width: 150,
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
          return navigate(`/admin/product-form/${params.row.id}`, {
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
              deleteProduct(params.row.id);
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
  ]);

  const deleteProduct = (id) => {
    setIsLoading(true);

    ProductService.deleteProduct(user, id)
      .then((res) => {
        setIsLoading(false);
        getAllProducts();
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
            showConfirmButton: true,
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

  const getAllProducts = () => {
    setIsLoading(true);
    ProductService.getProducts()
      .then((res) => {
        setIsLoading(false);
        // console.log(res);
        setProducts(res.prod_info);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllRows = () => {
    if (products && products.length > 0) {
      const allRows = products.map((product, index) => {
        return {
          sr_no: index + 1,
          image: product.imgUrls,
          id: product._id,
          title: product.title,
          qty: product.qty,
          reg_price: product.regular_price,
          rent_price: product.rented_price,
        };
      });
      setRows(allRows);
    }
  };

  useEffect(() => {
    getAllRows();
  }, [products]);

  return (
    <>
      <section className="">
        <div className="w-100 box-container">
          <div className="flex justify-between align-items-center dashboard-main-row w-100">
            <h1>
              <b>Products</b>
            </h1>
            <div className="">
              <Button variant="text" component="label" className="p-0">
                <Link to="/admin/product-form" className="dashboard-btn ">
                  Add Product
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
    // <>
    //   <section className="">
    //     <div className="w-100 box-container">
    //       <div className="flex justify-between align-items-center dashboard-main-row w-100">
    //         <h1>Products</h1>
    //         <div className="">
    //           <Button variant="text" component="label" className="p-0">
    //             <Link to="/admin/add-product" className="dashboard-btn ">
    //               Add Product
    //               <i className="ion-ios-arrow-forward" />
    //             </Link>
    //           </Button>
    //         </div>
    //       </div>
    //       <hr />
    //       <div class="wrappage">
    //         <div className="mt-2 container container-240">
    //           <div className="e-product">
    //             <div className="product-collection-grid product-grid spc1">
    //               <div className="row">
    //                 {isLoading ? (
    //                   <div className="d-flex">
    //                     <div className="spinner-border" role="status">
    //                       <span className="visually-hidden">Loading...</span>
    //                     </div>
    //                   </div>
    //                 ) : products && products.length > 0 ? (
    //                   products.map((product, index) => (
    //                     <div
    //                       className="col-xs-12 col-sm-6 col-md-6 col-lg-4 product-item"
    //                       key={index}
    //                     >
    //                       <div className="pd-bd product-inner product-hover-shadow">
    //                         <div className="product-img">
    //                           <Link to={`/product/${product._id}`}>
    //                             <img
    //                               src={
    //                                 product.imgUrls && product.imgUrls !== null
    //                                   ? `${process.env.REACT_APP_HOST_API}/${product.imgUrls}`
    //                                   : DefaultImage
    //                               }
    //                               alt={product.title}
    //                               className="img-reponsive"
    //                             />
    //                           </Link>
    //                         </div>
    //                         <div className="product-info">
    //                           {/* <div className="color-group">
    //                         <a href="#" className="circle black" />
    //                         <a href="#" className="circle red" />
    //                         <a href="#" className="circle gray" />
    //                       </div> */}
    //                           <div className="element-list element-list-left">
    //                             <ul className="desc-list">
    //                               <li>Connects directly to Bluetooth</li>
    //                               <li>Battery Indicator light</li>
    //                               <li>DPI Selection:2600/2000/1600/1200/800</li>
    //                               <li>Computers running Windows</li>
    //                             </ul>
    //                           </div>
    //                           <div className="element-list element-list-middle">
    //                             <div className="product-rating bd-rating">
    //                               <span className="star star-5" />
    //                               <span className="star star-4" />
    //                               <span className="star star-3" />
    //                               <span className="star star-2" />
    //                               <span className="star star-1" />
    //                               <div className="number-rating">
    //                                 ( 896 reviews )
    //                               </div>
    //                             </div>
    //                             {/* <p className="product-cate">
    //                       Computers &amp; Accessories
    //                     </p> */}
    //                             <h3 className="product-title">
    //                               <Link to={`/product/${product._id}`}>
    //                                 {product.title}
    //                               </Link>
    //                             </h3>
    //                             <div className="product-bottom">
    //                               <div className="product-price">
    //                                 <span>Rs. {product.rented_price}</span>{" "}
    //                                 <del>{product.regular_price}</del>
    //                               </div>
    //                               <a href="#" className="btn-icon btn-view">
    //                                 <span className="icon-bg icon-view" />
    //                               </a>
    //                             </div>
    //                             <div className="product-bottom-group">
    //                               <a href="#" className="btn-icon">
    //                                 <span className="icon-bg icon-cart" />
    //                               </a>
    //                               <a href="#" className="btn-icon">
    //                                 <span className="icon-bg icon-wishlist" />
    //                               </a>
    //                               <a href="#" className="btn-icon">
    //                                 <span className="icon-bg icon-compare" />
    //                               </a>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   ))
    //                 ) : (
    //                   <></>
    //                 )}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
};

export default Products;
