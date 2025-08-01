export class SharedIdService {
  private static id: number;

  static setId(value: number) {
    SharedIdService.id = value;
  }

  static getId(): number {
    return SharedIdService.id;
  }
}
