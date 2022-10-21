export async function main(ns) {
	var target = ns.args[0];
	var nserv = "HSERV_" + target;

	while (ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(1048576)) {
		await ns.sleep(20000);
	}

	if (!ns.serverExists(nserv)) {
		ns.tprint("Buy server with 1024TB RAM");
		ns.purchaseServer(nserv, 1048576);
	}

	if (ns.serverExists(nserv)) {
		ns.tprint(nserv + " purchased with 1024TB RAM");
	}
	ns.tprint("starting highgrwe.js and hacking.js on " + target)
	await ns.scp("highgrwe.js", nserv, "home");
	await ns.scp("hacking.js", nserv, "home");

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
	await ns.sleep(1000);
	
	var lvl = ns.getServerRequiredHackingLevel(target);

	ns.exec("hacking.js", nserv, lvl, target);
	await ns.sleep(1000)
	ns.exec("highgrwe.js", nserv, 10000, target, 1001, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1002, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1003, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1004, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1005, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1006, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1007, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1008, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1009, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1010, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1011, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1012, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1013, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1014, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1015, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1016, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1017, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1018, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1019, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1020, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1021, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1022, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1023, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1024, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1025, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1026, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1027, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1028, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1029, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1030, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1031, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1032, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1033, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1034, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1035, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1036, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1037, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1038, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1039, lvl);
	await ns.sleep(60000);
	ns.exec("highgrwe.js", nserv, 10000, target, 1040, lvl);	
}