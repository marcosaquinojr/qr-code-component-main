document.getElementById('text').focus();
document.getElementById("download").disabled = true;
function generator ()  {
    var conteudo = document.getElementById('text').value;
	if(conteudo){
		var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
		qrcode = GoogleCharts + conteudo;
		document.getElementById('qrcode').src = qrcode;   
		swal("Prontinho!", "Seu QR Code foi gerado!", "success");
		document.getElementById("download").disabled = false;
	}else{
		swal("Digite um link para gerar o QR Code!");
	}
}
async function download(){
	const image = await fetch(qrcode)
	const imageBlob = await image.blob()
	const imageURL = URL.createObjectURL(imageBlob)

	const a = document.createElement('a');
  	a.href = imageURL;
	a.download = 'qrcode'
	//a.setAttribute('download', 'image.jpg');
  	document.body.appendChild(a);
  	a.click();
  	document.body.removeChild(a);
	location.reload(); 
}
