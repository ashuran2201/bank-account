// open account data
function eventHandler1(event) {
    window.location.replace('account1.html');
}
function eventHandler2(event) {
    window.location.replace('account2.html');
}
function eventHandler3(event) {
    window.location.replace('account3.html');
}
function eventHandler4(event) {
    window.location.replace('account4.html');
}
function eventHandler5(event) {
    window.location.replace('account5.html');
}
// mocked data
let response = [{
        "id": "1",
        "account_number": "92-220-8636",
        "currency": "Dollar",
        "balance": "$868.18",
        "credit/debit": "5048376718319665",
        "transaction_narative": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
        "transaction_date": "18/6/2020",
        "value_date": "20/6/2020",
        "debit": "$117.07",
        "credit": "$76.91"
    },
    {
        "id": "2",
        "account_number": "46-370-8476",
        "currency": "Dollar",
        "balance": "$449.24",
        "credit/debit": "5048376144258990",
        "transaction_narative": "erat fermentum justo nec condimentum neque sapien placerat ante nulla",
        "transaction_date": "24/8/2020",
        "value_date": "25/8/2020",
        "debit": "$146.16",
        "credit": "$83.22"
    },
    {
        "id": "3",
        "account_number": "97-608-1070",
        "currency": "Dollar",
        "balance": "$885.32",
        "credit/debit": "5108755133753375",
        "transaction_narative": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        "transaction_date": "4/2/2020",
        "value_date": "6/2/2020",
        "debit": "$931.96",
        "credit": "$75.99"
    },
    {
        "id": "4",
        "account_number": "38-766-6295",
        "currency": "Dollar",
        "balance": "$779.55",
        "credit/debit": "5048370622262525",
        "transaction_narative": "quis orci eget orci vehicula condimentum curabitur in libero ut",
        "transaction_date": "22/7/2020",
        "value_date": "23/7/2020",
        "debit": "$187.55",
        "credit": "$65.75"
    },
    {
        "id": "5",
        "account_number": "14-695-0317",
        "currency": "Dollar",
        "balance": "$698.44",
        "credit/debit": "5048373706709221",
        "transaction_narative": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        "transaction_date": "2/2/2021",
        "value_date": "4/2/2020",
        "debit": "$914.99",
        "credit": "$61.76"
    }
];
// table create row and cell with data
let table1 = document.getElementById("list");
let row1, row2, row3, row4, row5;
let cell1, cell2, cell3, cell4, cell5;

function tabHandler1(event) {
    row1 = table1.insertRow();
    cell1 = row1.insertCell();
    cell1.textContent = response[0].account_number;
    cell1 = row1.insertCell();
    cell1.textContent = response[0].currency;
    cell1 = row1.insertCell();
    cell1.textContent = response[0].balance;
    cell1 = row1.insertCell();
    cell1.textContent = response[0].transaction_date;
    row2 = table1.insertRow();
    cell2 = row2.insertCell();
    cell2.textContent = response[1].account_number;
    cell2 = row2.insertCell();
    cell2.textContent = response[1].currency;
    cell2 = row2.insertCell();
    cell2.textContent = response[1].balance;
    cell2 = row2.insertCell();
    cell2.textContent = response[1].transaction_date;
    row3 = table1.insertRow();
    cell3 = row3.insertCell();
    cell3.textContent = response[2].account_number;
    cell3 = row3.insertCell();
    cell3.textContent = response[2].currency;
    cell3 = row3.insertCell();
    cell3.textContent = response[2].balance;
    cell3 = row3.insertCell();
    cell3.textContent = response[2].transaction_date;
    row4 = table1.insertRow();
    cell4 = row4.insertCell();
    cell4.textContent = response[3].account_number;
    cell4 = row4.insertCell();
    cell4.textContent = response[3].currency;
    cell4 = row4.insertCell();
    cell4.textContent = response[3].balance;
    cell4 = row4.insertCell();
    cell4.textContent = response[3].transaction_date;
    row5 = table1.insertRow();
    cell5 = row5.insertCell();
    cell5.textContent = response[4].account_number;
    cell5 = row5.insertCell();
    cell5.textContent = response[4].currency;
    cell5 = row5.insertCell();
    cell5.textContent = response[4].balance;
    cell5 = row5.insertCell();
    cell5.textContent = response[4].transaction_date;
}
tabHandler1()

// table row to open account data page
if (row1) {
    row1.addEventListener('click', eventHandler1);

}

if (row2) {
    row2.addEventListener('click', eventHandler2);

}
if (row3) {
    row3.addEventListener('click', eventHandler3);

}
if (row4) {
    row4.addEventListener('click', eventHandler4);

}
if (row5) {
    row5.addEventListener('click', eventHandler5);

}
// if (table2) {
//     table1.addEventListener('click', eventHandler);

// }
// if (table3) {
//     table1.addEventListener('click', eventHandler);

// }
// if (table4) {
//     table1.addEventListener('click', eventHandler);

// }
// if (table5) {
//     table1.addEventListener('click', eventHandler);

// }

// if (table1) {
//     table1.addEventListener('click', eventHandler);
//     tabHandler1()
// }


console.log(Object.keys(response))