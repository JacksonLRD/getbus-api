import { createHmac } from "crypto";

export const getHashPassword = (password: string): string => {
  const { CRYPTO_ALGORITHM, SECRET } = process.env;
  return createHmac(CRYPTO_ALGORITHM, SECRET).update(password).digest("hex");
};
