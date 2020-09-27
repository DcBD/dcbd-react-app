import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

import { LOCALES } from "./locales"
import messages from './messages'

interface Props {
  children?: JSX.Element | string
  locale?: string  
}

const Provider = ({ children, locale = LOCALES.ENGLISH }: Props) => {
  
  return (
    <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
      {children}
    </IntlProvider>
  )
  
}

export default Provider;