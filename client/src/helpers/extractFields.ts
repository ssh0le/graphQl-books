export const extractFields = <T, K extends keyof T>(object: T, fields: K[]) => {
  const result = {} as Pick<T, K>;
  fields.forEach((field) => {
    result[field] = object[field];
  });
  return result;
};
