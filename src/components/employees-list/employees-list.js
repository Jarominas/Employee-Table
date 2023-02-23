import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="John S." salary={800}/>
            <EmployeesListItem name="Kim M." salary={900}/>
            <EmployeesListItem name="Anton C." salary={1000}/>
        </ul>
    );
}

export default EmployeesList;