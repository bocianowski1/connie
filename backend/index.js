const express = require("express")
const path = require("path");
const meldingerRoute = require("./api/meldinger.js");

const app = express();
const port = process.env.PORT || 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lar meldingerRoute håndtere alt under /api
app.use("/api", meldingerRoute)

// Server statiske filer
app.use("/", express.static(path.resolve(__dirname, "..", "build")));

// Server SPA
app.use("*", (_, res) =>
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"))
);

try {
  app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
