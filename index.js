
var socket = io();
var category = "chat";
var b1 = document.getElementById('');
var b2 = document.getElementById('');
var b3 = document.getElementById('');
var b4 = document.getElementById('');
var datas="";
var tests="";
socket.emit('echo','echosend');
socket.on('echo',function(msg){
	console.log(msg)
});
window.addEventListener('load', function() {
	new FastClick(document.body);
	FastClick.attach(document.body);
	opendata();
	opentest();
}, false);
function data(val){
	datas += val;
	switch (val) {
		case '1':
			document.getElementById("data").insertBefore(document.getElementById("w3w").cloneNode(true),document.getElementById("data").childNodes[0]);
			break;
		case '2':
			document.getElementById("data").insertBefore(document.getElementById("w4g").cloneNode(true),document.getElementById("data").childNodes[0]);
			break;
		case '3':
			document.getElementById("data").insertBefore(document.getElementById("d3g").cloneNode(true),document.getElementById("data").childNodes[0]);
			break;
		case '4':
			document.getElementById("data").insertBefore(document.getElementById("d4w").cloneNode(true),document.getElementById("data").childNodes[0]);
			break;
	}
	check();
}
function test(val){
	tests += val;
	switch (val) {
		case '1':
			document.getElementById("test").insertBefore(document.getElementById("w3w").cloneNode(true),document.getElementById("test").childNodes[0]);
			break;
		case '2':
			document.getElementById("test").insertBefore(document.getElementById("w4g").cloneNode(true),document.getElementById("test").childNodes[0]);
			break;
		case '3':
			document.getElementById("test").insertBefore(document.getElementById("d3g").cloneNode(true),document.getElementById("test").childNodes[0]);
			break;
		case '4':
			document.getElementById("test").insertBefore(document.getElementById("d4w").cloneNode(true),document.getElementById("test").childNodes[0]);
			break;
	}
	check();
}
function initdata(){
	datas = "";
	var datum = localStorage.getItem('data') || "";
	if(datum.length < 1) return;
	for(var i = 0 ; i < datum.length ; i++){
		data(datum[i]);
	}
	check();
}
function cleardata(){
	datas = "";
	while ( document.getElementById("data").hasChildNodes() ) {
		 document.getElementById("data").removeChild( document.getElementById("data").lastChild );
	}
	check();
};
function savedata(){
	localStorage.setItem('data',datas);
};
function opendata(){
	cleardata();
	datas =	localStorage.getItem('data');
	initdata();
};
function downdata(){
  // server down string
	initdata();
};
function inittest(){
	tests = "";
	var testum = localStorage.getItem('test') || "";
	if(testum.length < 1) return;
	for(var i = 0 ; i < testum.length ; i++){
		test(testum[i]);
	}
}
function cleartest(){
	tests = "";
	while ( document.getElementById("test").hasChildNodes() ) {
		 document.getElementById("test").removeChild( document.getElementById("test").lastChild );
	}
	check();
};
function savetest(){
	localStorage.setItem('test',tests);
};
function opentest(){
	cleartest();
	tests =	localStorage.getItem('test');
	inittest();
};
function downtest(){
	// server down string
	inittest();
};
function minusdata(){
	datas = datas.slice(0,datas.length-1);
	document.getElementById('data').removeChild(document.getElementById('data').childNodes[0]);
}
function minustest(){
	tests = tests.slice(0,tests.length-1);
	document.getElementById('test').removeChild(document.getElementById('test').childNodes[0]);
}
function check(){
		if(datas.length==0||tests.length==0) {
 		 w3wresult.innerText = 0+"%";
 		 w3wcountt.innerText = 0+"회";
 		 w4gresult.innerText = 0+"%";
 		 w4gcountt.innerText = 0+"회";
 		 d3gresult.innerText = 0+"%";
 		 d3gcountt.innerText = 0+"회";
 		 d4wresult.innerText = 0+"%";
 		 d4wcountt.innerText = 0+"회";
 		 return;
 	 }
   var result = "";
   var a = 0,
       b = 0,
       c = 0,
       d = 0;
   var pos = datas.indexOf(tests);
   while (pos > -1) {
       switch (datas[pos + tests.length]) {
           case '1':
               a++;
               break;
           case '2':
               b++;
               break;
           case '3':
               c++;
               break;
           case '4':
               d++;
               break;
       }
       pos = datas.indexOf(tests, pos + 1);
   }
	 var sum = a+b+c+d;
	 if(sum==0) {
		 w3wresult.innerText = 0+"%";
		 w3wcountt.innerText = 0+"회";
		 w4gresult.innerText = 0+"%";
		 w4gcountt.innerText = 0+"회";
		 d3gresult.innerText = 0+"%";
		 d3gcountt.innerText = 0+"회";
		 d4wresult.innerText = 0+"%";
		 d4wcountt.innerText = 0+"회";
		 return;
	 }
	 w3wresult.innerText = parseInt(a/sum*100)+"%";
	 w3wcountt.innerText = a+"회";
	 w4gresult.innerText = parseInt(b/sum*100)+"%";
	 w4gcountt.innerText = b+"회";
	 d3gresult.innerText = parseInt(c/sum*100)+"%";
	 d3gcountt.innerText = c+"회";
	 d4wresult.innerText = parseInt(d/sum*100)+"%";
	 d4wcountt.innerText = d+"회";
}
