import AppInfo from '../app-info'
import SearchPanel from '../search-panel'
import AppFilter from '../app-filter'
import EmployeesList from '../employees-list'
import EmployeesAddForm from '../employees-add-form'

import './app.css'

function App() {
  const data = [
    { name: 'John', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Alex', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Carl', salary: 5000, increase: false, rise: false, id: 3 }
  ]
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App
