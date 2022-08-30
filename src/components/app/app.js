import { Component } from 'react'

import AppInfo from '../app-info'
import SearchPanel from '../search-panel'
import AppFilter from '../app-filter'
import EmployeesList from '../employees-list'
import EmployeesAddForm from '../employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'John', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl', salary: 5000, increase: false, rise: false, id: 3 }
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addItem = () => {
    console.log('New Item')
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default App
