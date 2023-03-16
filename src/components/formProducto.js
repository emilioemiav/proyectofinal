import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import "./formProducto.css";
import { useNavigate } from "react-router-dom";

const FormProducto = ({ producto, onSubmit }) => {
  const [nombre, setNombre] = useState(producto?.nombreProducto ?? "");
  const [descripcion, setDescripcion] = useState(producto?.descripcion ?? "");
  const [categoria, setCategoria] = useState(producto?.categoria ?? "");
  const [precio, setPrecio] = useState(producto?.precio ?? "");
  const [stock, setStock] = useState(producto?.stock ?? "");
  const navigate = useNavigate();
  const handleSubmit = () => {
    onSubmit({ nombre, descripcion, categoria, precio, stock });
  };
  const onUploadImage = () => alert("Cargar Imagen");

  return (
    <Grid>
      <div className="headform">
        <IconButton onClick={() => navigate("/tabla")}>
          <ArrowBackIcon />
        </IconButton>
        {producto ? <h1>Editar Producto </h1> : <h1>Agregar Producto </h1>}
      </div>
      <Grid
        sx={{
          border: 2,
          borderRadius: "8px",
          borderColor: "#e5e7eb",
        }}
      >
        <div className="camposprod">
          <div className="divAdd">
            <Box
              component="img"
              sx={{
                height: 164,
                width: 164,
                borderRadius: "100%",
                "&:hover": { background: "#D9F0FF" },
              }}
              src="addimage.jpg"
              onClick={onUploadImage}
              required
            />
            <h2>Add Image</h2>
          </div>
          <TextField
            onChange={(event) => setNombre(event.target.value)}
            value={nombre}
            required
            id="outlined-required"
            label="Nombre"
          />
          <TextField
            onChange={(event) => setDescripcion(event.target.value)}
            value={descripcion}
            required
            id="outlined-multiline-static"
            label="Descripcion"
            multiline
            rows={4}
          />
          <TextField
            onChange={(event) => setCategoria(event.target.value)}
            value={categoria}
            required
            id="outlined-required"
            label="Categoria"
          />
          <TextField
            onChange={(event) => setPrecio(event.target.value)}
            value={precio}
            required
            id="outlined-required"
            label="Precio"
          />
          <TextField
            onChange={(event) => setStock(event.target.value)}
            value={stock}
            required
            id="outlined-required"
            label="Stock"
          />
        </div>
      </Grid>
      <div className="divboton">
        <Button
          startIcon={<SaveIcon />}
          size="large"
          variant="contained"
          sx={(thema) => ({
            background: thema.palette.primary.light,
            "&:hover": { background: "#0094F1" },
          })}
          onClick={handleSubmit}
        >
          {producto ? "Editar" : "Agregar Producto"}
        </Button>
      </div>
    </Grid>
  );
};
export default FormProducto;
