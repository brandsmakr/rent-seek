import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  LinearProgress,
  Box,
  ButtonGroup,
  Backdrop,
} from "@mui/material";
import { UserService, StorageService } from "../../services";
import { DefaultImage } from "../../constants/images";
import Swal from "sweetalert2";
import ErrorFormat from "../../utils/errorFormat";
import { Modal, ModalClose, Typography, Sheet } from "@mui/joy";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [userId, setUserId] = useState(StorageService.getCurrentUser()._id);
  const [userRoleOptions, setUserRoleOptions] = [
    { value: "admin", label: "admin" },
    { value: "client", label: "rentee" },
  ];
  const [userRole, setUserRole] = useState("");
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [columns, setColumns] = useState([
    {
      field: "sr_no",
      headerClassName: "header-text",
      headerName: "Sr. no",
      width: 60,
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
      width: 120,
      editable: true,
    },
    {
      field: "email",
      headerName: "Eamil",
      headerClassName: "header-text",
      width: 250,
      editable: true,
    },
    {
      field: "cnic",
      headerName: "CNIC",
      headerClassName: "header-text",
      width: 150,
      editable: true,
    },
    {
      field: "otp",
      headerName: "OTP",
      headerClassName: "header-text",
      width: 100,
      editable: true,
    },
    {
      field: "is_verified",
      headerName: "Is Verified",
      headerClassName: "header-text",
      width: 100,
      editable: true,
    },
    {
      field: "user_type",
      headerName: "User Type",
      headerClassName: "header-text",
      width: 100,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      headerClassName: "header-text",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        // console.log(params.id)
        setUserRole(params.row.user_type);
        setId(params.row.id);
        return (
          <ButtonGroup
            disableElevation
            className="mx-auto"
            aria-label="Disabled elevation buttons"
          >
            <Button
              variant="outlined"
              className="ft-2 text-capitalized cursor-pointer"
              color="info"
              onClick={(e) => setOpen(true)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
          </ButtonGroup>
        );
      },
    },
  ]);

  const getAllUsers = () => {
    UserService.getUsers(userId).then((res) => {
      // console.log(res.users);
      setUsers(res.users);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllRows = () => {
    if (users && users.length > 0) {
      const allRows = users.map((user, index) => {
        return {
          sr_no: index + 1,
          id: user._id,
          name: user.name,
          email: user.email,
          cnic: user.cnic,
          otp: user.otp,
          is_verified: user.user_verified,
          user_type: user.user_type,
        };
      });
      setRows(allRows);
    }
  };

  useEffect(() => {
    getAllRows();
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setOpen(false);

    let timerInterval;
    Swal.fire({
      title: "Updating User Info...",
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

    if (id && userId && userRole) {
      const formObj = {
        user: userId,
        user_type: userRole,
      };
        UserService.updateUserStatus(id, formObj)
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
              // timer: 1500,
            });
          })
          .catch((err) => {
            if (err.response.data.errors) {
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
          });
      
    }
  };

  return (
    <>
      <section className="">
        <div className="w-100 box-container">
          <div className="flex justify-between align-items-center dashboard-main-row w-100">
            <h1>
              <b>Users</b>
            </h1>
            <div className="">
              {/* <Button variant="text" component="label" className="p-0">
                <Link to="/admin/category-form" className="dashboard-btn ">
                  Add Category
                  <i className="ion-ios-arrow-forward" />
                </Link>
              </Button> */}
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
        <div>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            hideBackdrop={true}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "rgba(0,0,0,0.3)",
              backgroundColor: "var(--joy-palette-background-backdrop)",
              opacity: 1,
              backdropFilter: "blur(8px)",
              transition:
                "opacity 400ms ease 0s, backdrop-filter 400ms ease 0s",
            }}
          >
            <Sheet
              variant="outlined"
              // back
              sx={{
                maxWidth: 500,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
                background: "white",
                boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2) !important",
                borderColor: "#f1f1f1 !important",
                minWidth: "500px",
                minHeight: "200px",
              }}
            >
              <ModalClose
                variant="outlined"
                sx={{
                  top: "calc(-1/4 * var(--IconButton-size))",
                  right: "calc(-1/4 * var(--IconButton-size))",
                  boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2) !important",
                  borderRadius: "50%",
                  bgcolor: "background.body",
                  background: "white",
                  borderColor: "#f1f1f1 !important",
                  opacity: 1,
                }}
              />
              <div className="flex justify-start align-items-center dashboard-main-row w-100">
                <h4>
                  <b>Chnage User Role</b>
                </h4>
                <div className=""></div>
              </div>
              <hr />
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-4 w-100">
                  <Select
                    color="primary"
                    placeholder="Choose one…"
                    size="lg"
                    variant="plain"
                    onChange={(e, newValue) => setUserRole(newValue)}
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                    className="select w-100"
                    // defaultValue={userRole}
                    // value={userRole}
                    // required={true}
                  >
                    <div className="options">
                      <Option className="option" value="client">
                        Rentee
                      </Option>
                      <Option className="option" value="admin">
                        Admin
                      </Option>
                    </div>
                  </Select>
                </div>
                <div className="w-100 text-center mt-2 submit-btn">
                  <Button
                    variant="contained"
                    type="submit"
                    className="dashboard-btn w-100"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Sheet>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Users;
