import {
  Box,
  Button,
  FormControlLabel,
  Link,
  Paper,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  // ------------ MI ADAPACION --------------------
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { email, password } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setMensaje("Por favor complete todos los campos");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    } else if (email !== "" && password !== "") {
      const Admin = {
        email,
        password,
      };
      console.log(inputs);
      console.log(Admin);
      setLoading(true);
      await axios
        .post("http://localhost:3100/loginAdmin", Admin)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            localStorage.setItem("token", data?.user.token);
            navigate("/pedidos");
            console.log("se logeo!!");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Correo u contrasenia incorrecta");
          setTimeout(() => {
            setMensaje("");
          }, 3000);
        });
      setInputs({ email: "", password: "" });
      setLoading(false);
    }
  };
  // ------------ MI ADAPACION --------------------

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* <Paper
          sx={{
            elevation: 3,
            background: "#FCFCFC",
            width: "100%",
            height: "100%",
          }}
        /> */}
      <div className="div1">
        <h1>Login to your account</h1>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="inputslogin">
          <TextField
            onChange={(e) => HandleChange(e)}
            margin="normal"
            placeholder="Email"
            type="email"
            value={email}
            name="email"
            id="outlined-basic"
            label="Usuario"
            variant="outlined"
          />

          <TextField
            onChange={(e) => HandleChange(e)}
            placeholder="Password"
            name="password"
            value={password}
            id="outlined-basic"
            type="password"
            margin="normal"
            label="Password"
            autoComplete="current-password"
          />
        </div>

        <div className="div3">
          <FormControlLabel
            //checked={selectedValue === "a"}
            //onChange={handleChange}
            value="a"
            name="radio"
            control={<Radio />}
            inputProps={{ "aria-label": "A" }}
            label="Mantener conectado"
            labelPlacement="End"
          />
          <Link href="#" underline="hover" color="blue">
            {"Recuperar contraseña"}
          </Link>
        </div>
        <div className="div3buton">
          <Button
            type="submit"
            variant="contained"
            sx={(thema) => ({
              background: thema.palette.primary.light,
              "&:hover": { background: "#0094F1" },
              width: "100%",
            })}
          >
            Log in
          </Button>
        </div>
      </form>
    </Box>
  );
};
export default Login;
