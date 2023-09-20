// - comma separated list of app IDs
const APP_SUBDOMAINS = import.meta.env.APP_SUBDOMAINS ?? "";
const URL = import.meta.env.VERCEL_URL ?? "";
// const HOST = import.meta.env.PUBLIC_HOST
if (!URL) throw new Error("Missing URL env var");

const BUNDLE_ID = URL.replace("https://", "").replace("/", "").split(".").reverse().join(".");
const PERSONAL_ID = "3ZDVH7APQS";
const APP_ID = `${PERSONAL_ID}.${BUNDLE_ID}`;
const appIds = [APP_ID, ...APP_SUBDOMAINS.split(",").flatMap((subdomain) => [`${APP_ID}.${subdomain}`])];

const association = {
	applinks: {},
	webcredentials: { apps: appIds },
	appclips: {},
};

export const GET = () => ({ body: JSON.stringify(association) });
