import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./formProducto.css";
import { useNavigate } from "react-router-dom";

const FormProducto = ({ producto, onSubmit }) => {
  const [nombre, setNombre] = useState(producto?.nombreProducto ?? "");
  const [descripcion, setDescripcion] = useState(producto?.descripcion ?? "");
  const [categoria, setCategoria] = useState(producto?.categoria ?? "");
  const [precio, setPrecio] = useState(producto?.precio ?? "");
  const [stock, setStock] = useState(producto?.stock ?? "nop anda el culiao");
  const navigate = useNavigate();
  const handleSubmit = () => {
    onSubmit({ nombre, descripcion, categoria, precio, stock });
  };

  return (
    <Grid>
      <div className="headform">
        <IconButton onClick={() => navigate("/tabla")}>
          <ArrowBackIcon />
        </IconButton>
        <h1>Editar Producto </h1>
      </div>
      <div className="camposprod">
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
      <div>
        <Button
          variant="contained"
          sx={(thema) => ({
            background: thema.palette.primary.light,
            "&:hover": { background: "#0094F1" },
          })}
          onClick={handleSubmit}
        >
          {producto ? "Editar" : "Crear"}
        </Button>
      </div>
    </Grid>
  );
};
export default FormProducto;
