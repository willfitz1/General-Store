const Items = require('../models/items')

const createItem = async (req, res) => {
  try {
    const item = await new Items(req.body)
    await item.save()
    return res.status(201).json({
      item
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllItems = async (req, res) => {
  try {
    const items = await Items.find()
    return res.status(200).json({ items })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getItemById = async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    if (item) {
      return res.status(200).json({ item })
    }
    return res.status(404).send('The item with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateItem = async (req, res) => {
  try {
    const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(item)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Items.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Item deleted')
    }
    throw new Error('Item not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
}
