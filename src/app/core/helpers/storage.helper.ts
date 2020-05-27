export default class StorageHelper {

  private static readonly TOKEN_KEY: string = 'CLD_TK';

  public static getToken(): string {
    return window.localStorage[this.TOKEN_KEY];
  }

  public static saveToken(token: string): void {
    window.localStorage[this.TOKEN_KEY] = token;
  }


  public static killSession(): void {
    window.localStorage.removeItem(this.TOKEN_KEY);
  }
}
