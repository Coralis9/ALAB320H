export default function EmployeeListItem(props) {
  const { name, position, officeNum, 
    mobileNum, smsNum, email } = props;

  return (
    <div id="employee-list-item" className="employee">
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}



// export default function EmployeeListItem() {
//   return (
//     <div className='employeeListItem'>
//     <div>EmployeeListItem</div>
//     </div>
//   )
// }