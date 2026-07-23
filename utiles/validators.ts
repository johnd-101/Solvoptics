export function isRequired(
  value: string | undefined | null
): boolean {

  return (
    value !== undefined &&
    value !== null &&
    value.trim().length > 0
  );

}



export function isEmail(
  email: string
): boolean {

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  return emailRegex.test(email);

}



export function isMinLength(
  value: string,
  length: number
): boolean {

  return value.length >= length;

}



export function isValidPhone(
  phone: string
): boolean {

  const phoneRegex =
    /^[0-9+\-\s()]+$/;


  return phoneRegex.test(phone);

}



export function validateUser(
  data: {
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
  }
) {

  const errors: string[] = [];


  if (!isRequired(data.firstName)) {
    errors.push("First name is required");
  }


  if (!isRequired(data.lastName)) {
    errors.push("Last name is required");
  }


  if (!isEmail(data.email)) {
    errors.push("Valid email is required");
  }


  if (!isMinLength(data.passwordHash, 6)) {
    errors.push("Password must contain at least 6 characters");
  }


  return errors;

}