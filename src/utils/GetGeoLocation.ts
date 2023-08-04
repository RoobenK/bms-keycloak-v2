export const getGeoLocation = async () => {
  const { country } = await fetch('https://ipinfo.io/json?token=5c8b9135c33061').then((response) => response.json())

  return country
}
