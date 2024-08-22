// custom plugin example
// plugins/i18n.js
export default {
    install: (app: any, options: any) => {
        // inject a globally available $translate() method
        app.provide('i18n', options)
        app.config.globalProperties.$translate = (key: any) => {
            // retrieve a nested property in `options`
            // using `key` as the path
            return key.split('.').reduce((o: any, i: any) => {
                if (o) return o[i]
            }, options)
        }
    }
}