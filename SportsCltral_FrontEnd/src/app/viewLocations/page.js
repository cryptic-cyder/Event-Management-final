import React from 'react'

const page = () => {
  return (
    <div>
      <div class="content">
    <div class="container">
        {/* <!-- Placeholder for a success or error message --> */}
        <p>Message goes here</p>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Location ID</th>
                    <th>Name</th>
                    <th>Address</th>                    
                    <th>Manager First Name</th>
                    <th>Manager Last Name</th>
                    <th>Manager Email</th>
                    <th>Manager Number</th>
                    <th>Max Capacity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Placeholder for dynamic content --> */}
                <tr>
                    <td>LocationID1</td>
                    <td>Name1</td>
                    <td>Address1</td>
                    <td>ManagerFName1</td>
                    <td>ManagerLName1</td>
                    <td>ManagerEmail1</td>
                    <td>ManagerNumber1</td>
                    <td>MaxCapacity1</td>
                    <td>
                        <a href="viewLocation.php?id=LocationID1">View</a>
                        <a href="editLocationForm.php?id=LocationID1">Edit</a>
                        <a class="delete" href="deleteLocation.php?id=LocationID1">Delete</a>
                    </td>
                </tr>
                {/* <!-- Repeat the above structure for each row of dynamic content --> */}
            </tbody>
        </table>
        
        <a class="btn btn-default" href="createLocationForm.php">Create Location</a>
    </div>
</div>

    </div>
  )
}

export default page
