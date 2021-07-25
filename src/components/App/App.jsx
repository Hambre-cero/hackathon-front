import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import AuthProvivider from '../../providers/AuthProvivider'
import AppRouter from '../../routers/AppRouter'
import globalEn from '../../translations/en/global.json'
import globalEs from '../../translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <AuthProvivider>
        <AppRouter />
      </AuthProvivider>
    </I18nextProvider>
  )
}

export default App
