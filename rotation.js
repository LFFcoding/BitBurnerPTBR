export async function main(ns) {
    var target = ns.args[0]
    while (true) {
        try {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
            }
            var timer = getRandomInt(1, 70);
            ns.exec("pureweaken.js", ns.getHostname(), 1000, target, timer);
            ns.exec("puregrow.js", ns.getHostname(), 1000, target, timer);
            ns.exec("purehack.js", ns.getHostname(), 1000, target, timer);
        } catch {
            ns.print("ok");
        }
        await ns.sleep(20);
    }
}