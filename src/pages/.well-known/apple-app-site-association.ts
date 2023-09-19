// - comma separated list of app IDs
const APP_SUBDOMAINS = import.meta.env.APP_SUBDOMAINS ?? ''
const HOST = import.meta.env.PUBLIC_HOST
if (!HOST) throw new Error('Missing HOST env var')

const BUNDLE_ID = HOST.replace('https://', '').replace('/', '').split('.').reverse().join('.')

const PERSONAL_ID = '3ZDVH7APQS'
const APP_ID = `${PERSONAL_ID}.${BUNDLE_ID}`

const appIds = APP_SUBDOMAINS.split(',').map((subdomain) => `${APP_ID}.${subdomain}`)

const association = {
	applinks: {},
	webcredentials: {
		apps: appIds,
	},
	appclips: {},
}

export const GET = () => ({ body: JSON.stringify(association) })