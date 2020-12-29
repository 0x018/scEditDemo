(function () {

	let element = Object.fromEntries([
		"H", "He",
		"Li", "Be", "B", "C", "N", "O", "F", "Ne",
		"Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
		"K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
		"Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
		"Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
		"Fr", "Ra", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og",
		"Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
		"Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr",
	].map(v => [v.toLowerCase(), v]));
	element['oh'] = "(OH)";

	// function upper(str) {
	// 	str.replace(/^[a-z]/, function (c) { return c.toUpperCase() })
	// }

	// function speculate(str) {
	// 	let len = str.length - 1;
	// 	for (let i = len; i > -1; i--) {
	// 		if ()
	// 	}
	// }
	function chemical(str) {
		console.log("chemical 1", str)
		str = (str.filter(v => v).pop() + "");
		console.log("chemical 2", str)
		if (!str) return;
		str = str.replace(/^\d+/, "");
		let len = str.length;
		str = str.split(/([a-z]+)(\d+)/i).filter(v => v)
		str = str.reverse();
		let result = str.map(v => {
			if (!v) return "";
			if (/\d+/.test(v)) {
				return `<sub>${v}</sub>`;
			}

			if (v.length == 1) return element[v];
			if (v.length == 2) {
				let r = [
					[v[0], v[1]],
					[v[0] + v[1]],
				].flatMap(s => (
					s.flatMap(s2 => element[s2] || []).join("")) || []
				);
				//.map(s => (console.log("len2", s), s));
				console.log("len2", r)
				return r;
			}
			if (v.length == 3) {
				return [
					[v[0], v[1], v[2]],
					[v[0] + v[1], v[2]],
					[v[0], v[1] + v[2]],
				].flatMap(s => (
					s.flatMap(s2 => element[s2] || []).join("")) || []
				);//.map(s => upper(s));
			}
			if (v.length == 4) {
				return [
					[v[0], v[1], v[2], v[3]],
					[v[0] + v[1], v[2], v[3]],
					[v[0], v[1] + v[2], v[3]],
					[v[0], v[1], v[2] + v[3]],
					[v[0] + v[1], v[2] + v[3]],
				].flatMap(s => (
					s.flatMap(s2 => element[s2] || []).join("")) || []
				);//.map(s => upper(s));
			}
			return "";
		}).filter(v => v);
		// console.log("suggest 1", result);
		// [
		// 	["SO"],
		// 	"<sub>2</sub>",
		// 	"H"
		// ]
		// let temp = [];
		console.log("result", result)
		result = result.reduce((r, c) => {
			// r,c string 或 string []
			let flag = [typeof r == "string", typeof c == "string"];
			if (flag[0] && flag[1]) {
				// temp.push(c + r);
				return c + r;
			}
			if (!flag[0] && flag[1]) {
				// temp.push(r.map(r1 => c + r1));
				return r.map(r1 => c + r1);
			}
			if (flag[0] && !flag[1]) return c.map(c1 => c1 + r);
			if (!flag[0] && !flag[1]) return r.flatMap(r1 => c.map(c1 => c1 + r1));
		}, "")
		console.log("suggest 2", result);
		// console.log("suggest 3", temp);
		if (typeof result == "string") result = [result];
		console.log("suggest 3", result.filter(v => v));
		return result.filter(v => v).map(v => ({
			len: len,
			html: v,
			code: v,
			sort: v.length
		}))
	}

	window.autoinput.load(function () {
		this.addSuggest({
			key: 'chemical',
			before: ["split", /[\W_qQ]/],
			suggest: chemical,
		});
	});

})()

