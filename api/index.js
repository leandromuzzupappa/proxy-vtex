const moment = require("moment");
const express = require("express");
const app = express();
const cors = require("cors");

app.listen(3001, () => {
  console.log("Servidor levantado en el puerto 3001");
});

app.use(express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
  return res.send("lenny was here");
});

app.post("/algo", (req, res) => {
  let data = req.body;

  data.Contact.CustomFields = data.Contact.CustomFields.map(
    ({ Key, Value }) => {
      if (Key === "fecha_abandono") Value = moment(Value).format("DD-MM-YYYY");

      return {
        Key,
        Value,
      };
    }
  );

  res.send(data);
});
