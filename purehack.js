export async function main(ns) {
    var target = ns.args[0];
    var timer = ns.args[1];
    await ns.hack(target);
    ns.print(timer);
    ns.kill("purehack.js", ns.getHostname(), target, timer);
}