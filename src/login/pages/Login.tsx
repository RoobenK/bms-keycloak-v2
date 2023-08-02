// ejected using 'npx eject-keycloak-page'
import { useState, type FormEventHandler } from 'react'
import { clsx } from 'keycloakify/tools/clsx'
import { useConstCallback } from 'keycloakify/tools/useConstCallback'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Typography } from '@mui/material'

import LoginLeftNode from "../components/Login/LoginLeftNode"
import Layout from 'login/components/common/Layout'

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext

  const { msg, msgStr } = i18n

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

  const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault()

    setIsLoginButtonDisabled(true)

    const formElement = e.target as HTMLFormElement

    //NOTE: Even if we login with email Keycloak expect username and password in
    //the POST request.
    formElement.querySelector("input[name='email']")?.setAttribute('name', 'username')

    formElement.submit()
  })

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      displayInfo={social.displayInfo}
      displayWide={realm.password && social.providers !== undefined}
      headerNode={msg('doLogIn')}
    >
     <Layout i18n={i18n} title={<>{msg('loginAccountTitle')}</>}
        MessageNode={
          <>
            sd
          </>
        } LoginContent={<LoginLeftNode  i18n={i18n}/>}
        formContentNode={<>heloo form</>}
        layout='login'  tryAnotherWayNode={
          <div className='mt-8 flex flex-col items-center gap-2'>
            <Typography className='text-center font-poppins text-label' mr={1}>
              {/* @ts-ignore */}
              {msg('createAccount')}
            </Typography>
            <a
              href={url.registrationUrl}
              className='text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'
            >
              {/* @ts-ignore */}
              {msg('createNow')}
            </a>
          </div>
        }/>
    
    </Template>
  )
}
