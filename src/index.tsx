import { createRoot } from 'react-dom/client'
import { StrictMode, lazy, Suspense } from 'react'
import { kcContext as kcLoginThemeContext } from './login/kcContext'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const KcLoginThemeApp = lazy(() => import('./login/KcApp'))

const theme = createTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      {(() => {
        if (kcLoginThemeContext !== undefined) {
          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <KcLoginThemeApp kcContext={kcLoginThemeContext} />
            </ThemeProvider>
          )
        }

        throw new Error('This app is a Keycloak theme' + "It isn't meant to be deployed outside of Keycloak")
      })()}
    </Suspense>
  </StrictMode>,
)
