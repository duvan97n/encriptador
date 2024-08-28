function procesarTexto(accion) {
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    if (!/^[a-z\s]*$/.test(textoEntrada)) {
      alert("Por favor, usa solo letras minúsculas sin acentos ni caracteres especiales.");
      return;
    }
  
    let textoResultado;
    if (accion === 'encriptar') {
      textoResultado = encriptarTexto(textoEntrada);
    } else {
      textoResultado = desencriptarTexto(textoEntrada);
    }
  
    document.getElementById('textoResultado').value = textoResultado;
    document.getElementById('textoResultado').style.display = 'block';
    document.getElementById('imagenSalida').style.display = 'none';
    document.getElementById('mensajeSalida').style.display = 'none';
    document.getElementById('instruccionSalida').style.display = 'none';
    document.querySelector('.boton-copiar').style.display = 'block';
  }
  
  function encriptarTexto(texto) {
    const reglas = {
      'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'
    };
    return texto.replace(/[eiaou]/g, letra => reglas[letra]);
  }
  
  function desencriptarTexto(texto) {
    const reglas = {
      'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u'
    };
    let textoDesencriptado = texto;
    for (let [clave, valor] of Object.entries(reglas)) {
      textoDesencriptado = textoDesencriptado.replace(new RegExp(clave, 'g'), valor);
    }
    return textoDesencriptado;
  }
  
  function copiarTexto() {
    const textoResultado = document.getElementById('textoResultado');
    textoResultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  }
  
  document.getElementById('textoEntrada').addEventListener('input', function(e) {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, '');
  });