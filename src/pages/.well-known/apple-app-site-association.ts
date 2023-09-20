import type { APIRoute } from "astro";

// - comma separated list of app IDs
const APP_SUBDOMAINS = import.meta.env.APP_SUBDOMAINS ?? "";
const HOSTNAME = import.meta.env.PUBLIC_HOSTNAME;
if (!HOSTNAME) throw new Error("Missing HOSTNAME env var");

const BUNDLE_ID = HOSTNAME.replace("https://", "").replace("/", "").split(".").reverse().join(".");
// tODO: remove?
const ANOTHER_PERSONAL_ID = "Z8DK8K7PFH";
const PERSONAL_ID = "3ZDVH7APQS";
const TEAM_ID = "Y37LU57238";
const appIds = [PERSONAL_ID, TEAM_ID, ANOTHER_PERSONAL_ID]
	.map((id) => `${id}.${BUNDLE_ID}`)
	.flatMap((id) => [id, ...APP_SUBDOMAINS.split(".").map((subdomain) => `${id}.${subdomain}`)]);

const association = {
	applinks: {},
	webcredentials: { apps: appIds },
	appclips: {},
};

export const GET: APIRoute = () =>
	new Response(JSON.stringify(association), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
