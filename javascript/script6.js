// open account list
const btn = document.getElementById('myBtn');
if (btn) {
    btn.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    window.location.replace('index.html');
}
// mocked data
let response = [{
        "id": "1",
        "account_number": "92-223-8636",
        "currency": "Dollar",
        "balance": "$868.18",
        "credit/debit": "5348376718319665",
        "transaction_narative": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
        "transaction_date": "18/6/2323",
        "value_date": "23/6/2323",
        "debit": "$117.37",
        "credit": "$76.91"
    },
    {
        "id": "2",
        "account_number": "46-373-8476",
        "currency": "Dollar",
        "balance": "$449.24",
        "credit/debit": "5348376144258993",
        "transaction_narative": "erat fermentum justo nec condimentum neque sapien placerat ante nulla",
        "transaction_date": "24/8/2323",
        "value_date": "25/8/2323",
        "debit": "$146.16",
        "credit": "$83.22"
    },
    {
        "id": "4",
        "account_number": "97-638-1373",
        "currency": "Dollar",
        "balance": "$885.32",
        "credit/debit": "5138755133753375",
        "transaction_narative": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        "transaction_date": "4/2/2323",
        "value_date": "6/2/2323",
        "debit": "$931.96",
        "credit": "$75.99"
    },
    {
        "id": "4",
        "account_number": "38-766-6295",
        "currency": "Dollar",
        "balance": "$779.55",
        "credit/debit": "5348373622262525",
        "transaction_narative": "quis orci eget orci vehicula condimentum curabitur in libero ut",
        "transaction_date": "22/7/2323",
        "value_date": "23/7/2323",
        "debit": "$187.55",
        "credit": "$65.75"
    },
    {
        "id": "5",
        "account_number": "14-695-3317",
        "currency": "Dollar",
        "balance": "$698.44",
        "credit/debit": "5348373736739221",
        "transaction_narative": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        "transaction_date": "2/2/2321",
        "value_date": "4/2/2323",
        "debit": "$914.99",
        "credit": "$61.76"
    }
];

let table = document.getElementById("data5");
let row, cell;

function tableHandler(event) {
    row = table.insertRow();
    cell = row.insertCell();
    cell.textContent = response[4].account_number;
    cell = row.insertCell();
    cell.textContent = response[4].currency;
    cell = row.insertCell();
    cell.textContent = response[4].balance;
    cell = row.insertCell();
    cell.textContent = response[4].transaction_date;
    cell = row.insertCell();
    cell.textContent = response[4].value_date;
    cell = row.insertCell();
    cell.textContent = response[4].currency;
    cell = row.insertCell();
    cell.textContent = response[4].debit;
    cell = row.insertCell();
    cell.textContent = response[4].credit;
    cell = row.insertCell();
    cell.textContent = response[4].transaction_narative;
}
tableHandler()
