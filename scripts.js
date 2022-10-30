$(document).ready(onReady);

//Storing global variables at the top of JS
let company = [];




function onReady() {
    console.log('JQ working');
    //testing to see JQ connected

    //adding submit employee button
    $('#submitEmployeeBtn').on('click', addEmployee);
    $('#employeeTable').on('click', '.delete-btn', onDelete);



}
//adding function to get info from input and store into array of employees
function addEmployee() {
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        salary: $('#salaryInput').val()
        
    }
    //testing if function works
    console.log('employee values: ', employee );
    company.push(employee);
    console.log('employees in company', company);

    //going to now clear the values after pushing the values to the company array
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    //testing dom, works!

    //testing the render
    render();

}
//pushing employee values to an array, mixed up words on accident
//testing the array fills correctly
console.log('employees in company', company);

//starting a onDelete function, wish me luck!!! This has been hard before
function onDelete() {
    console.log('in onDelete function', onDelete);

    let employeeToDelete = $(this)
        employeeToDelete.closest('tr').remove();
    // let newCompany = []; //will hold emplopyees we still want
    
    // console.log('in on delete'); //testing
    // //now to figure out what I want to delete
    // let employeeToDelete = $(this).parent().siblings();
    // console.log('content to delete is: ', employeeToDelete);

    //     for (let employee of company) {
    //         if (employee.id !== employeeToDelete) {
    //             newCompany.push(employee);


    //         }

    //     }
    //     company = newCompany;
    //     render();
}

//Going to start a Render function to get values updating the DOM
function render() {
    //not sure if I need to empty table, but will try
    $('#employeeTable').empty();

    for (let employee of company) {
        $('#employeeTable').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
        `)  
    }


}

//function to add up individual salaries from the company and divide by 12
