import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      backgroundColor: "#f5f5f5",
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#00bcd4",
  },
}));
