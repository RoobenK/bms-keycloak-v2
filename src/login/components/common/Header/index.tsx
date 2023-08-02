import { memo } from 'react'
// import { useKcLanguageTag, getKcContext, useKcMessage } from 'keycloakify'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import GlobeIcon from '../Icons/GlobeIcon'

interface IHeader {
  logoWhite?: boolean
  i18n?:any
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #E4E8EF',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 8,
      border: '2px solid #2F54EB',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))

const Header = memo(({ logoWhite = false, i18n }: IHeader) => {
//   const { kcContext } = getKcContext({})
//   const { msg } = useKcMessage()

//   const { kcLanguageTag, setKcLanguageTag } = useKcLanguageTag()
//   const url = kcContext?.url

  const enabledLanguage = [
    {
      languageShortForm: 'en',
      languageImageAlt: 'English',
    },
    {
      languageShortForm: 'fr',
      languageImageAlt: 'Français',
    },
    {
      languageShortForm: 'es',
      languageImageAlt: 'Español',
    },
    {
      languageShortForm: 'it',
      languageImageAlt: 'Italiano',
    },
  ]

const { msg , changeLocale, labelBySupportedLanguageTag, currentLanguageTag} = i18n


  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiSelect-icon': {
      color: logoWhite ? '#fff' : '',
    },
    '& .MuiInputBase-input': {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: logoWhite ? '#101433' : '#fff',
      color: logoWhite ? '#fff' : '',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 8,
        border: '2px solid #2F54EB',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))

  return (
    <div
      className={`flex flex-col items-center justify-between gap-4 md:flex-row ${
        !logoWhite ? 'md:justify-end' : 'md:justify-between'
      }`}
    >
      <a className={`${!logoWhite ? 'md:hidden' : ''}`}>
        <picture>
          <img
            src={`${
              logoWhite
                ? 'https://brand.boostmyshop.com/wp-content/uploads/logo-final-2021-BMS-1-1-1.svg'
                : 'https://www.boostmyshop.com/media/sso/boostmyshop-logo_fyxl4o.svg'
            }`}
            alt='logo of boostmyshop'
            width={160}
          />
        </picture>
      </a>

      <div className='flex items-center gap-4'>
        <div className={`flex items-center gap-2 ${logoWhite ? 'text-white' : 'text-grey-9'}`}>
          {/* @ts-ignore */}
          <span>{msg('language')}</span>
          {/* <GlobeIcon /> */}
        </div>

      
  

        
        <FormControl>
          <Select
            value={currentLanguageTag}
            input={<BootstrapInput />}
            label='Language'
            onChange={(e) => {
              // @ts-ignore
              changeLocale(e.target.value)
            }}
          >
            {enabledLanguage.map(({ languageShortForm, languageImageAlt }) => (
              <MenuItem key={languageShortForm} value={languageShortForm} className='my-1'>
                <span className='flex items-center gap-4 font-poppins'>
                  <img
                    className='w-8 overflow-hidden rounded-[4px]'
                    src={`https://www.boostmyshop.com/media/sso/${languageShortForm}.svg`}
                    alt={languageImageAlt}
                  />
                  {languageImageAlt}
                </span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
})

export default Header
