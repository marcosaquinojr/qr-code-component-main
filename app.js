function x ()  {
    
    var conteudo = document.getElementById('text').value;
	var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
	var qrcode = GoogleCharts + conteudo;
	document.getElementById('qrcode').src = qrcode; 
  
    document.getElementById('qrcode').src = qrcode
}
