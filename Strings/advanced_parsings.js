



function parseAndDisplayName(fullname){
    console.log('---------------------------------------')
    console.log(`Displaying results for input: ${fullname}`);

    let indexOfFirstspace = fullname.indexOf(" ");
    let firstname = fullname.substring(0,indexOfFirstspace);

    console.log(`IndexofFirstSpace:      ${indexOfFirstspace}`)
    console.log(`doesHaveAtLeastOneSpace:${doesHaveAtLeastOneSpace} `)
   
    if(!doesHaveAtLeastOneSpace){
        console.log(`Only Name: ${fullname}`);
    }
    else{}

    let areFirstandLastIndexOfSpaceIdentical = fullname.indexOf(" ") == fullname.lastIndexOf("  ")
    console.log(`First Name:     ${firstName}`);


    let lastname = fullname.substring(indexOfFirstspace + 1);

    console.log(`Last name:      ${lastname}`);


    console.log(``);
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
