import { createHash } from "crypto";

function verifyJwt(signedJwt: string, secret: string): boolean {
  const [header, body, signature] = signedJwt.split(".");

  const expectedSignature = createHash("sha256")
    .update(`${header}.${body}`)
    .update(secret)
    .digest("base64url");

  return signature === expectedSignature;
}
