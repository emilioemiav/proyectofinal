import React from "react";
import {} from "./pedido.css";
import Pedidos from "../components/pedido";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Pedidos2 = () => {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tab label="Pedidos actuales" value="1" />
        <Tab label="Historial pedidos" value="2" />
        <Tab label="" value="3" />
        <Pedidos></Pedidos>;
      </Box>
    </Box>
  );
};
export default Pedidos2;
