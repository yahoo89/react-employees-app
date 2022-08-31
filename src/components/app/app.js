import { Component } from 'react'
//import nextId from "react-id-generator"

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
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    console.log(newItem.id)
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
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
          onAdd={this.addItem}
        />
      </div>
    )
  }
}

export default App
