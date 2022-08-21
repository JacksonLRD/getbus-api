class AppError {
  public message: string;

  public status: number;

  constructor(message: string, status = 500) {
    this.message = message;
    this.status = status;
  }

  // public static formatMessage(message: any) {
  //   return message?.map((i) => {
  //     return { message: i.message, path: i.path };
  //   });
  // }
}

export default AppError;
