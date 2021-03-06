const pilihanUtama = document.querySelector("#pilihanUtama"),
    pilihanCadangan = document.querySelector("#pilihanCadangan");


const printList = (list) => {
    //set default
    let def = pilihanCadangan.querySelector("option").innerHTML;
    pilihanCadangan.innerHTML = `<option>${def}</option>`

    // loop
    list.map(l => pilihanCadangan.innerHTML += `<option>${l}</option>`);
}

const panitiaCadangan = () => {

    let getAllList = pilihanUtama.querySelectorAll("option");
    getAllList = [...getAllList];

    let all = [];
    getAllList.map(l => all.push(l.innerHTML));

    let ls = pilihanUtama.value;
    let rest = [];
    all.filter(l => {
        if (l != ls) rest.push(l);
    });

    printList(rest);
}

panitiaCadangan();


// prodi
const nim = document.querySelector("#NIM"),
    prodi = document.querySelector("#prodi"),
    elProdi = prodi.querySelectorAll("option");

const checkProdi = () => {
    if (nim.value.length == 10) {
        let code = nim.value.slice(4, 6);

        [...elProdi].filter(p => {
            if (p.value == code) prodi.value = code;
        })
    };
}