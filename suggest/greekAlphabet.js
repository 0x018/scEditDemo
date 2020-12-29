(function () {
	// var char = {
	// 	"Α": "Alpha", "α": "alpha", "Β": "Beta", "β": "beta", "Γ": "Gamma", "γ": "gamma",
	// 	"Δ": "Delta", "δ": "delta", "Ε": "Epsilon", "ε": "epsilon", "Ζ": "Zeta", "ζ": "zeta",
	// 	"Η": "Eta", "η": "eta", "Θ": "Theta", "θ": "theta", "Ι": "Iota", "ι": "iota",
	// 	"Κ": "Kappa", "κ": "kappa", "Λ": "Lambda", "λ": "lambda", "Μ": "Mu", "μ": "mu",
	// 	"Ν": "Nu", "ν": "nu", "Ξ": "Xi", "ξ": "xi", "Ο": "Omicron", "ο": "omicron",
	// 	"Π": "Pi", "π": "pi", "Ρ": "Rho", "ρ": "rho", "Σ": "Sigma", "σ": "sigma",
	// 	"Τ": "Tau", "τ": "tau", "Υ": "Upsilon", "υ": "upsilon", "Φ": "Phi", "φ": "phi",
	// 	"Χ": "Chi", "χ": "chi", "Ψ": "Psi", "ψ": "psi", "Ω": "Omega", "ω": "omega"
	// };
	// let v = Array.from(new Set(Object.values(char).map(v => v.toLowerCase())));
	// char = Object.entries(char).map(v => ({ key: v[1].toLowerCase(), char: v[0] }));
	// char = v.map(v1 => ({ key: v1, char: char.filter(c => c.key == v1).map(c => c.char) }))
	// JSON.stringify(char, null);
	let matchLen = 3;
	let charMap = [
		{ "key": "alpha", "char": ["Α", "α"] },
		{ "key": "阿尔法", "char": ["Α", "α"] },
		{ "key": "beta", "char": ["Β", "β"] },
		{ "key": "贝塔", "char": ["Β", "β"] },
		{ "key": "gamma", "char": ["Γ", "γ"] },
		{ "key": "伽玛", "char": ["Γ", "γ"] },
		{ "key": "delta", "char": ["Δ", "δ"] },
		{ "key": "得尔塔", "char": ["Δ", "δ"] },
		{ "key": "徳尔塔", "char": ["Δ", "δ"] },
		{ "key": "epsilon", "char": ["Ε", "ε,ϵ"] },
		{ "key": "艾普西隆", "char": ["Ε", "ε,ϵ"] },
		{ "key": "厄普西隆", "char": ["Ε", "ε,ϵ"] },
		{ "key": "zeta", "char": ["Ζ", "ζ"] },
		{ "key": "泽塔", "char": ["Ζ", "ζ"] },
		{ "key": "eta", "char": ["Η", "η"] },
		{ "key": "伊塔", "char": ["Η", "η"] },
		{ "key": "theta", "char": ["Θ", "θ"] },
		{ "key": "西塔", "char": ["Θ", "θ"] },
		{ "key": "iota", "char": ["Ι", "ι"] },
		{ "key": "约塔", "char": ["Ι", "ι"] },
		{ "key": "kappa", "char": ["Κ", "κ"] },
		{ "key": "卡帕", "char": ["Κ", "κ"] },
		{ "key": "lambda", "char": ["Λ", "λ"] },
		{ "key": "拉姆达", "char": ["Λ", "λ"] },
		{ "key": "mu", "char": ["Μ", "μ"] },
		{ "key": "谬", "char": ["Μ", "μ"] },
		{ "key": "nu", "char": ["Ν", "ν"] },
		{ "key": "纽", "char": ["Ν", "ν"] },
		{ "key": "xi", "char": ["Ξ", "ξ"] },
		{ "key": "克西", "char": ["Ξ", "ξ"] },
		{ "key": "omicron", "char": ["Ο", "ο"] },
		{ "key": "奥米克戎", "char": ["Ο", "ο"] },
		{ "key": "pi", "char": ["∏", "π"] },
		{ "key": "pai", "char": ["∏", "π"] },
		{ "key": "派", "char": ["∏", "π"] },
		{ "key": "rho", "char": ["Ρ", "ρ"] },
		{ "key": "柔", "char": ["Ρ", "ρ"] },
		{ "key": "sigma", "char": ["∑", "σ,ς"] },
		{ "key": "西格马", "char": ["∑", "σ,ς"] },
		{ "key": "tau", "char": ["Τ", "τ"] },
		{ "key": "陶", "char": ["Τ", "τ"] },
		{ "key": "upsilon", "char": ["Υ", "υ"] },
		{ "key": "阿普西龙", "char": ["Υ", "υ"] },
		{ "key": "阿普西隆", "char": ["Υ", "υ"] },
		{ "key": "phi", "char": ["Φ", "φ,ϕ"] },
		{ "key": "斐", "char": ["Φ", "φ,ϕ"] },
		{ "key": "chi", "char": ["Χ", "χ"] },
		{ "key": "恺", "char": ["Χ", "χ"] },
		{ "key": "psi", "char": ["Ψ", "ψ"] },
		{ "key": "普西", "char": ["Ψ", "ψ"] },
		{ "key": "omega", "char": ["Ω", "ω"] },
		{ "key": "奥米伽", "char": ["Ω", "ω"] },
		{ "key": "欧米伽", "char": ["Ω", "ω"] }].sort();
	let allKey = Object.fromEntries(charMap.map(v => [v.key.slice(0, 3), v.char]));
	console.log("greek allkey", allKey);
	function suggest(str) {
		let result = [];
		for (let i = 0; i < str.length; i++) {
			let s = str.slice(i);
			let match = allKey[s] || null;
			console.log("greek for", s, match);
			if (!!match) {
				let r = match.map(v => ({
					len: str.length - i,
					html: v,
					code: v,
					sort: str.length - i
				}))
				console.log("greek add r", r);
				result = result.concat(r);
			}
		}
		console.log("greek", result)
		return result;
	}

	window.autoinput.load(function () {
		this.addSuggest({
			key: 'greek',
			before: ["slice", [0, 3]],
			suggest: suggest,
		});
	});
})();