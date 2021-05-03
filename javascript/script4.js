// open account list
const btn = document.getElementById('myBtn');
if (btn) {
    btn.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    window.location.replace('/index.html');
}
// mocked data
let response = [{
        "id": "1",
        "account_number": "93-330-8636",
        "currency": "Dollar",
        "balance": "$868.18",
        "credit/debit": "5048376718319665",
        "transaction_narative": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
        "transaction_date": "18/6/3030",
        "value_date": "30/6/3030",
        "debit": "$117.07",
        "credit": "$76.91"
    },
    {
        "id": "2",
        "account_number": "46-370-8476",
        "currency": "Dollar",
        "balance": "$449.34",
        "credit/debit": "5048376144358990",
        "transaction_narative": "erat fermentum justo nec condimentum neque sapien placerat ante nulla",
        "transaction_date": "34/8/3030",
        "value_date": "35/8/3030",
        "debit": "$146.16",
        "credit": "$83.33"
    },
    {
        "id": "2",
        "account_number": "97-608-1070",
        "currency": "Dollar",
        "balance": "$885.33",
        "credit/debit": "5108755133753375",
        "transaction_narative": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        "transaction_date": "4/2/3030",
        "value_date": "6/2/3030",
        "debit": "$931.96",
        "credit": "$75.99"
    },
    {
        "id": "4",
        "account_number": "38-766-6395",
        "currency": "Dollar",
        "balance": "$779.55",
        "credit/debit": "5048370633363535",
        "transaction_narative": "quis orci eget orci vehicula condimentum curabitur in libero ut",
        "transaction_date": "33/7/3030",
        "value_date": "33/7/3030",
        "debit": "$187.55",
        "credit": "$65.75"
    },
    {
        "id": "5",
        "account_number": "14-695-0317",
        "currency": "Dollar",
        "balance": "$698.44",
        "credit/debit": "5048373706709331",
        "transaction_narative": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        "transaction_date": "2/2/3031",
        "value_date": "4/2/3030",
        "debit": "$914.99",
        "credit": "$61.76"
    }
];

let table = document.getElementById("data3");
let row, cell;

function tableHandler(event) {
    row = table.insertRow();
    cell = row.insertCell();
    cell.textContent = response[2].account_number;
    cell = row.insertCell();
    cell.textContent = response[2].currency;
    cell = row.insertCell();
    cell.textContent = response[2].balance;
    cell = row.insertCell();
    cell.textContent = response[2].transaction_date;
    cell = row.insertCell();
    cell.textContent = response[2].value_date;
    cell = row.insertCell();
    cell.textContent = response[2].currency;
    cell = row.insertCell();
    cell.textContent = response[2].debit;
    cell = row.insertCell();
    cell.textContent = response[2].credit;
    cell = row.insertCell();
    cell.textContent = response[2].transaction_narative;
}
tableHandler()