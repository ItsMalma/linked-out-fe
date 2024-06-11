export type ApiResponse<D, E = unknown> =
  | {
      data: D;
      error: null;
    }
  | {
      data: null;
      error: E;
    };

export type ApiHookReturns<T> =
  | [null, true, null]
  | [null, false, unknown]
  | [T, false, null];
