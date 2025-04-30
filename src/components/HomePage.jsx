import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function HomePage(props) {
  return (
    <section id="home-page">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={props.employees} />
    </section>
  );
}


// import EmployeeList from "./EmployeeList";
// import Header from "./Header";
// import SearchBar from "./SearchBar";

// export default function HomePage() {
//   return (
//     <>
//     <div>HomePage</div>
//     <Header />
//     <SearchBar />
//     <EmployeeList />
//     </>
    
//   )
// }