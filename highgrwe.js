export async function main(ns) {
    var target = ns.args[0];
    var timer = ns.args[1];
    var force = ns.args[2];
    var moneyThresh = ns.getServerMaxMoney(target) * 0.85;
    var securityThresh = ns.getServerMinSecurityLevel(target) + 1;
    while(true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            await ns.grow(target, {threads: force});
        }
    await ns.sleep(60000);
    await ns.sleep(timer);
    }
}