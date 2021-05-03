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
        "account_number": "92-220-8616",
        "currency": "Dollar",
        "balance": "$868.18",
        "credit/debit": "5048176718119665",
        "transaction_narative": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
        "transaction_date": "18/6/2020",
        "value_date": "20/6/2020",
        "debit": "$117.07",
        "credit": "$76.91"
    },
    {
        "id": "2",
        "account_number": "46-170-8476",
        "currency": "Dollar",
        "balance": "$449.24",
        "credit/debit": "5048176144258990",
        "transaction_narative": "erat fermentum justo nec condimentum neque sapien placerat ante nulla",
        "transaction_date": "24/8/2020",
        "value_date": "25/8/2020",
        "debit": "$146.16",
        "credit": "$81.22"
    },
    {
        "id": "1",
        "account_number": "97-608-1070",
        "currency": "Dollar",
        "balance": "$885.12",
        "credit/debit": "5108755111751175",
        "transaction_narative": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        "transaction_date": "4/2/2020",
        "value_date": "6/2/2020",
        "debit": "$911.96",
        "credit": "$75.99"
    },
    {
        "id": "4",
        "account_number": "18-766-6295",
        "currency": "Dollar",
        "balance": "$779.55",
        "credit/debit": "5048170622262525",
        "transaction_narative": "quis orci eget orci vehicula condimentum curabitur in libero ut",
        "transaction_date": "22/7/2020",
        "value_date": "21/7/2020",
        "debit": "$187.55",
        "credit": "$65.75"
    },
    {
        "id": "5",
        "account_number": "14-695-0117",
        "currency": "Dollar",
        "balance": "$698.44",
        "credit/debit": "5048171706709221",
        "transaction_narative": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        "transaction_date": "2/2/2021",
        "value_date": "4/2/2020",
        "debit": "$914.99",
        "credit": "$61.76"
    }
];

let table = document.getElementById("data2");
let row, cell;

function tableHandler(event) {
    row = table.insertRow();
    cell = row.insertCell();
    cell.textContent = response[1].account_number;
    cell = row.insertCell();
    cell.textContent = response[1].currency;
    cell = row.insertCell();
    cell.textContent = response[1].balance;
    cell = row.insertCell();
    cell.textContent = response[1].transaction_date;
    cell = row.insertCell();
    cell.textContent = response[1].value_date;
    cell = row.insertCell();
    cell.textContent = response[1].currency;
    cell = row.insertCell();
    cell.textContent = response[1].debit;
    cell = row.insertCell();
    cell.textContent = response[1].credit;
    cell = row.insertCell();
    cell.textContent = response[1].transaction_narative;
}
tableHandler()