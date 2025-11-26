import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    // getEmptyMail,
    // getDefaultFilter,
    // getSearchParams,
}

function query() {
    return storageService.query(MAIL_KEY)
        .then(mails => {

            // if (filterBy.txt) {
            //     const regExp = new RegExp(filterBy.txt, 'i')
            //     mails = mails.filter(mail => regExp.test(mail.title))
            // }
            // if (filterBy.maxPrice) {
            //     mails = mails.filter(mail => mail.listPrice.amount < (filterBy.maxPrice))
            // }
            return mails
        })
}

function get(id) {
    return storageService.get(MAIL_KEY, id)
        .then(mail => _setNextPrevMailId(mail))
}

function remove(id) {
    return storageService.remove(MAIL_KEY, id)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

// function getDefaultFilter() {
//     return { txt: '', maxPrice: '' }
// }

// function getEmptyMail() {
//     return {
//     }
// }

// function getSearchParams(searchParams) {
//     const txt = searchParams.get('txt') || ''
//     const maxPrice = searchParams.get('maxPrice') || ''
//     return {
//         txt,
//         maxPrice
//     }
// }

function _setNextPrevMailId(mail) {
    return query().then((mails) => {
        const mailIdx = mails.findIndex((currMail) => currMail.id === mail.id)
        const nextMail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
        const prevMail = mails[mailIdx - 1] ? mails[mailIdx - 1] : mails[mails.length - 1]
        mail.nextMailId = nextMail.id
        mail.prevMailId = prevMail.id
        return mail
    })
}

function _createMails() {
    const mails = utilService.loadFromStorage(MAIL_KEY) || []
    if (!mails || !mails.length) {
        mails.push(_createMail('puki@gmail.com'))
        mails.push(_createMail('shuki@gmail.com'))
        mails.push(_createMail('muki@gmail.com'))
    }
    utilService.saveToStorage(MAIL_KEY, mails)
}

function _createMail(from) {
    return {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from,
        to: 'user@appsus.com'
    }
}
