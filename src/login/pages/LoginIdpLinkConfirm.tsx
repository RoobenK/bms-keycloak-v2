// ejected using 'npx eject-keycloak-page'
import { useState, FormEvent, memo, ChangeEvent } from 'react'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { clsx } from 'keycloakify/tools/clsx'
import { useConstCallback } from 'keycloakify/tools/useConstCallback'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { getStatus, WARNING } from '../../utils/status'
import { Typography, Alert, FormControlLabel, Box, Link, Checkbox } from '@mui/material'
import { StyledInputBase, StyledPrimaryLoginButton } from '../../styles/BasicStyles'
import { SocialLoginButton } from '../components/common/SocialLoginButton'
import LoginLeftNode from "../components/Login/LoginLeftNode"
import Layout from 'login/components/common/Layout'

export default function LoginResetPassword(props: PageProps<Extract<KcContext, { pageId: 'login-idp-link-confirm.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { msg, msgStr } = i18n

  const { url,idpAlias } = kcContext


   return(
  <Template
  {...{ kcContext, i18n, doUseDefaultCss, classes }}
  headerNode={msg('emailForgotTitle')}
>
 <Layout
 i18n={i18n}
 title={<>{msg('confirmLinkIdpTitle')}</>}
 formContentNode={
   <div className='mt-4 flex flex-col gap-8  md:flex-row'>
     <a
       href={url.loginUrl}
       className='flex flex-col items-center gap-4 rounded-lg border border-grey-3 px-4 py-2 text-base shadow hover:border-grey-4 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2 active:bg-grey-2'
     >
       {msg('confirmLinkIdpContinue', idpAlias)}
     </a>
   </div>
 }
    />
</Template>)
}