const http = require("http");
const create_user = require("./routes/create_user");
const login = require("./routes/login")
const server = http.createServer(create_user);
const bp = require('body-parser')

create_user.use(bp.json())
create_user.use(bp.urlencoded({ extended: true }))

login.use(bp.json())
login.use(bp.urlencoded({ extended: true }))

require("dotenv").config();

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
