export type UnsignedJWTHeader = {
  alg: string;
  type: string;
};

export type UnsignedJWTBody = {
  iss: string;
  exp: number;
  sub: string;
  name: string;
  mobileNumber: string;
};
