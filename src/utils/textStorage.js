class TextStorage {
    constructor() {
      if (!TextStorage.instance) {
        this.texts = []
        TextStorage.instance = this
      }
      return TextStorage.instance
    }
  
    add(text) {
      this.texts.push(text)
    }
  
    getAll() {
      return this.texts
    }
  
    getById(id) {
      return this.texts.find(text => text.id === id)
    }

    editById(id) {
      return this.texts.find(text => text.id === id)
    }
    deletById(id) {
      const position = this.texts.findIndex((text) => text.id === id)
      this.texts.splice(position,1)
      return "Deletado com sucesso"
    }

  }
  
  module.exports = new TextStorage()