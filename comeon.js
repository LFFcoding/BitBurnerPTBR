//script que abre todas as portas e executa os scripts de hacking nos servidores da array, de acordo com o hackinglevel necessário.

export async function main(ns) {

	var serverslist = ["joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "nectar-net", "zer0", "phantasy", "omega-net", "silver-helix", "neo-net", "crush-fitness", "the-hub", "computek", "johnson-ortho", "netlink", "zb-institute", "syscore", "summit-uni", "catalyst", "rothman-uni", "alpha-ent", "rho-construction", "lexo-corp", "aevum-police", "millenium-fitness", "aerocorp", "snap-fitness", "global-pharm", "galactic-cyber", "unitalife", "deltaone", "omnia", "defcomm", "zeus-med", "icarus", "univ-energy", "solaris", "infocomm", "nova-med", "taiyang-digital", "zb-def", "titan-labs", "microdyne", "applied-energetics", "fulcrumtech", "stormtech", "helios", "vitalife", "4sigma", "omnitek", "kuai-gong", ".", "b-and-a", "blade", "clarkinc", "powerhouse-fitness", "nwo", "fulcrumassets", "The-Cave", "ecorp", "megacorp"];

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
			await ns.sleep(20000);
		}
		await ns.sleep(1000)
		ns.exec("portsopener.js", "home", 1, server);
	}
}