
function DataListInterface(rawData){
	// raw data will be the file as a string.
	this.processList = function(){
		var lines = [];
		lines = rawData.split("\n");

		var inDefine = false;
		var defines = {};
		var inEntry = false;
		var currentEntry = 0;
		var entries = [];
		var entry = {};

		// iterate lines
		for(var i = 0; i < lines.length; i++){
			//console.log("Array{"+i+"} : " + lines[i]);
			var strippedLine = lines[i].trim();
			if(strippedLine !== "" || strippedLine[0] !== "#"){
				if(strippedLine.toLowerCase() === "define"){
					if(inDefine === true){
						console.log("[WARN] Trying to open define, while another is open.");
						console.log('** Nesting Defines is not supported, the entries will be merged.');
					}
					inDefine = true;
				}else if(strippedLine.toLowerCase() === "enddefine"){
					if(inDefine === false){
						console.log("[WARN] Trying to end define without open block");
					}
					inDefine = false;
				}else if(strippedLine.toLowerCase() === "entry"){
					if(inDefine === true){
						console.log("[WARN] Trying to open entry, while another is open.");
						console.log('** Nesting Entries is not supported, the entries will be merged.');
					}else{
						inEntry = true;
						entry = {};	
					}
				}else if(strippedLine.toLowerCase() === "endentry"){
					if(inEntry === false){
						console.log("[WARN] Trying to end entry without open block");
					}else{
						inEntry = false;
						entries[currentEntry] = entry;
						currentEntry++;
					}
				}else{
					if(strippedLine.includes("->")){
						var linei = strippedLine.split("->");
						var left = linei[0].trim();
						var right = linei[1].trim();
						if(inDefine == false){
							if(right[0] === "$"){right = defines[right.replace("$", "")];}
							// next loop through the defines and add one if needed
							for (var key in defines) {
    							if (defines.hasOwnProperty(key)) {           
        							if(right.includes("$" + key)){
        								right = right.replace("$" + key, defines[key]);
        							}
    							}
							}

							entry[left] = right;
						}else{
							defines[left] = right;
						}
					}else{
						console.log("[WARN] [LINE:"+(i + 1)+"]Line Contains No valid statements.")
					}
				}
			}
			
		}
		if(inDefine){console.log('[ERROR] Expected EndDefine before EOF');}
		if(inEntry){console.log('[ERROR] Expected EndEntry before EOF');}
		return entries;
	}
}
