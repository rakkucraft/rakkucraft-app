export type TreeifiedError = {
  errors?: string[];
  properties?: { [key: string]: TreeifiedError };
  items?: (TreeifiedError | undefined)[];
};
