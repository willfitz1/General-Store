import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Items from './components/Items'
import ItemDetails from './components/ItemDetails'
import Review from './components/Review'
import Thanks from './components/Thanks'
import NewItem from './components/NewItem'
import EditItem from './components/EditItem'

const BASE_URL = 'http://localhost:3001/api'

const App = () => {
  const [items, setItems] = useState([])

  const getItems = async () => {
    const item = await axios.get(`${BASE_URL}/items`)
    setItems(item.data.items)
  }
  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/items"
            element={<Items items={items} getItems={getItems} />}
          />
          <Route
            path="/items/:id/:index"
            element={<ItemDetails items={items} />}
          />
          <Route path="/review" element={<Review />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route
            path="/newitem"
            element={
              <NewItem items={items} setItems={setItems} getItems={getItems} />
            }
          />
          <Route
            path="/edititem/:id/:index"
            element={<EditItem items={items} getItems={getItems} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
