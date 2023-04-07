type ErrorMessageType = {
  [key: string]: string
}

export const ErrorMessage: ErrorMessageType = {
  "Invalid login credentials": "ログイン情報が間違っています",
}

export const getErrorMessage = (error: string) => {
  return ErrorMessage[error] || error
}
