import React from "react";
import {} from "./pedido.css";
import Pedidos from "../components/pedido";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

const Pedidos2 = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Tab
            disablePadding
            sx={{
              backgroundColor:
                location.pathname === "/pedidos" ? "#1B3A4D" : undefined,
              color: "white",
            }}
            label="Pedidos actuales"
            value="1"
          />
          <Tab label="Historial pedidos" value="2" />
        </Stack>
        <Pedidos></Pedidos>;
      </Box>
    </Box>
  );
};
export default Pedidos2;
