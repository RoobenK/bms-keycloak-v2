import { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { getGeoLocation } from '../../../utils/GetGeoLocation'

const PhoneNumber = ({ handleChangePhoneNumber, defaultValue }) => {
  const [geoCoutry, setGeoCountry] = useState('')

  useEffect(() => {
    fetchGeoLocation()
  }, [])

  const fetchGeoLocation = async () => {
    const country = await getGeoLocation()
    setGeoCountry(country)
  }

  return (
    <PhoneInput
      inputProps={{
        required: true,
        name: 'user.attributes.phone',
        id: 'phone',
      }}
      onChange={(value, country, e, formattedValue) => {
        const formattedPhone = `+${value}`
        handleChangePhoneNumber({ phoneNumber: formattedPhone })
      }}
      enableSearch
      disableSearchIcon
      preferredCountries={['fr', 'it', 'es', 'us', 'uk']}
      country={geoCoutry.toLowerCase() || 'fr'}
      // @ts-ignore
      defaultValue={defaultValue ?? ''}
    />
  )
}

export default PhoneNumber
