import React from 'react'
import {IntlProvider} from 'react-intl'


if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/uk');
    require('@formatjs/intl-pluralrules/locale-data/en');
}
if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/locale-data/uk');
    require('@formatjs/intl-relativetimeformat/locale-data/en');
}


class IntlProviderWrapper extends React.Component {
    render() {
        const {children, lang} = this.props;
        return (
            <IntlProvider
                key={lang.locale}
                locale={lang.locale}
                messages={lang.messages}
                defaultLocale="uk"
            >
                {children}
            </IntlProvider>
        );
    }
}

export default IntlProviderWrapper;
