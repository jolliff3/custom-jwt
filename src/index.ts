import { UnsignedJWTHeader, UnsignedJWTBody } from "./models";
import { signJwt } from "./signJwt";

const secret: string = require("../testSecret.json").secret;

const testHeader: UnsignedJWTHeader = {
  alg: "HS256",
  type: "JWT",
};

const testBody: UnsignedJWTBody = {
  iss: "",
  exp: 1,
  sub: "",
  name: "",
  mobileNumber: "",
};

signJwt(testHeader, testBody, secret);
