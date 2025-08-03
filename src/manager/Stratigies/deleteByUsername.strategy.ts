export interface DeleteByUsernameStrategy {
  deleteByUsername(uname: string): Promise<void>;
}
