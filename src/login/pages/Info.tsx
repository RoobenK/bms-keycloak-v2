import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { StyledPrimaryLoginButton } from '../../styles/BasicStyles'
import Layout from 'login/components/common/Layout'

export default function Error(props: PageProps<Extract<KcContext, { pageId: 'info.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { msg, msgStr } = i18n


  const { messageHeader, message, requiredActions, skipLink, pageRedirectUri, actionUri, client } = kcContext

  return (
      <Layout
        i18n={i18n}
        title={messageHeader}
        subtitle={message.summary}
        formContentNode={
          <div className='mt-8 flex w-full gap-8'>
          {!skipLink && pageRedirectUri !== undefined ? (
            <StyledPrimaryLoginButton href={pageRedirectUri} fullWidth variant='contained' disableRipple>
              {/* @ts-ignore */}
              {msg('backToApplication')}
            </StyledPrimaryLoginButton>
          ) : actionUri !== undefined ? (
            <StyledPrimaryLoginButton href={actionUri} fullWidth variant='contained' disableRipple>
              {/* @ts-ignore */}
              {msg('proceedWithAction')}
            </StyledPrimaryLoginButton>
          ) : (
            client.baseUrl !== undefined && (
              <StyledPrimaryLoginButton href={client.baseUrl} fullWidth variant='contained' disableRipple>
                {/* @ts-ignore */}
                {msg('backToApplication')}
              </StyledPrimaryLoginButton>
            )
          )}
        </div>
        }
      />
  )
}
