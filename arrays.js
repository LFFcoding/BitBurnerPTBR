//script para criar array com todos os servidores do jogo

export async function main(ns) {

    // executa um scan no servidor home
	var homess = ns.scan("home");
	for (var i = 0; i < homess.length; ++i) {
        //para cada string de nome de servidor, executa um novo scan, adiciona as strings na array e executa novos scans até se esgotar os servidores.
		var narray = homess[i];
		var parray = ns.scan(narray);
		for (var a = 0; a < parray.length; ++a) {
			var tarray = parray[a];		
			if (homess.includes(tarray) == false) {
				homess.push(tarray);
			}
			else {
				ns.tprint(homess);
				await ns.sleep(100);
			}					
		}
	}
}