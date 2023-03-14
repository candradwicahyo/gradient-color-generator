window.onload = () => {
  
  const box = document.querySelector('.box');
  const select = document.querySelector('.select');
  const inputColor1 = document.querySelector('.color1');
  const inputColor2 = document.querySelector('.color2');
  const input = document.querySelector('.input');
  
  function generate() {
    // dapatkan arah
    const direction = select.value;
    // dapatkan warna hexadecimal acak 
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    // set warna yang didapat ke element input color
    setToInputColor(color1, color2);
    // set warna ke element box dan tampilkan kode css ke element textarea
    box.style.background = setValue(direction, color1, color2);
    input.value = setValue(direction, color1, color2, true);
  }
  
  generate();
  
  function getRandomColor() {
    // string
    const string = 'abcdef0123456789';
    let result = '#';
    // looping sebanyak digit warna hexadecimal, yaitu 6 digit
    for (let i = 0; i < 6; i++) {
      // masukkan hasil looping kedalam variabel result
      result += string[Math.floor(Math.random() * string.length)];
    }
    // kembalikan nilai berupa warna hexadecimal
    return result;
  }
  
  function setToInputColor(color1, color2) {
    // set warna ke element box dan input color
    inputColor1.value = color1;
    inputColor2.value = color2;
  }
  
  function setValue(direction, color1, color2, text = false) {
    /*
      jika parameter "text" menghasilkan boolean false, maka tampilkan
      string kosong. tapi jika parameter "text" menghasilkan boolean true,
      maka tampilkan string bertuliskan "background:"
    */
    return `${!text ? '' : 'background:'} linear-gradient(to ${direction}, ${color1}, ${color2})`;
  }
  
  // tombol generate
  const btnGenerate = document.querySelector('.btn-generate');
  btnGenerate.addEventListener('click', generate);
  
  // ketika input select diubah
  select.addEventListener('change', function() {
    // dapatkan value dari input select
    const direction = this.value;
    // dapatkan value dari input color
    const color1 = inputColor1.value;
    const color2 = inputColor2.value;
    // jalankan fungsi set value 
    box.style.background = setValue(direction, color1, color2);
    input.value = setValue(direction, color1, color2, true);
  });
  
  // salin kode
  const btnCopy = document.querySelector('.btn-copy');
  btnCopy.addEventListener('click', () => {
    // dapatkan value dari input textarea
    input.select();
    // salin kode tersebut
    document.execCommand('copy');
    // berikan pesan bahwa kode berhasil disalin
    alert('code has been copied!');
  });
  
}