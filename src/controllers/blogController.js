const { getTextById } = require('../services/textService');
const TextService = require('../services/textService');

const createPost = (req, res) => {
  const { title, content, status, author } = req.body

  const newText = TextService.createText({ title, content, status, author})
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` })
}

const listPosts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

const listPost = (req, res) => {
  const { id } = req.query

  const text = TextService.getTextById(id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado`})
  }

  res.json(text)
}

const editPost = (req, res) => {
  const { id } =  req.query

  const text = TextService.putTextById (id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado para edição`})
  }

  res.json (text)
}

const deletPost = (req, res) => {
  const { id } =  req.query

  const text = TextService.deleteTextById (id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado para exclusão`})
  }

  res.json (text)
}

module.exports = {
  createPost,
  listPosts,
  listPost,
  editPost,
  deletPost
}