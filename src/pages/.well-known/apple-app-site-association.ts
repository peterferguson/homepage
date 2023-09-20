// - comma separated list of app IDs
const APP_SUBDOMAINS = import.meta.env.APP_SUBDOMAINS ?? "";
const HOSTNAME = import.meta.env.PUBLIC_HOSTNAME;
if (!HOSTNAME) throw new Error("Missing HOSTNAME env var");

const BUNDLE_ID = HOSTNAME.replace("https://", "").replace("/", "").split(".").reverse().join(".");
const PERSONAL_ID = "3ZDVH7APQS";
const APP_ID = `${PERSONAL_ID}.${BUNDLE_ID}`;
const appIds = [APP_ID, ...APP_SUBDOMAINS.split(",").flatMap((subdomain) => [`${APP_ID}.${subdomain}`])];

const association = {
	applinks: {},
	webcredentials: { apps: appIds },
	appclips: {},
};

export const GET = () => ({ body: JSON.stringify(association) });
