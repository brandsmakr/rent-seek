import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button, LinearProgress } from "@mui/material";
import { ContactService, StorageService } from "../../services";

const UserQueries = () => {
  const [userId, setUserId] = useState(StorageService.getCurrentUser()._id);
  const [contactQueries, setContactQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "sr_no", headerName: "Sr No.", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "message",
      headerName: "Message",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 300,
      editable: true,
    },
  ];

  const getAllUserQueries = () => {
    if (userId) {
      ContactService.getAllContactQuery(userId).then((res) => {
        // console.log( res.data);
        setContactQueries(res.data);
      });
    }
  };

  useEffect(() => {
    getAllUserQueries();
  }, []);

  const getAllRows = () => {
    if (contactQueries && contactQueries.length > 0) {
      const allRows = contactQueries.map((query, index) => {
        return {
          sr_no: index + 1,
          id: query._id,
          name: query.name,
          email: query.email,
          phone: query.cnic,
          message: query.otp,
        };
      });
      setRows(allRows);
    }
  };

  useEffect(() => {
    getAllRows();
  }, [contactQueries]);

  return (
    <>
      <section className="">
        <div className="w-100 box-container">
          <div className="flex justify-between align-items-center dashboard-main-row w-100">
            <h1>User Queries</h1>
            <div className="">
              {/* <Button variant="text" component="label" className="p-0">
              <Link to="/admin/add-category" className="dashboard-btn ">
                Add Category
                <i className="ion-ios-arrow-forward" />
              </Link>
              </Button> */}
            </div>
          </div>
          <hr />
          <div className="mt-2">
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                className="ft-2"
                rowsPerPageOptions={[5]}
                checkboxSelection
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

export default UserQueries;
