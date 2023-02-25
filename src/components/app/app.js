import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'John S.', salary: 800, increase: false, id: 1},
        {name: 'Kim M.', salary: 900, increase: true, id: 2},
        {name: 'Stacy B.', salary: 1200, increase: false, id: 3},
        {name: 'Anton C.', salary: 1700, increase: false, id: 4}
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList 
                data={data}
                onDelete={id => console.log(id)} />
            <EmployeesAddForm/>
        </div>
    );
}

export default App;