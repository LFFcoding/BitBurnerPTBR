export async function main(ns) {
	var serverslist = ["zb-institute", "aerocorp", "galactic-cyber", "deltaone", "omnia", "defcomm", "icarus", "zeus-med", "solaris", "infocomm", "taiyang-digital", "microdyne", "titan-labs", "stormtech", "fulcrumtech", "helios", "vitalife", "omnitek", "4sigma", "kuai-gong", "b-and-a", "powerhouse-fitness", "blade", "nwo", "clarkinc", "megacorp", "ecorp", "fulcrumassets", "The-Cave"];
	
	ns.tprint("servers " + serverslist);

	while (!ns.fileExists("BruteSSH.exe")) {
		await ns.sleep(20000)
	}
	while (!ns.fileExists("FTPCrack.exe")) {
		await ns.sleep(20000)
	}
	while (!ns.fileExists("relaySMTP.exe")) {
		await ns.sleep(20000)
	}
	while (!ns.fileExists("HTTPWorm.exe")) {
		await ns.sleep(20000)
	}
	while (!ns.fileExists("SQLInject.exe")) {
		await ns.sleep(20000)
	}
	await ns.sleep(1000)
	for (var i = 0; i < serverslist.length; ++i) {
		var server = serverslist[i];
		while (ns.getServerRequiredHackingLevel(server) > ns.getHackingLevel()) {
			await ns.sleep(60000);
		}
		ns.exec("highhack.js", "home", 1, server);
	}	
}