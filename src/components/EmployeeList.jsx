import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
  return (
    <div id="employee-list">
      {
        props.employees.map((employee, idx) => {
          return (
            <EmployeeListItem 
              key={idx}
              {...employee}
            />
          )
        })
      }
    </div>
  );
}




// import EmployeeListItem from './EmployeeListItem'

// export default function EmployeeList() {
//   return (
//     <div className ="employeeList">
//         <div>EmployeeList</div>
//         <EmployeeListItem />
//         <EmployeeListItem />
//         <EmployeeListItem />
//         <EmployeeListItem />
//         <EmployeeListItem />
//         <EmployeeListItem />
//     </div>
    
//   )
// }