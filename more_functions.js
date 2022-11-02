// function displayMailingLabel(name, address, city, state, zip){
//     let message = "My name is" + name + ", I live at" + address + city + state + zip
//     console.log(message);

// }

// let thename = "Al"
// let theaddress ="98 Bridge St"
// let thecity = "Henniker"
// let thestate ="NH"
// let thezip = "03242"
// displayMailingLabel(thename,theaddress,thecity,thestate,thezip );





function displayReceipt(totalDue, amountPaid){
    let changeDue = amountPaid - totalDue;

    let message = "The total due is " + totalDue + " The amount paid is " 
    + amountPaid + " The change due is " + changeDue
    console.log(message);
}

let totalDue = "45"
let amountPaid = "50"
displayReceipt(totalDue, amountPaid);

totalDue = "92"
amountPaid = "100"
displayReceipt(totalDue, amountPaid);


totalDue = "7"
amountPaid = "10"
displayReceipt(totalDue, amountPaid);



