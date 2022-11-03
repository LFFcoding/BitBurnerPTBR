export async function main(ns) {
    var target = ns.args[0];
    var timer = ns.args[1];
    await ns.weaken(target);
    ns.print(timer);
    ns.kill("pureweaken.js", ns.getHostname(), target, timer);
}