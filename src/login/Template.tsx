// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { assert } from 'keycloakify/tools/assert'
import { clsx } from 'keycloakify/tools/clsx'
import { usePrepareTemplate } from 'keycloakify/lib/usePrepareTemplate'
import { type TemplateProps } from 'keycloakify/login/TemplateProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from './kcContext'
import type { I18n } from './i18n'

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const {
    displayInfo = false,
    displayMessage = true,
    displayRequiredFields = false,
    displayWide = false,
    showAnotherWayIfPresent = true,
    headerNode,
    showUsernameNode = null,
    infoNode = null,
    kcContext,
    i18n,
    doUseDefaultCss,
    classes,
    children,
  } = props

  const { getClassName } = useGetClassName({ doUseDefaultCss, classes })

  const { msg, changeLocale, labelBySupportedLanguageTag, currentLanguageTag } = i18n

  const { realm, locale, auth, url, message, isAppInitiatedAction } = kcContext

  const { isReady } = usePrepareTemplate({
    doFetchDefaultThemeResources: doUseDefaultCss,
    url,
    stylesCommon: [],
    styles: [],
    htmlClassName: getClassName('kcHtmlClass'),
    bodyClassName: undefined,
  })

  if (!isReady) {
    return null
  }

  // {realm.internationalizationEnabled && (assert(locale !== undefined), true) && locale.supported.length > 1 && (
  //   <div id='kc-locale'>
  //     <div id='kc-locale-wrapper' className={getClassName('kcLocaleWrapperClass')}>
  //       <div className='kc-dropdown' id='kc-locale-dropdown'>
  //         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  //         <a href='#' id='kc-current-locale-link'>
  //           {labelBySupportedLanguageTag[currentLanguageTag]}
  //         </a>
  //         <ul>
  //           {locale.supported.map(({ languageTag }) => (
  //             <li key={languageTag} className='kc-dropdown-item'>
  //               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  //               <a href='#' onClick={() => changeLocale(languageTag)}>
  //                 {labelBySupportedLanguageTag[languageTag]}
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // )}

  return <div>{children}</div>
}
