type ErrorMessageType = {
  [key: string]: string
}

export const ErrorMessage: ErrorMessageType = {
  "Invalid login credentials": "ログインに失敗しました",
  "Rate limit exceeded": "しばらく時間をおいて再度お試しください",
}

export const getErrorMessage = (error: string) => {
  return ErrorMessage[error] || error
}
