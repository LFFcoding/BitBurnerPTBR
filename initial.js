export async function main(ns) {
    //lista de todos os servidores (sem home, servidores sem RAM ou servidores de grupos de hacking).
	var serverslist = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "zer0", "max-hardware", "nectar-net", "neo-net", "silver-helix", "phantasy", "omega-net", "johnson-ortho", "crush-fitness", "computek", "netlink", "the-hub", "rothman-uni", "summit-uni", "syscore", "catalyst", "zb-institute", "alpha-ent", "rho-construction", "millenium-fitness", "lexo-corp", "aevum-police", "galactic-cyber", "aerocorp", "global-pharm", "snap-fitness", "unitalife", "omnia", "deltaone", "solaris", "zeus-med", "icarus", "univ-energy", "defcomm", "infocomm", "nova-med", "taiyang-digital", "zb-def", "applied-energetics", "titan-labs", "microdyne", "helios", "fulcrumtech", "stormtech", "vitalife", "4sigma", "kuai-gong", "omnitek", "blade", "nwo", "clarkinc", "b-and-a", "powerhouse-fitness", "ecorp", "fulcrumassets", "megacorp", "The-Cave"]
	// laço para realizar as verificações sempre.
    while (true) {
        //a cada servidor da lista, irá verificar qual o hackinglevel necessário, quantas portas são necessárias, calcular o número de threads, verificar se já está sendo executado e, caso não, irá executar o arquivo prot.js de acordo com os dados obtidos.
		for (var i = 0; i < serverslist.length; ++i) {
			var server = serverslist[i];
			if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(server)) {
				if (ns.getServerNumPortsRequired(server) == 0) {
					if (ns.getServerMaxRam(server) > 0) {
						ns.nuke(server);
						var tthreads = Math.floor(ns.getServerMaxRam(server) / 2.4);
						if (!ns.isRunning("prot.js", server, tthreads, server)) {
							ns.scp("prot.js", server, "home");
							ns.exec("prot.js", server, tthreads, server);
						}
					}
				}
				else if (ns.getServerNumPortsRequired(server) == 1) {
					if (ns.getServerMaxRam(server) > 0) {
						if (ns.fileExists("BruteSSH.exe")) {
							ns.brutessh(server);
							await ns.sleep(50);
							ns.nuke(server);
							await ns.sleep(50);
							var tthreads = Math.floor(ns.getServerMaxRam(server) / 2.4);
							if (!ns.isRunning("prot.js", server, tthreads, server)) {
								ns.scp("prot.js", server, "home");
								ns.exec("prot.js", server, tthreads, server);
							}
						}
					}
				}
				else if (ns.getServerNumPortsRequired(server) == 2) {
					if (ns.getServerMaxRam(server) > 0) {
						if (ns.fileExists("FTPCrack.exe")) {
							ns.brutessh(server);
							await ns.sleep(50);
							ns.ftpcrack(server);
							await ns.sleep(50);
							ns.nuke(server);
							await ns.sleep(50);
							var tthreads = Math.floor(ns.getServerMaxRam(server) / 2.4);
							if (!ns.isRunning("prot.js", server, tthreads, server)) {
								ns.scp("prot.js", server, "home");
								ns.exec("prot.js", server, tthreads, server);
							}
						}
					}
				}
				else if (ns.getServerNumPortsRequired(server) == 3) {
					if (ns.getServerMaxRam(server) > 0) {
						if (ns.fileExists("relaySMTP.exe")) {
							ns.brutessh(server);
							await ns.sleep(50);
							ns.ftpcrack(server);
							await ns.sleep(50);
							ns.relaysmtp(server);
							await ns.sleep(50);
							ns.nuke(server);
							await ns.sleep(50);
							var tthreads = Math.floor(ns.getServerMaxRam(server) / 2.4);
							if (!ns.isRunning("prot.js", server, tthreads, server)) {
								ns.scp("prot.js", server, "home");
								ns.exec("prot.js", server, tthreads, server);
							}
						}
					}
				}
				else if (ns.getServerNumPortsRequired(server) == 4) {
					if (ns.getServerMaxRam(server) > 0) {
						if (ns.fileExists("HTTPWorm.exe")) {
							ns.brutessh(server);
							await ns.sleep(50);
							ns.ftpcrack(server);
							await ns.sleep(50);
							ns.relaysmtp(server);
							await ns.sleep(50);
							ns.httpworm(server);
							await ns.sleep(50);
							ns.nuke(server);
							await ns.sleep(50);
							var tthreads = Math.floor(ns.getServerMaxRam(server) / 2.4);
							if (!ns.isRunning("prot.js", server, tthreads, server)) {
								ns.scp("prot.js", server, "home");
								ns.exec("prot.js", server, tthreads, server);
							}
						}
					}
				}
				else if (ns.getServerNumPortsRequired(server) == 5) {
					if (ns.getServerMaxRam(server) > 0) {
						if (ns.fileExists("SQLInject.exe")) {
							ns.brutessh(server);
							await ns.sleep(50);
							ns.ftpcrack(server);
							await ns.sleep(50);
							ns.relaysmtp(server);
							await ns.sleep(50);
							ns.httpworm(server);
							await ns.sleep(50);
							ns.sqlinject(server);
							await ns.sleep(50);
							ns.nuke(server);
							var tthreads = Math.floor(ns.getServerMaxRam(server) / 2.4);
							if (!ns.isRunning("prot.js", server, tthreads, server)) {
								ns.scp("prot.js", server, "home");
								ns.exec("prot.js", server, tthreads, server);
							}
						}
					}
				}
				else {
					await ns.sleep(50);
				}
			}
			else {
				await ns.sleep(50);
			}
			await ns.sleep(50);
		}
		await ns.sleep(50);
	}
}