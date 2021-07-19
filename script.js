const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=5ec4832433ec9ea3a63432a7a363f4f6';
const selectOne = document.querySelector('.select-one');
const selectTwo = document.querySelector('.select-two');
const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');

let html = ``;

const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    // console.log(arrKeys)
    arrKeys.forEach(item => {
        return html += `<option value=${item}>${item}</option>`;
    });
    for (let i = 0; i < arrKeys.length; i++) {
        selectOne.innerHTML = html;
    }
    for (let i = 0; i < arrKeys.length; i++) {
        selectTwo.innerHTML = html;
    }
    console.log(rates)
}

const convert = () => {
    console.log('hi')
}

inputOne.addEventListener('input', convert);
inputTwo.addEventListener('input', convert);
selectOne.addEventListener('change', convert);
selectTwo.addEventListener('change', convert);