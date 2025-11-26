import { demoNotes } from 'notes.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
  query,
  get,
  remove,
  save,
}

function query(filterBy = {}) {
  return storageService.query(NOTE_KEY).then(notes => {
    // if (filterBy.txt) {
    //   const regExp = new RegExp(filterBy.txt, 'i')
    //   books = books.filter(book => regExp.test(book.title))
    // }
    // if (filterBy.price) {
    //   books = books.filter(book => book.listPrice.amount <= filterBy.price)
    // }
    // if (filterBy.pageCount) {
    //   books = books.filter(book => book.pageCount <= filterBy.pageCount)
    // }
    return notes
  })
}

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
  if (note.id) return storageService.put(NOTE_KEY, note)
  else return storageService.post(NOTE_KEY, note)
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = demoNotes
    utilService.saveToStorage(NOTE_KEY, notes)
    console.log(notes)
  }
}
