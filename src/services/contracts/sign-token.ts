export interface SignToken {
  sign: (payload: object) => Promise<string>
}
