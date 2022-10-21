export async function main(ns) {
	var target = ns.args[0];
	var lvl = ns.getServerRequiredHackingLevel(target);
	
	await ns.sleep(1000);
	ns.brutessh(target);
	await ns.sleep(1000);
	ns.ftpcrack(target);
	await ns.sleep(1000);
	ns.relaysmtp(target);
	await ns.sleep(1000);
	ns.httpworm(target);
	await ns.sleep(1000);
	ns.sqlinject(target);
	await ns.sleep(1000);
	ns.nuke(target);
	

	ns.exec("hackingwithhome.js", "home", lvl, target, lvl);
	await ns.sleep(5000);
}