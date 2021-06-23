import React from 'react'

const EmployeeForm = () => {
    

    return (
        <div class="w-25 m-5">
            <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Designation</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter designation" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Department</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter department" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}

export default EmployeeForm
