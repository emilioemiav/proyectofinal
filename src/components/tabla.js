import * as React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "imagen ",
    headerName: "Imagen",
    width: 80,
    renderCell: (params) => <Avatar src={params.row.imagen} />,
  },
  {
    field: "nombreProducto",
    headerName: "Producto",
    width: 150,
    editable: true,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    width: 280,
    editable: true,
  },
  {
    field: "categoria",
    headerName: "Categoria",
    width: 110,
    editable: true,
  },
  {
    field: "precio",
    headerName: "Precio",
    width: 80,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 240,
    valueGetter: (params) =>
      `${params.row.nombreProducto || ""} ${params.row.descripcion || ""}`,
  },
];

const rows = [
  {
    id: 1,
    imagen: "/burger2.jpg",
    nombreProducto: "Hamburguesa",
    descripcion: "Tomate lechuga huevo",
    categoria: "",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "90%", width: "100%" }}>
      <Typography>Tabla productos</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
