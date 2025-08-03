export interface GetByNameStrategy {
  getServiceBySubstring(name: string): Promise<string[]>;
}
