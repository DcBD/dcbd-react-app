import React from 'react'
import { FormattedMessage } from 'react-intl'

export const translate = ({ id, value = {} }: { id: string, value?: any }) => <FormattedMessage id={id} values={value} />

