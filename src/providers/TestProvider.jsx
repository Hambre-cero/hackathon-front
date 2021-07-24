import i18next from 'i18next'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import globalEn from '../translations/en/global.json'
import globalEs from '../translations/es/global.json'

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

const TestProvider = ({ children }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}

TestProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default TestProvider
