export default function warning(
  condition: boolean,
  message: string,
  ...extra: any
) {
  if (process.env.NODE_ENV !== 'production' && console) {
    if (condition) {
      return console.error(
        `[pay-sdk-react]: ${message}`,
        extra ? { detail: extra } : undefined
      );
    }
  }
}
