export type Merge<A, B> = {
  [K in keyof (A | B)]: K extends keyof B ? B[K] : A[K];
};
