import { createHash } from "crypto";

const secret: string = require("../testSecret.json").secret;

type UnsignedJWTHeader = {
  alg: string;
  type: string;
};
type UnsignedJWTBody = {
  iss: string;
  exp: number;
  sub: string;
  name: string;
  mobileNumber: string;
};

const generateRandomSecret = () => {
  return createHash("sha256").update(Math.random().toString()).digest("hex");
};

const signJwt = (
  header: UnsignedJWTHeader,
  body: UnsignedJWTBody,
  secret: any
) => {
  const headerString = JSON.stringify(header);
  const bodyString = JSON.stringify(body);

  // NOTE: The way base64url encoding works is exactly the same as base64 encoding other than two exceptions: the character - is used in base64url encoding instead of the character + in base64 encoding, and the character _ is used in base64url encoding instead of the character / in base64 encoding.
  const headerBase64 = Buffer.from(headerString).toString("base64url");
  const bodyBase64 = Buffer.from(bodyString).toString("base64url");

  const signature = createHash("sha256")
    .update(`${headerBase64}.${bodyBase64}`)
    .update(secret)
    .digest("base64url");

  return `${headerBase64}.${bodyBase64}.${signature}`;
};

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
