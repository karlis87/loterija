const vardi = ['Laima Laimiņa', 'Kārlis Gauss' , 'Patriks Lejinieks' , 'Gvido Vītols' , 'Krišjānis Avots']
const balvas = ['Monitors ','10x Čipsu pakas',' JBL Tumba','Iphone Xr','Apple Watch', ]
const naudaKopa = 1000000; // kopējā summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = '' ;

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);

    let uzvaretajs = vardi[rand];
    let laimesti = balvas[rand];

    rindas.innerHTML += `
    <tr>
    <td> ${i + 1} </td>
    <td> ${uzvaretajs} </td>
    <td> ${laimesti} </td>
    </tr>

    `
} 


