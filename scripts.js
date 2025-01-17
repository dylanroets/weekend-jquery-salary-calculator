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

    //adding salary calculator to test
    monthlySalaryTotal();

    //testing the render
    render();

}
//pushing employee values to an array, mixed up words on accident
//testing the array fills correctly
console.log('employees in company', company);

//starting a onDelete function, wish me luck!!! This has been hard before
function onDelete() {
    let newCompany = [];
    console.log('in onDelete function');
    //this employeeToDelete was working but when I submitted another person after deleting they would all come back
    //deleting them is just grabbing them and deleting what is there but not from the overall company array im guessing
    //it's definetely just deleting from the dom, need to update the state as well
    let employeeToDelete = $(this).closest('tr');
        //grabbed the row i wanted
        company.splice(employeeToDelete.index(),1);
        //looked up how to splice but have questions on it
        employeeToDelete.remove();
        
        render();
        
        console.log('Employee to delete: ', employeeToDelete);
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
    if (monthlySalaries > 20000) {
        $('#totalBoxLabel').addClass('redBox');
    }   else {
        $('#totalBoxLabel').removeClass('redBox');
    }

}

//function to add up individual salaries from the company and divide by 12
function monthlySalaryTotal() {
    console.log('in monthlySalaryTotal');
    let annualSalaries = 0;
    for (let i = 0; i < company.length; i++) {
        annualSalaries += Number(company[i].salary);
    }

    monthlySalaries = annualSalaries/12
    monthlySalaries = Math.round(monthlySalaries);

    console.log('monthly: ', monthlySalaries, 'yearly: ', annualSalaries);
    //able to get both these number working and logging in the console.
    //now i need to figure out how to render them to the DOM
    
    //empty box first
    $('#totalBox').empty();

    $('#totalBox').append(`
        <aside id="totalBox">${monthlySalaries}</aside>
    `)

}
