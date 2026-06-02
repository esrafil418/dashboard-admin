import "./Products.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { products } from "../../datas";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@mui/icons-material";

export default function UserList() {
  const [productData, setProductData] = useState(products);

  const productDelete = (productID) => {
    setProductData(productData.filter((product) => product.id != productID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <div className="userListUser">
                <img
                  src={params.row.avatar}
                  alt={params.row.username}
                  className="userListImg"
                />
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${[params.row.id]}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlined
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
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
          rows={productData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
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
