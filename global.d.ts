export {}

declare global {
  interface Window {
    pagesense
  }
  const $zoho // This is for zoho salesiq script that's included in home.tsx. They dont have a TS definition at the moment
}
