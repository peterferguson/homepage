import type { APIRoute } from "astro";

// - comma separated list of app IDs
const APP_SUBDOMAINS = import.meta.env.APP_SUBDOMAINS ?? "";
const HOSTNAME = import.meta.env.PUBLIC_HOSTNAME;
const SERVICE_IDS = import.meta.env.SERVICE_IDS;
if (!HOSTNAME) throw new Error("Missing HOSTNAME env var");
if (!SERVICE_IDS) throw new Error("Missing SERVICE_IDS env var");

const BUNDLE_ID = HOSTNAME.replace("https://", "").replace("/", "").split(".").reverse().join(".");
const appIds = SERVICE_IDS.split(",")
	.map((id) => `${id}.${BUNDLE_ID}`)
	.flatMap((id) => APP_SUBDOMAINS.split(".").map((subdomain) => `${id}.${subdomain}`));

const association = {
	applinks: { details: [{ appIDs: appIds, components: [{ "/": "/*" }] }] },
	webcredentials: { apps: appIds },
	appclips: {},
};

export const GET: APIRoute = () =>
	new Response(JSON.stringify(association), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
