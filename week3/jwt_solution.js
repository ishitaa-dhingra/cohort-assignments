const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPassword = "secret"; // Replace with your actual secret key

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const userschema = zod.string().email();
const passwordschema = zod.string().min(6);

function signJwt(username, password) {
  const validateUsername = userschema.safeParse(username);
  const validatepassword = passwordschema.safeParse(password);

  if (!validateUsername.success || !validatepassword.success) {
    return null;
  }
  const token = jwt.sign({ username }, jwtPassword);

  return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    ans = false;
  }
  return ans;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {boolean} Returns true if the token can be decoded as a valid JWT.
 *                    Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  const decoded = jwt.decode(token);

  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
