import Header from "./Header";

export default function EmployeePage({ selectedEmployee }) {
  return (
    <section id='employee-page'>
      <Header title="Employee" />
      <div id="employee-info-container">
        <div className="employee">
          <h3>{selectedEmployee.name}</h3>
          <p>{selectedEmployee.position}</p>
        </div>
        <div className="employee">
          <h3>Call Office</h3>
          <p>{selectedEmployee.position}</p>
        </div>
        <div className="employee">
          <h3>Call Mobile</h3>
          <p>{selectedEmployee.position}</p>
        </div>
        <div className="employee">
          <h3>SMS</h3>
          <p>{selectedEmployee.position}</p>
        </div>
        <div className="employee">
          <h3>Email</h3>
          <p>{selectedEmployee.position}</p>
        </div>
      </div>
    </section>
  );
}

// import React from 'react'
// import Header from './Header'

// export default function EmployeePage() {
//   return (
//     <div className>
//     <div>EmployeePage</div>
//     <Header />
//     <div>
//       <h1>Employee Name</h1>
//       <p>Call Office</p>
//       <h6>781-000-0002</h6>
//       <p>Call Mobile</p>
//       <h6>781-000-0002</h6>
//       <p>SMS</p>
//       <h6>781-000-0002</h6>
//       <p>Email</p>
//       <h6>tishana.trainor@perscholas.org</h6>
//     </div>
//     </div>
//   )
// }