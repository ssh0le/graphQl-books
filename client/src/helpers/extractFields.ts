export const extractFields = <T>(object: T, fields: (keyof T)[]) => {
  const result = {} as T;
  fields.forEach((field) => {
    result[field] = object[field];
  });
  return result;
};
