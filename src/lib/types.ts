export type TreeifiedError = {
  errors?: string[];
  properties?: { [key: string]: TreeifiedError };
  items?: (TreeifiedError | undefined)[];
};

export type ActionResult<T = unknown> =
  | { isSuccess: true; data?: T; redirectTo?: string }
  | { isSuccess: false; treeifyError: TreeifiedError };
