const basic_form_vm = {

    firstName: [
        {
            type: 'required',
            message: 'First name is required.'
        },
        {
            type: 'fixedLength',
            message: 'First name must have 5 characters.'
        },
        {
            type: 'NaN',
            message: 'First name must be a number.'
        }
    ],

    lastName: [
        {
            type: 'required',
            message: 'Last name is required.' 
        },
        {
            type: 'email',
            message: 'Last name is invalid.' 
        }
    ]
}

export default basic_form_vm;