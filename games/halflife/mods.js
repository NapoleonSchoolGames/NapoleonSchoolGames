// filename, name, bytes, parts + 1, part size
zipMods = [
	['halva_en.zip', 'Half-Life EN (MENU LAGS) (214M)', 214283501, 21, 10485760],
	['uplinked.zip', 'Uplinked (15M)', 16147046, 2, 16147046]
];

pkgMods = [
];
var selectZip=document.getElementById('selectZip');
var iArgs=document.getElementById('iArgs');
selectZip.addEventListener('change', function(){
	if(selectZip.value=="halva_en.zip")
	{
		//alert('Bugs: menu lagging.');
		iArgs.value="-dev 0 -game valve";
	}
	if(selectZip.value=="uplinked.zip")
	{
		//alert('Bugs: menu lagging.');
		iArgs.value="-dev 0 -game uplinked";
	}
});