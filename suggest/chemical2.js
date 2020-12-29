(function () {
	// /*
	let element = {
		"h":
			[{ "char": "H", "sort": 1, "len": 1 }, { "char": "H2", "sort": 64, "len": 1 }, { "char": "H22", "sort": 2, "len": 1 }, { "char": "H31", "sort": 2, "len": 1 }, { "char": "H33", "sort": 4, "len": 1 }, { "char": "H35", "sort": 4, "len": 1 }, { "char": "H4", "sort": 4, "len": 1 }, { "char": "H5", "sort": 7, "len": 1 }, { "char": "H8", "sort": 2, "len": 1 }, { "char": "H10", "sort": 2, "len": 1 }, { "char": "H12", "sort": 2, "len": 1 }, { "char": "(H2", "sort": 1, "len": 1 }, { "char": "H3", "sort": 2, "len": 1 }], "he": [{ "char": "He", "sort": 1, "len": 2 }], "li": [{ "char": "Li", "sort": 1, "len": 2 }], "be": [{ "char": "Be", "sort": 1, "len": 2 }], "b": [{ "char": "B", "sort": 1, "len": 1 }, { "char": "B4", "sort": 2, "len": 1 }], "c": [{ "char": "C", "sort": 1, "len": 1 }, { "char": "C12", "sort": 2, "len": 1 }, { "char": "C15", "sort": 2, "len": 1 }, { "char": "C17", "sort": 8, "len": 1 }, { "char": "C2", "sort": 13, "len": 1 }, { "char": "C3", "sort": 3, "len": 1 }, { "char": "C4", "sort": 2, "len": 1 }, { "char": "C60", "sort": 2, "len": 1 }, { "char": "C6", "sort": 6, "len": 1 }], "n": [{ "char": "N", "sort": 1, "len": 1 }, { "char": "N2", "sort": 12, "len": 1 }], "o": [{ "char": "O", "sort": 60, "len": 1 }, { "char": "O3", "sort": 22, "len": 1 }, { "char": "O2", "sort": 13, "len": 1 }, { "char": "O11", "sort": 2, "len": 1 }, { "char": "O6", "sort": 2, "len": 1 }, { "char": "O)2", "sort": 1, "len": 1 }, { "char": "O4", "sort": 11, "len": 1 }, { "char": "O7", "sort": 4, "len": 1 }, { "char": "O8", "sort": 2, "len": 1 }, { "char": "O5", "sort": 4, "len": 1 }], "f": [{ "char": "F", "sort": 1, "len": 1 }, { "char": "F2", "sort": 3, "len": 1 }, { "char": "F6", "sort": 1, "len": 1 }], "ne": [{ "char": "Ne", "sort": 1, "len": 2 }], "na": [{ "char": "Na", "sort": 8, "len": 2 }, { "char": "Na2", "sort": 22, "len": 2 }, { "char": "Na3", "sort": 2, "len": 2 }], "mg": [{ "char": "Mg", "sort": 10, "len": 2 }, { "char": "Mg2", "sort": 2, "len": 2 }], "al": [{ "char": "Al", "sort": 5, "len": 2 }, { "char": "Al2", "sort": 12, "len": 2 }], "si": [{ "char": "Si", "sort": 7, "len": 2 }, { "char": "(Si2", "sort": 2, "len": 2 }, { "char": "Si3", "sort": 1, "len": 2 }], "p": [{ "char": "P", "sort": 1, "len": 1 }, { "char": "P2", "sort": 2, "len": 1 }], "s": [{ "char": "S", "sort": 13, "len": 1 }, { "char": "S3", "sort": 4, "len": 1 }, { "char": "S4", "sort": 2, "len": 1 }, { "char": "S2", "sort": 8, "len": 1 }], "cl": [{ "char": "Cl", "sort": 8, "len": 2 }, { "char": "Cl3", "sort": 2, "len": 2 }, { "char": "Cl2", "sort": 11, "len": 2 }, { "char": "(Cl", "sort": 1, "len": 2 }], "ar": [{ "char": "Ar", "sort": 1, "len": 2 }], "k": [{ "char": "K", "sort": 1, "len": 1 }, { "char": "K2", "sort": 8, "len": 1 }], "ca": [{ "char": "Ca", "sort": 17, "len": 2 }, { "char": "Ca3", "sort": 4, "len": 2 }], "sc": [{ "char": "Sc", "sort": 1, "len": 2 }], "ti": [{ "char": "Ti", "sort": 2, "len": 2 }], "v": [{ "char": "V", "sort": 1, "len": 1 }], "cr": [{ "char": "Cr", "sort": 1, "len": 2 }, { "char": "Cr2", "sort": 2, "len": 2 }], "mn": [{ "char": "Mn", "sort": 5, "len": 2 }], "fe": [{ "char": "Fe", "sort": 20, "len": 2 }, { "char": "Fe2", "sort": 12, "len": 2 }, { "char": "Fe3", "sort": 2, "len": 2 }], "co": [{ "char": "Co", "sort": 1, "len": 2 }, { "char": "CO3", "sort": 29, "len": 2 }, { "char": "CO", "sort": 4, "len": 2 }, { "char": "CO2", "sort": 4, "len": 2 }, { "char": "(CO3)3", "sort": 2, "len": 2 }], "ni": [{ "char": "Ni", "sort": 1, "len": 2 }], "cu": [{ "char": "Cu", "sort": 14, "len": 2 }, { "char": "Cu2", "sort": 6, "len": 2 }], "zn": [{ "char": "Zn", "sort": 8, "len": 2 }], "ga": [{ "char": "Ga", "sort": 1, "len": 2 }], "ge": [{ "char": "Ge", "sort": 1, "len": 2 }], "as": [{ "char": "As", "sort": 1, "len": 2 }, { "char": "As2", "sort": 4, "len": 2 }, { "char": "As4", "sort": 2, "len": 2 }], "se": [{ "char": "Se", "sort": 1, "len": 2 }], "br": [{ "char": "Br", "sort": 1, "len": 2 }, { "char": "Br2", "sort": 2, "len": 2 }], "kr": [{ "char": "Kr", "sort": 1, "len": 2 }], "rb": [{ "char": "Rb", "sort": 1, "len": 2 }], "sr": [{ "char": "Sr", "sort": 1, "len": 2 }], "y": [{ "char": "Y", "sort": 1, "len": 1 }], "zr": [{ "char": "Zr", "sort": 1, "len": 2 }], "nb": [{ "char": "Nb", "sort": 1, "len": 2 }], "mo": [{ "char": "Mo", "sort": 1, "len": 2 }], "tc": [{ "char": "Tc", "sort": 1, "len": 2 }], "ru": [{ "char": "Ru", "sort": 1, "len": 2 }], "rh": [{ "char": "Rh", "sort": 1, "len": 2 }], "pd": [{ "char": "Pd", "sort": 1, "len": 2 }],
		"ag": [{ "char": "Ag", "sort": 6, "len": 2 }, { "char": "Ag2", "sort": 4, "len": 2 }], "cd": [{ "char": "Cd", "sort": 1, "len": 2 }], "in": [{ "char": "In", "sort": 1, "len": 2 }], "sn": [{ "char": "Sn", "sort": 2, "len": 2 }], "sb": [{ "char": "Sb", "sort": 1, "len": 2 }], "te": [{ "char": "Te", "sort": 1, "len": 2 }], "i": [{ "char": "I", "sort": 1, "len": 1 }], "xe": [{ "char": "Xe", "sort": 1, "len": 2 }], "cs": [{ "char": "Cs", "sort": 1, "len": 2 }], "ba": [{ "char": "Ba", "sort": 8, "len": 2 }], "la": [{ "char": "La", "sort": 1, "len": 2 }], "hf": [{ "char": "Hf", "sort": 1, "len": 2 }], "ta": [{ "char": "Ta", "sort": 1, "len": 2 }], "w": [{ "char": "W", "sort": 1, "len": 1 }], "re": [{ "char": "Re", "sort": 1, "len": 2 }], "os": [{ "char": "Os", "sort": 1, "len": 2 }], "ir": [{ "char": "Ir", "sort": 1, "len": 2 }], "pt": [{ "char": "Pt", "sort": 1, "len": 2 }], "au": [{ "char": "Au", "sort": 1, "len": 2 }], "hg": [{ "char": "Hg", "sort": 5, "len": 2 }], "tl": [{ "char": "Tl", "sort": 1, "len": 2 }], "pb": [{ "char": "Pb", "sort": 1, "len": 2 }, { "char": "Pb3", "sort": 2, "len": 2 }], "bi": [{ "char": "Bi", "sort": 1, "len": 2 }], "po": [{ "char": "Po", "sort": 1, "len": 2 }, { "char": "PO4)2", "sort": 2, "len": 2 }, { "char": "(PO4)2", "sort": 4, "len": 2 }, { "char": "PO4", "sort": 2, "len": 2 }], "at": [{ "char": "At", "sort": 1, "len": 2 }], "rn": [{ "char": "Rn", "sort": 1, "len": 2 }], "fr": [{ "char": "Fr", "sort": 1, "len": 2 }], "ra": [{ "char": "Ra", "sort": 1, "len": 2 }], "ac": [{ "char": "Ac", "sort": 1, "len": 2 }], "rf": [{ "char": "Rf", "sort": 1, "len": 2 }], "db": [{ "char": "Db", "sort": 1, "len": 2 }], "sg": [{ "char": "Sg", "sort": 1, "len": 2 }], "bh": [{ "char": "Bh", "sort": 1, "len": 2 }], "hs": [{ "char": "Hs", "sort": 1, "len": 2 }], "mt": [{ "char": "Mt", "sort": 1, "len": 2 }], "ds": [{ "char": "Ds", "sort": 1, "len": 2 }], "rg": [{ "char": "Rg", "sort": 1, "len": 2 }], "cn": [{ "char": "Cn", "sort": 1, "len": 2 }], "nh": [{ "char": "Nh", "sort": 1, "len": 2 }, { "char": "(NH4)2", "sort": 4, "len": 2 }, { "char": "(NH3)2", "sort": 1, "len": 2 }, { "char": "NH3", "sort": 4, "len": 2 }, { "char": "NH4", "sort": 8, "len": 2 }], "fl": [{ "char": "Fl", "sort": 1, "len": 2 }], "mc": [{ "char": "Mc", "sort": 1, "len": 2 }], "lv": [{ "char": "Lv", "sort": 1, "len": 2 }], "ts": [{ "char": "Ts", "sort": 1, "len": 2 }], "og": [{ "char": "Og", "sort": 1, "len": 2 }], "ce": [{ "char": "Ce", "sort": 1, "len": 2 }], "pr": [{ "char": "Pr", "sort": 1, "len": 2 }], "nd": [{ "char": "Nd", "sort": 1, "len": 2 }], "pm": [{ "char": "Pm", "sort": 1, "len": 2 }], "sm": [{ "char": "Sm", "sort": 1, "len": 2 }], "eu": [{ "char": "Eu", "sort": 1, "len": 2 }], "gd": [{ "char": "Gd", "sort": 1, "len": 2 }], "tb": [{ "char": "Tb", "sort": 1, "len": 2 }], "dy": [{ "char": "Dy", "sort": 1, "len": 2 }], "ho": [{ "char": "Ho", "sort": 1, "len": 2 }], "er": [{ "char": "Er", "sort": 1, "len": 2 }], "tm": [{ "char": "Tm", "sort": 1, "len": 2 }], "yb": [{ "char": "Yb", "sort": 1, "len": 2 }], "lu": [{ "char": "Lu", "sort": 1, "len": 2 }], "th": [{ "char": "Th", "sort": 1, "len": 2 }], "pa": [{ "char": "Pa", "sort": 1, "len": 2 }], "u": [{ "char": "U", "sort": 1, "len": 1 }], "np": [{ "char": "Np", "sort": 1, "len": 2 }], "pu": [{ "char": "Pu", "sort": 1, "len": 2 }], "am": [{ "char": "Am", "sort": 1, "len": 2 }], "cm": [{ "char": "Cm", "sort": 1, "len": 2 }], "bk": [{ "char": "Bk", "sort": 1, "len": 2 }], "cf": [{ "char": "Cf", "sort": 1, "len": 2 }], "es": [{ "char": "Es", "sort": 1, "len": 2 }], "fm": [{ "char": "Fm", "sort": 1, "len": 2 }], "md": [{ "char": "Md", "sort": 1, "len": 2 }], "no": [{ "char": "No", "sort": 1, "len": 2 }, { "char": "NO3", "sort": 4, "len": 2 }, { "char": "(NO3)2", "sort": 5, "len": 2 }, { "char": "(NO3)3", "sort": 1, "len": 2 }, { "char": "NO", "sort": 4, "len": 2 }, { "char": "NO2", "sort": 4, "len": 2 }], "lr": [{ "char": "Lr", "sort": 1, "len": 2 }], "so": [{ "char": "SO4", "sort": 28, "len": 2 }, { "char": "(SO4)3", "sort": 4, "len": 2 }, { "char": "SO3", "sort": 5, "len": 2 }, { "char": "(SO4)2", "sort": 1, "len": 2 }, { "char": "SO2", "sort": 4, "len": 2 }], "feso": [{ "char": "FeSO4", "sort": 3, "len": 4 }, { "char": "FeSO3", "sort": 1, "len": 4 }], "caso": [{ "char": "CaSO4", "sort": 3, "len": 4 }], "mgo": [{ "char": "MgO", "sort": 3, "len": 3 }], "sio": [{ "char": "SiO2", "sort": 4, "len": 3 }, { "char": "SiO4", "sort": 1, "len": 3 }, { "char": "SiO3", "sort": 1, "len": 3 }], "oh": [{ "char": "OH", "sort": 17, "len": 2 }, { "char": "(OH)3", "sort": 6, "len": 2 }, { "char": "(OH)2", "sort": 12, "len": 2 }], "agnh": [{ "char": "Ag(NH3)2", "sort": 1, "len": 4 }], "agcl": [{ "char": "AgCl", "sort": 2, "len": 4 }], "agno": [{ "char": "AgNO3", "sort": 1, "len": 4 }], "agso": [{ "char": "AgSO4", "sort": 1, "len": 4 }], "aloh": [{ "char": "Al(OH)3", "sort": 2, "len": 4 }], "ooh": [{ "char": "O5)(OH)4", "sort": 2, "len": 3 }], "alcl": [{ "char": "AlCl3", "sort": 1, "len": 4 }], "bano": [{ "char": "Ba(NO3)2", "sort": 1, "len": 4 }], "baoh": [{ "char": "Ba(OH)2", "sort": 1, "len": 4 }], "baco": [{ "char": "BaCO3", "sort": 2, "len": 4 }], "bacl": [{ "char": "BaCl2", "sort": 1, "len": 4 }], "baso": [{ "char": "BaSO4", "sort": 2, "len": 4 }], "cooh": [{ "char": "COOH", "sort": 14, "len": 4 }], "coona": [{ "char": "COONa", "sort": 2, "len": 5 }], "hoh": [{ "char": "H5(OH)3", "sort": 1, "len": 3 }], "ccl": [{ "char": "CCl4", "sort": 2, "len": 3 }],
		"ch": [{ "char": "CH2", "sort": 6, "len": 2 }, { "char": "CH3", "sort": 10, "len": 2 }, { "char": "CH4", "sort": 4, "len": 2 }],
		"choh": [{ "char": "(CHOH)3", "sort": 2, "len": 4 }, { "char": "CHOH", "sort": 4, "len": 4 }], "cho": [{ "char": "CHO", "sort": 2, "len": 3 }], "chcl": [{ "char": "CHCl3", "sort": 2, "len": 4 }], "conh": [{ "char": "CO(NH2)", "sort": 2, "len": 4 }, { "char": "CO(NH2)2", "sort": 2, "len": 4 }], "caclo": [{ "char": "Ca(ClO)2", "sort": 1, "len": 5 }], "cah": [{ "char": "Ca(H2", "sort": 1, "len": 3 }], "cano": [{ "char": "Ca(NO3)2", "sort": 1, "len": 4 }], "caoh": [{ "char": "Ca(OH)2", "sort": 1, "len": 4 }], "cac": [{ "char": "CaC2", "sort": 1, "len": 3 }], "caco": [{ "char": "CaCO3", "sort": 3, "len": 4 }], "cacl": [{ "char": "CaCl2", "sort": 2, "len": 4 }], "caf": [{ "char": "CaF2", "sort": 1, "len": 3 }], "cao": [{ "char": "CaO", "sort": 2, "len": 3 }], "cuno": [{ "char": "Cu(NO3)2", "sort": 1, "len": 4 }], "cuoh": [{ "char": "Cu(OH)2", "sort": 3, "len": 4 }], "cuco": [{ "char": "CuCO3", "sort": 3, "len": 4 }], "cucl": [{ "char": "CuCl2", "sort": 1, "len": 4 }], "cufes": [{ "char": "CuFeS2", "sort": 1, "len": 5 }], "cuo": [{ "char": "CuO", "sort": 1, "len": 3 }], "cuso": [{ "char": "CuSO4", "sort": 2, "len": 4 }], "feno": [{ "char": "Fe(NO3)2", "sort": 1, "len": 4 }, { "char": "Fe(NO3)3", "sort": 1, "len": 4 }], "feoh": [{ "char": "Fe(OH)2", "sort": 2, "len": 4 }, { "char": "Fe(OH)3", "sort": 2, "len": 4 }], "fec": [{ "char": "FeC3", "sort": 1, "len": 3 }], "feco": [{ "char": "FeCO3", "sort": 1, "len": 4 }], "fecl": [{ "char": "FeCl2", "sort": 1, "len": 4 }, { "char": "FeCl3", "sort": 1, "len": 4 }], "feo": [{ "char": "FeO", "sort": 1, "len": 3 }], "fes": [{ "char": "FeS", "sort": 2, "len": 3 }, { "char": "FeS2", "sort": 1, "len": 3 }], "hcho": [{ "char": "HCHO", "sort": 4, "len": 4 }], "hcooh": [{ "char": "HCOOH", "sort": 2, "len": 5 }], "hcl": [{ "char": "HCl", "sort": 4, "len": 3 }], "hno": [{ "char": "HNO3", "sort": 2, "len": 3 }], "hooc": [{ "char": "HOOC", "sort": 2, "len": 4 }], "hgno": [{ "char": "Hg(NO3)2", "sort": 1, "len": 4 }], "hgcl": [{ "char": "HgCl2", "sort": 1, "len": 4 }], "hgo": [{ "char": "HgO", "sort": 1, "len": 3 }], "hgs": [{ "char": "HgS", "sort": 1, "len": 3 }], "mno": [{ "char": "MnO4", "sort": 1, "len": 3 }, { "char": "MnO2", "sort": 1, "len": 3 }], "kal": [{ "char": "KAl", "sort": 2, "len": 3 }], "kalso": [{ "char": "KAl(SO4)2", "sort": 1, "len": 5 }], "kalsi": [{ "char": "KAlSi3", "sort": 1, "len": 5 }], "kcl": [{ "char": "KCl", "sort": 5, "len": 3 }], "kclo": [{ "char": "KClO3", "sort": 1, "len": 4 }], "mgcl": [{ "char": "MgCl2", "sort": 2, "len": 4 }], "kmn": [{ "char": "KMn", "sort": 1, "len": 3 }], "kmno": [{ "char": "KMnO4", "sort": 1, "len": 4 }], "kno": [{ "char": "KNO3", "sort": 2, "len": 3 }], "koh": [{ "char": "KOH", "sort": 2, "len": 3 }], "mgoh": [{ "char": "Mg(OH)2", "sort": 2, "len": 4 }], "mgco": [{ "char": "MgCO3", "sort": 1, "len": 4 }], "mgso": [{ "char": "MgSO4", "sort": 1, "len": 4 }], "cno": [{ "char": "CNO", "sort": 2, "len": 3 }], "hco": [{ "char": "HCO3", "sort": 3, "len": 3 }], "alf": [{ "char": "AlF6", "sort": 1, "len": 3 }], "nacl": [{ "char": "NaCl", "sort": 1, "len": 4 }], "nahco": [{ "char": "NaHCO3", "sort": 1, "len": 5 }], "hso": [{ "char": "HSO3", "sort": 1, "len": 3 }, { "char": "HSO4", "sort": 1, "len": 3 }], "nahso": [{ "char": "NaHSO3", "sort": 1, "len": 5 }, { "char": "NaHSO4", "sort": 1, "len": 5 }], "nano": [{ "char": "NaNO3", "sort": 1, "len": 4 }], "naoh": [{ "char": "NaOH", "sort": 1, "len": 4 }], "naso": [{ "char": "NaSO4", "sort": 1, "len": 4 }], "ph": [{ "char": "PH3", "sort": 2, "len": 2 }], "sno": [{ "char": "SnO2", "sort": 1, "len": 3 }], "tio": [{ "char": "TiO2", "sort": 1, "len": 3 }], "wo": [{ "char": "WO3", "sort": 2, "len": 2 }], "ze": [{ "char": "Ze", "sort": 1, "len": 2 }], "zeso": [{ "char": "ZeSO4", "sort": 1, "len": 4 }], "znco": [{ "char": "ZnCO3", "sort": 2, "len": 4 }], "zncl": [{ "char": "ZnCl2", "sort": 1, "len": 4 }], "zno": [{ "char": "ZnO", "sort": 1, "len": 3 }], "znso": [{ "char": "ZnSO4", "sort": 2, "len": 4 }], "hbr": [{ "char": "HBr", "sort": 2, "len": 3 }], "cus": [{ "char": "CuS", "sort": 1, "len": 3 }], "mnoh": [{ "char": "Mn(OH)2", "sort": 1, "len": 4 }], "mnco": [{ "char": "MnCO3", "sort": 1, "len": 4 }], "znoh": [{ "char": "Zn(OH)3", "sort": 1, "len": 4 }]
	};
	/*/
	// ****/

	//  "↑"  // font-family: 宋体;
	var gas = [
		"Br2", "C2H2", "C2H4", "CH3", "CH3Cl",
		"CH4", "CO", "CO2", "Cl2", "F2", "H2",
		"H2S", "HBr", "HCHO", "HCl", "N2", "NH3",
		"NO", "NO2", "O2", "SO2"
	];
	// "↓"  // font-family: 宋体;
	var sediment = [
		"Ag2CO3", "AgCl", "Al(OH)3", "BaCO3", "BaSO4",
		"Ca3(PO4)2", "CaCO3", "Cu(OH)2", "CuCO3", "CuS",
		"Fe(OH)2", "Fe(OH)3", "FeS", "Mg(OH)2", "Mn(OH)2",
		"MnCO3", "Zn(OH)3", "ZnCO3"
	]

	function symbol(str) {
		if (/(=)$/.test(str)) {
			return [
				//  Chemical reaction conditions

				// 反应条件
				// 加热（300~600摄氏度）；
				// 高温（600~1000摄氏度）；
				// 加压（如合成氨的反应），
				// 催化剂（有机化学中常见）；
				// 点燃（；
				// 放电（如生成臭氧的反应）；
				// 紫外线（大气层中氟利昂与臭氧的反应）；
				// 光照（次氯酸见光分解）；
				// 震荡（不常见，一些络合物反应，如银氨溶液，震荡后剧烈分解爆炸）；
				// 超声波（有机化学中的物质合成）；
				// 通电（电解水）
				{ len: 1, sort: 1, html: "条件:无", code: "<span class='condition' data=' '></span>" },
				{ len: 1, sort: 1, html: "条件:加热", code: "<span class='condition' data='△'></span>" },
				{ len: 1, sort: 1, html: "条件:高温", code: "<span class='condition' data='高温'></span>" },
				{ len: 1, sort: 1, html: "条件:加压", code: "<span class='condition' data='加压'></span>" },
				{ len: 1, sort: 1, html: "条件:催化剂", code: "<span class='condition' data='催化剂'></span>" },
				{ len: 1, sort: 1, html: "条件:点燃", code: "<span class='condition' data='点燃'></span>" },
				{ len: 1, sort: 1, html: "条件:放电", code: "<span class='condition' data='放电'></span>" },
				{ len: 1, sort: 1, html: "条件:紫外线", code: "<span class='condition' data='紫外线'></span>" },
				{ len: 1, sort: 1, html: "条件:光照", code: "<span class='condition' data='光照'></span>" },
				{ len: 1, sort: 1, html: "条件:震荡", code: "<span class='condition' data='震荡'></span>" },
				{ len: 1, sort: 1, html: "条件:超声波", code: "<span class='condition' data='超声波'></span>" },
				{ len: 1, sort: 1, html: "条件:通电", code: "<span class='condition' data='通电'></span>" },
			]
		}
		return null;
	}

	function suggest(str) {
		str = str.trim();
		return symbol(str) || chemical(str);
		// if (r) return r;
	}
	function getMatch(str) {
		let m = str.split(/[\d\W\_\-\.]/);
		let i = 0;
		return m.map(s => {
			let index = str.indexOf(s, i);
			i = index;
			return { char: s, index: index }
		})
	}


	function chemical(str) {

		str = str.split(/[+\s\,;]/).pop().trim();
		// let result = [];
		let match = getMatch(str);
		let result = match.map(v => {
			let r = element[v.char];
			console.log("result match", v, r)
			if (r) {

				return r.map(r1 => {
					let code = r1.char.replace(/(\d+)/g, "<sub>$1</sub>");
					return {
						index: v.index,
						end: v.index + v.char.length,
						code: code,
						sort: r1.sort || 0
					}
				})
			} else {
				return [];
				// [
				// 	{
				// 		index: v.index,
				// 		end: v.index,
				// 		code: "无",
				// 		sort: 1,
				// 	}
				// ]
			}

		});
		let raw = str + ''
		str = str.replaceAll('.', "·");
		let len = str.length;
		// console.log("result 1", result);
		result = result.filter(r => r.length > 0).reverse().reduce((a, b) => {
			// r,c string 或 string []
			return a.flatMap(a1 => b.map(b1 => {

				// a1 + b1
				return {
					code: a1.code.slice(0, b1.index) + b1.code + a1.code.slice(b1.end),
					sort: a1.sort + b1.sort
				}
			}));
		}, [{ code: str + "", sort: 0 }]);
		// console.log("result 2", result);

		result = result.flatMap(r => {
			let code = r.code.replace(/\<sub\>(\d+)\<\/sub\>(\d+)/g, "<sub>$1</sub>");
			if (code) {
				let char = code.replaceAll("<sub>", "").replaceAll("</sub>", "");
				if (gas.indexOf(char) > -1) return [
					{ code: code + "↑", html: code + "↑", len: len, sort: r.sort },
					{ code: code, html: code, len: len, sort: r.sort }
				]
				if (sediment.indexOf(char) > -1) return [
					{ code: code + "↓", html: code + "↓", len: len, sort: r.sort },
					{ code: code, html: code, len: len, sort: r.sort }
				]
				return { code: code, html: code, len: len, sort: r.sort };
			}
			return [];
		})
		// console.log("result 3", result);


		return result.filter(v => v.code !== raw);
	}
	// gas.map(s => s + "↑"),
	// sediment.map(s => s + "↓")

	window.autoinput.load(function () {
		this.addSuggest({
			key: 'chemical',
			// before: ["sli", /[\W_qQ]/],
			suggest: suggest,
		});
	});

})()

