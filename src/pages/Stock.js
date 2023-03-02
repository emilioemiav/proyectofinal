import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {} from "./stock.css";
import { useNavigate } from "react-router-dom";

export default function AlignItemsList() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <div className="head">
        <div>
          <h1>Lista de productos</h1>
          <Button
            variant="contained"
            sx={(thema) => ({
              background: thema.palette.primary.light,
              "&:hover": { background: "#0094F1" },
            })}
            onClick={() => navigate("/tabla")}
          >
            tabla
          </Button>
        </div>
        <div>
          <TextField
            label="Buscador"
            InputProps={{
              type: "search",
            }}
          />
        </div>
      </div>
      <div className="boton2">
        <Button
          variant="contained"
          sx={(thema) => ({
            background: thema.palette.primary.light,
            "&:hover": { background: "#0094F1" },
          })}
          onClick={() => navigate("/addproduct")}
        >
          Agregar Producto
        </Button>
      </div>
      <List sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="producto" src="/burger2.jpg" />
          </ListItemAvatar>
          <ListItemText
            sx={{ pl: 1 }}
            primary="Hamburguesa Especial"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Descripcion
                </Typography>
                {" — tomate lechuga queso huevo"}
              </React.Fragment>
            }
          />
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Container>
  );
}
