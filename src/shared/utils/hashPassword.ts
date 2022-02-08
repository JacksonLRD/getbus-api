import { createHmac } from 'crypto';

const getHashPassword = (password: string): string => {
  const { CRYPTO_ALGORITHM, SECRET } = process.env;
  return createHmac(CRYPTO_ALGORITHM, SECRET).update(password).digest('hex');
};

export default getHashPassword;
