type ErrorMessageType = {
  [key: string]: string
}

export const ErrorMessage: ErrorMessageType = {
  "Invalid login credentials": "ログインに失敗しました",
}

export const getErrorMessage = (error: string) => {
  return ErrorMessage[error] || error
}
