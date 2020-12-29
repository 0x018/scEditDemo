(function () {
	let ZeroWidth = "\u200D";//".";
	document.designMode = "Off";
	var edit = document.querySelector("#edit");
	var $ = (str) => edit.querySelector(str);
	let complate = edit.nextElementSibling;
	let list = complate.querySelector("#list");
	let selection = document.getSelection();
	let range;

	let __testNode = (node, name, str) => {
		if (name) { if (node.tagName != name) { return false; } }
		let i = 0;
		while (i < str.length) {
			switch (str[i]) {
				case "#":
					if (node.id != str[i + 1]) return false;
					break;
				case ".":
					if (Array.from(node?.classList || []).indexOf(str[i + 1]) < 0) return false;
					break;
			}
			i += 2;
		}
		return true;
	}
	function isNode(node, str) {
		str = str.split(/\b/);

		let nodeName = null;
		if (/^\w/.test(str[0])) {
			nodeName = (str.shift() + "").toUpperCase();
		}
		return __testNode(node, nodeName, str);
	}

	function getLastChildNode(node, str) {
		let len = node.childNodes.length - 1;
		if (len < 0) return null;
		let last = node.childNodes[len];
		if (last.nodeName == "BR") { last = node.childNodes[len - 1] }
		if (isNode(last, str)) return last;
	}
	let logParent = false;
	function getParent(node, str, deep) {
		// if (logParent) debugger;
		//  = logParent;
		// "span#id.tag[attr^=aaa]"
		// ["span", "#id", ".tag", "[attr", "^=aaa", "]"]
		// [attr] 不考虑
		// str = str.split(/\b(?=\W+)/);
		str = str.split(/\b/);
		deep = deep || 100;

		let nodeName = null;
		if (/^\w/.test(str[0])) {
			nodeName = (str.shift() + "").toUpperCase() || null;
		}


		while (deep && node.parentNode) {
			node = node.parentNode;
			deep--;
			if (__testNode(node, nodeName, str)) {
				return node;
			}

		}
		return null;
	}

	function stopEvent(event) {
		// if (event.preventDefault) {
		// } else {
		// }
		event.preventDefault && event.preventDefault();
		event.returnValue = false;
		// event.stopPropagation && event.stopPropagation();
	}

	function deleteSelection(b, a) {
		// let range = selection.getRangeAt(0);
		while (b--)
			selection.modify("extend", "backward", "character");
		while (a--)
			selection.modify("extend", "forward", "character");
		getSelection();
		range.deleteContents();
		// selection.collapseToEnd();
		// selection.modify("move", "forward", "character");
		// getSelection();
	}

	function getSelection() {
		// selection = document.getSelection();
		range = selection.getRangeAt(0);
	}
	function tagCollapse(key, offset) {
		console.dir(selection.anchorNode)
		let notEdit = !isNode(selection.anchorNode, ".edit");
		let tagNode = null;
		// && key != "Backspace"
		// console.log(key, notEdit)
		if (notEdit) {
			console.dir(selection.anchorNode)
			logParent = true;
			tagNode = isNode(selection.anchorNode, ".tag") ? selection.anchorNode : getParent(selection.anchorNode, ".tag");
			let disText = (o) => o?.nodeName + "{" + (o?.wholeText || o?.innerText) + "}";
			// console.log(
			// 	'get tag', disText(tagNode), disText(selection.anchorNode),
			// );
			// isNode(selection.anchorNode, ".tag"),
			// getParent(selection.anchorNode, ".tag")
			if (!tagNode) tagNode = getLastChildNode(selection.anchorNode, ".tag");
			// (selection.anchorNode, ".tag");
		}
		if (tagNode) {
			let index = 1 + (offset || 0);
			// console.dir(selection.anchorNode);
			let node = tagNode;
			while (node.previousSibling) {
				node = node.previousSibling
				index++;
			}
			if (index < 0) index = 0;
			index = Math.max(index, edit.childNodes.length);
			// range.insertNode(document.createTextNode("\n"));
			selection.collapse(edit, index);
			selection.modify("move", "forward", "character");
			// selection.collapseToEnd();
			// range.setStart(edit);
			console.log("change index", index);
			// selection.collapseToEnd();
		}
	}

	function insertNode(html, sLen, eLen) {

		deleteSelection(sLen, eLen);
		// e && stopEvent(e);
		let node = document.createElement("span");
		// node.setAttribute("contenteditable", false);
		node.className = ("tag");
		node.insertAdjacentHTML("beforeend", "" + html + "");
		let nList = Array.from(node.childNodes);
		let cLen = nList.length;
		if (nList[cLen - 1].nodeType == 1) {
			nList.push(document.createTextNode(" "));
			cLen++;
		}
		// console.log("tag", cLen, node.innerHTML, node.childNodes);
		for (let i = 0; i < cLen; i++) {
			let v = nList[i];
			// console.log("tag for " + i, v?.nodeName, v?.nodeType, v?.nodeValue || v?.innerText)
			// console.dir(v);// v?.innerText || "--");
			// debugger
			if (v) {
				// let n = v.nodeType == 3 ? document.createTextNode(v.wholeText) : v;
				range.insertNode(v);
				selection.collapseToEnd();
				getSelection();
			}
		}
		// let t = parseToDOM(html + " ");
		// range.insertNode(t);
		// selection.collapseToEnd();
		// getSelection();
		// node.childNodes.forEach((v) => {
		// 	console.log("tag foreach", v);
		// 	debugger
		// 	range.insertNode(v);
		// 	selection.collapseToEnd();
		// 	getSelection();
		// })
		// range.insertNode(node);
		// node.insertAdjacentHTML("afterend", "a");

		// let n = document.createTextNode("");
		// after()
		// node.after(n);
		// range.insertNode(n);
		// range.setStart(n, 0);
		// range.setEnd(n, 0);
		// node = null;
	}
	edit.addEventListener("click", function (e) {
		getSelection();
		tagCollapse("");
	});
	edit.addEventListener("keydown", function (e) {
		let needSuggest = true;
		// console.log("\n", e.key)
		getSelection();

		// console.log("e", e)
		let [zh, char, special] = [
			e.key == "Unidentified",
			(e.key.length == 1) && (!e.ctrlKey) && (!e.altKey),
			e.key.length > 1
		];
		if (char || zh)/** */ {
			tagCollapse(e.key);
		}
		// special = special && !zh;
		// console.log(e.key, e.code, "[zh, char, special]", [zh, char, special])
		if (char) {
			// console.log("char insert", e.key);
			// deleteSelection();
			// stopEvent(e);
			// range.insertNode(document.createTextNode(e.key));
			// selection.collapseToEnd();
		} else if (zh) {
			// console.log("zh insert");
			// stopEvent(e);
			// deleteSelection();
			// let node = document.createElement("span");
			// range.insertNode(node);
			// range.setStart(node, 0);
			// range.setEnd(node, 0);
			// // selection.collapseToEnd();
			// // selection.collapse(node, 0);
			// console.log("selection.anchorNode previousSibling");
			// console.dir(selection.anchorNode.previousSibling)
			// // let node = getLastChildNode(selection.anchorNode, ".tag");
			// // console.log("zh", node)
			// // if (node) {
			// // document.createElement("span");
			// // node.setAttribute("contenteditable", false);
			// // node.className = ("tag");
			// // node.insertAdjacentHTML("beforeend", "");
			// // range.insertNode(document.createTextNode(""));
			// // }
			// // selection.collapseToEnd();
		} else if (special) {
			if (e.key == "Tab") {
				stopEvent(e);
				insertNode("    ");
				// range.insertNode(document.createElement("span"));
				// selection.collapseToEnd();
			}
			if (e.key == "Backspace") {

				// let node = isNode(selection.anchorNode, ".tag") ? selection.anchorNode : getParent(selection.anchorNode, ".tag");

				// if (!node) {
				// 	// selection.anchorNode
				// 	// debugger
				// 	node = getLastChildNode(selection.anchorNode, ".tag");
				// }
				// console.log("Backspace node");
				// console.dir(node);
				// if (node) {
				// 	stopEvent(e);
				// 	node.parentNode.removeChild(node);
				// }
				// console.dir(selection)
			}
			let suggestShow = suggestIndex !== undefined;
			if (e.key == "ArrowUp" && suggestShow) {
				// tagCollapse("ArrowRight", 1);
				stopEvent(e);
				suggestIndex = suggestIndex === null ? (suggestList.length) : (suggestIndex - 1) % suggestList.length;
				setActiveSuggest();
				needSuggest = false;
			}
			if (e.key == "ArrowDown" && suggestShow) {
				// tagCollapse("ArrowLeft", -1);
				stopEvent(e);
				suggestIndex = suggestIndex === null ? 0 : (suggestIndex + 1) % suggestList.length;
				setActiveSuggest();
				needSuggest = false;
			}
			if (e.key == "Enter" && suggestShow && typeof suggestIndex == 'number') {
				stopEvent(e); // 选择补全
				needSuggest = false;
				let { code: html, len } = suggestList[suggestIndex];
				console.log("result ", html, len)
				insertNode(html, len);
				list.parentNode.classList.remove("show");
				suggestIndex = undefined;
			}
			if (e.key == "Enter" && !suggestShow) { // 插入换行
				stopEvent(e);
				needSuggest = false;
				insertNode('\n\n');
				// list.parentNode.classList.remove("show");
				// suggestIndex = undefined;
			}
		}
		if (needSuggest) {
			suggest();
		}
	});
	edit.addEventListener("keypress", function () {

		// alert('1')
	})

	edit.compositionend = function (event) {
		// console.log(`generated characters were: ${event.data}`);
		stopEvent(event);

		getSelection();
		tagCollapse("");
		deleteSelection();

		range.insertNode(document.createTextNode("a" + event.data));
		selection.collapseToEnd();
		return false;
	};

	// undefined, null, 0, 1, 2, 3, ... // 无, 不选, 0,1,2,3...
	let suggestIndex = undefined;
	let suggestList = [];
	let _s = null;
	function suggest() {

		if (_s) clearTimeout(_s);
		_s = setTimeout(function () {
			getSelection();

			// console.log("suggest selection");
			// console.dir(selection)
			let [start, , , end] = [
				selection.anchorOffset, selection.baseOffset,
				selection.extentOffset, selection.focusOffset
			].sort((a, b) => a - b);
			let node = selection.anchorNode;
			let text = (node?.nodeValue || node?.innerText);
			let len = 10;
			let strPrev = text.slice(Math.max(0, start - len), start)
			let strNext = text.slice(end, end + len);
			// console.log("anchorNode [text,start,end]=['" + text + "'," + start + ", " + end + "];");
			// console.log("anchorNode slice 1", strPrev);
			// console.log("anchorNode slice 2", strNext);

			// let map = new Map();
			suggestList = [];
			if (strPrev || strNext) {
				suggestTips.forEach(v => {
					// let bk = null, ak = null;
					let before = null;
					let after = null;
					if (v.before) {
						// bk = "before," + v.before.join(',');
						// before = map.get(bk);
						// if (before === undefined) {
						before = strPrev[v.before[0]](...v.before.slice(1))
						console.log("before", before, v.before[0], v.before.slice(1));
						// map.set(bk, before)
						// }
					} else { before = strPrev; }
					if (v.after) {
						// ak = "after," + v.after.join(',');
						// after = map.get(ak);
						// if (after === undefined) {
						after = strNext[v.after[0]](...v.after.slice(1))
						// map.set(ak, after)
						// }
					} else { after = strNext; }
					// console.log("call suggest", before + "", after + "");
					// return;
					let r = v.suggest(before, after);
					if (r) {
						suggestList = suggestList.concat(r);
					}

				});

				suggestList = suggestList.sort((a, b) => ((b.sort || 0) - (a.sort || 0))).slice(0, 5);
				console.log("suggest last", suggestList)
			}

			if (suggestList.length > 0) {
				// let html = "";
				// getSelection();
				let { x, y } = range.getBoundingClientRect();

				let style = complate.style;
				style.left = "calc(0em + " + x + "px)";
				style.top = "calc(1em + " + y + "px)";

				list.innerHTML = suggestList.map((v, i) => `<div class="item" index="${i}">${v.html}</div>`).join("").trim();
				list.parentNode.classList.add("show");
				suggestIndex = null;
			} else {
				list.parentNode.classList.remove("show");
				suggestIndex = undefined;
			}

		}, 500);
	}
	function setActiveSuggest() {
		let active = list.querySelector(".active");
		if (active) {
			active.classList.remove("active");
		}
		if (typeof suggestIndex == "number") {
			list.childNodes[suggestIndex].classList.add("active");
		}
	}

	let suggestTips = []

	window.autoinput = {

		load: function (fun) {
			fun.call({
				addSuggest: function (...arg) {
					suggestTips.push(...arg);
					suggestTips.sort((a, b) => ((b.sort || 0) - (a.sort || 0)))
				}
			})
		}
	}
})();