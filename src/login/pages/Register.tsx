// ejected using 'npx eject-keycloak-page'
import { clsx } from 'keycloakify/tools/clsx'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { useState, FormEvent, useEffect, ChangeEvent, memo } from 'react'
import Layout from '../components/common/Layout'
import { useConstCallback } from 'powerhooks'
import { getStatus, WARNING } from '../../utils/status'
import { getGeoLocation } from '../../utils/GetGeoLocation'
import '../components/Register/RegisterForm.css'
import RegisterContext from '../components/Register/context/RegisterContext'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Alert, Box, Checkbox, FormControlLabel, IconButton, Typography } from '@mui/material'
import { SocialLoginButton } from 'login/components/common/SocialLoginButton'
import { StyledInputBase, StyledPrimaryLoginButton } from 'styles/BasicStyles'
import PasswordStrengthBar from 'react-password-strength-bar'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface IPhoneNumber {
  phoneNumber: string
}

export default function Register(props: PageProps<Extract<KcContext, { pageId: 'register.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { url, messagesPerField, register, realm, passwordRequired, recaptchaRequired, recaptchaSiteKey, social } =
    kcContext

  const { msg, msgStr } = i18n

  const [FormValues, setFormValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id === 'password-confirm' ? 'passwordConfirm' : e.target.id]: e.target.value,
    }))
  }

  const handleChangePhoneNumber = ({ phoneNumber }: IPhoneNumber) => {
    setFormValues((prev) => ({
      ...prev,
      phone: phoneNumber,
    }))
  }

  const [showPassword, setShowPassword] = useState(false)
  // const [isPhoneValid, setPhoneValid] = useState(false)
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = useConstCallback((event: FormEvent<HTMLFormElement>) => {
    setIsLoginButtonDisabled(true)

    const fullName = FormValues?.firstName + FormValues?.lastName

    $zoho.salesiq.visitor.email(FormValues?.email)
    $zoho.salesiq.visitor.name(fullName)
    $zoho.salesiq.visitor.contactnumber(FormValues?.phone)
    $zoho.salesiq.visitor.info({ Company: FormValues?.company, 'Lead Origin': 'BMSV3 - SIGNUP' })

    window.pagesense = window.pagesense || []
    window.pagesense.push(['trackEvent', 'user_signup'])

    return true
  })

  const [geoCoutry, setGeoCountry] = useState('')

  useEffect(() => {
    fetchGeoLocation()
  }, [])

  const fetchGeoLocation = async () => {
    const country = await getGeoLocation()
    setGeoCountry(country)
  }

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} headerNode={msg('registerTitle')}>
      <Layout
        i18n={i18n}
        title={msg('registerAccountSubTitle')}
        MessageNode={
          <>
            {!!kcContext.message && kcContext.message.type !== WARNING && !kcContext.isAppInitiatedAction && (
              <Box marginBottom={3}>
                <Alert severity={getStatus(kcContext.message.type)}>
                  {kcContext.message.summary.replace('<br>', ' ')}
                </Alert>
              </Box>
            )}
          </>
        }
        formContentNode={
          <>
            <form action={url.registrationAction} onSubmit={onSubmit} id='kc-form' method='post'>
              <div className='mt-4 mb-4 flex flex-col gap-8'>
                <div className='hidden'>
                  <StyledInputBase
                    id='user.attributes.trial_card_exemption'
                    name='user.attributes.trial_card_exemption'
                    defaultValue={true}
                    fullWidth
                    type='hidden'
                    margin='dense'
                  />
                </div>

                <div className='flex flex-col items-center gap-8 sm:flex-row'>
                  <div className='flex w-full flex-col'>
                    <label htmlFor='firstName' className='w-full text-lg text-label'>
                      {/* @ts-ignore */}
                      {msg('registerFirstName')}
                      <span className='text-geekBlue-6'>*</span>
                    </label>
                    <StyledInputBase
                      id='firstName'
                      name='firstName'
                      defaultValue={register.formData.firstName ?? ''}
                      onChange={onChange}
                      autoComplete='given-name'
                      fullWidth
                      margin='dense'
                      autoFocus
                      required
                      type='text'
                    />
                  </div>

                  <div className='flex w-full flex-col'>
                    <label htmlFor='lastName' className='w-full text-lg text-label'>
                      {/* @ts-ignore */}
                      {msg('registerLastName')}
                      <span className='text-geekBlue-6'>*</span>
                    </label>
                    <StyledInputBase
                      id='lastName'
                      name='lastName'
                      defaultValue={register.formData.lastName ?? ''}
                      onChange={onChange}
                      autoComplete='family-name'
                      fullWidth
                      margin='dense'
                      required
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center gap-8 md:flex-row'>
                  <div className='flex w-full flex-col'>
                    <label htmlFor='company' className='text-lg text-label'>
                      {/* @ts-ignore */}
                      {msg('registerCompany')}
                      <span className='text-geekBlue-6'>*</span>
                    </label>
                    <StyledInputBase
                      id='company'
                      name='user.attributes.company'
                      // @ts-ignore
                      defaultValue={register.formData['user.attributes.company'] ?? ''}
                      onChange={onChange}
                      autoComplete='company'
                      fullWidth
                      margin='dense'
                      required
                      type='text'
                    />
                  </div>
                  <div className='flex w-full flex-col'>
                    <label htmlFor='phoneNumber' className='text-lg text-label'>
                      {/* @ts-ignore */}
                      {msg('registerPhoneNumber')}
                      <span className='text-geekBlue-6'>*</span>
                    </label>
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
                      defaultValue={register.formData['user.attributes.phone'] ?? ''}
                    />
                  </div>
                </div>

                <div className='flex w-full flex-col'>
                  <label htmlFor='email' className='w-full text-lg text-label'>
                    {/* @ts-ignore */}
                    {msg('email')}
                    <span className='text-geekBlue-6'>*</span>
                  </label>
                  <StyledInputBase
                    id='email'
                    name='email'
                    defaultValue={FormValues?.email ?? ''}
                    onChange={onChange}
                    autoComplete='email'
                    fullWidth
                    margin='dense'
                    autoFocus
                    required
                    type='email'
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='password' className='text-lg text-label'>
                    {/* @ts-ignore */}
                    {msg('registerPassword')}
                    <span className='text-geekBlue-6'>*</span>
                  </label>
                  <div className='relative'>
                    <StyledInputBase
                      id='password'
                      name='password'
                      defaultValue={FormValues?.password ?? ''}
                      onChange={onChange}
                      fullWidth
                      margin='dense'
                      required
                      type={showPassword ? 'text' : 'password'}
                    />
                    <div className='hidden'>
                      <StyledInputBase
                        id='password-confirm'
                        name='password-confirm'
                        value={FormValues?.password}
                        fullWidth
                        margin='dense'
                        type='text'
                      />
                    </div>
                    <div className='absolute inset-y-0 right-0 mr-2 mt-1 flex items-center'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </div>
                  </div>
                  <PasswordStrengthBar
                    className='pass_strength mt-2'
                    scoreWordClassName='text-label mt-2'
                    password={FormValues?.password}
                    // @ts-ignore
                    scoreWords={[msg('tooShort'), msg('weak'), msg('okay'), msg('good'), msg('strong')]}
                    // @ts-ignore
                    shortScoreWord={msg('tooShort')}
                  />
                </div>
              </div>

              <div className='register_terms mt-8 mb-4'>
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      className='text-geekBlue-6'
                      inputProps={{ 'aria-label': 'controlled' }}
                      color='primary'
                    />
                  }
                  label={
                    <span className='font-poppins text-sm text-label'>
                      {/* @ts-ignore */}
                      {msg('registerTerms1')} &nbsp;
                      <a
                        target='_blank'
                        href='https://www.boostmyshop.com/legal/privacy-policy/'
                        className='text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'
                      >
                        {/* @ts-ignore */}
                        {msg('registerTerms2')}
                      </a>
                      {/* @ts-ignore */}
                      &nbsp; {msg('registerTerms3')} &nbsp;
                      <a
                        target='_blank'
                        href='https://www.boostmyshop.com/wp-content/uploads/2020/07/CGV-English.pdf'
                        className='text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'
                      >
                        {/* @ts-ignore */}
                        {msg('registerTerms4')} &nbsp;
                      </a>
                      {/* @ts-ignore */}
                      {msg('registerTerms5')}
                    </span>
                  }
                />
              </div>

              <StyledPrimaryLoginButton
                disabled={isLoginButtonDisabled}
                type='submit'
                fullWidth
                id='startnow'
                variant='contained'
                disableRipple
              >
                {/* @ts-ignore */}
                {msg('registerCreateAccount')}
              </StyledPrimaryLoginButton>

              {/* social logins */}
              <div className='flex flex-col gap-3'>
                {social?.providers && (
                  <>
                    {social.providers.map((provider) => (
                      <SocialLoginButton i18n={i18n} key={provider.providerId} provider={provider} />
                    ))}
                  </>
                )}
              </div>
            </form>

            <div className='mt-4 flex justify-center gap-2'>
              <Typography className='font-poppins text-label' mr={1}>
                {/* @ts-ignore */}
                {msg('alreadyHaveAccount')}
              </Typography>
              <a href={url.loginUrl} className='text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'>
                {msg('doLogIn')}
              </a>
            </div>
          </>
        }
      />
    </Template>
  )
}
