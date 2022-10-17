class Calculadora{
	constructor (n1, n2, opc){

		this.n1=n1;
		this.n2=n2;
		this.opc=opc;
		this.operaciones();
	}
	
 operaciones() {

 let opc;
    document.getElementById('suma').addEventListener('click', () =>{
        opc = '+';
    });
    document.getElementById('resta').addEventListener('click', () =>{
        opc = '-';
    });
    document.getElementById('multiplicacion').addEventListener('click', () =>{
        opc = '*';
    });
    document.getElementById('division').addEventListener('click', () =>{
        opc = '/';
    });

    document.getElementById('calcular').addEventListener('click', () =>{
        const n1 = parseInt(document.getElementById('n1').value);
        const n2 = parseInt(document.getElementById('n2').value);
      
        let r;
        if(opc == '+'){
            r = n1 + n2;
        }else if( opc == '-'){
            r = n1 - n2;
        }else if(opc == '*'){
            r = n1 * n2;
        }else if(opc == '/'){
            r = n1 / n2;
        }
        document.getElementById('r').innerHTML = "EL RESULTADO ES: " + r;
    });
}

}

