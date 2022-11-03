export async function main(ns) {
    var target = ns.args[0];
    var timer = ns.args[1];
    await ns.grow(target);
    ns.print(timer);
    ns.kill("puregrow.js", ns.getHostname(), target, timer);
}