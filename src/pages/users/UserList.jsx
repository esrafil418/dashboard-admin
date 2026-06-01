import "./UserList.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { userRows } from "../../datas";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@mui/icons-material";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);

  const userDelete = (userID) => {
    setUserData(userData.filter((user) => user.id != userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/"} className="link">
              <div className="userListUser">
                <img
                  src={params.row.avatar}
                  alt={params.row.username}
                  className="userListImg"
                />
                {params.row.username}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "statue",
      headerName: "Statue",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "TransAction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${[params.row.id]}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlined
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
