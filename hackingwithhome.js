export async function main(ns) {
	var target = ns.args[0];
	var forceth = ns.args[1];
	var moneyThresh = ns.getServerMaxMoney(target) * 0.90;
	var securityThresh = ns.getServerMinSecurityLevel(target) + 2;

	while(true) {
	    if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
			await ns.sleep(200);
	    }
		else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target, {threads: forceth * 0.3});
			await ns.sleep(200);
		}
		else {
			await ns.hack(target, {threads: forceth * 0.1});
			await ns.sleep(200);
		}
		await ns.sleep(200);
	}
}