export async function main(ns) {
    var target = ns.args[0];
    var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(target) + 2;
    while(true) {
        if (ns.getServerSecurityLevel(target) < securityThresh) {
            if (ns.getServerMoneyAvailable(target) > moneyThresh) {
                await ns.hack(target);
            }
        }
        await ns.sleep(500);
    }
}