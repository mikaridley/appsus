import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";
import { demoMails } from "./mails.js";

const MAIL_KEY = 'mailDB'
_createMails()

const gLoggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getUnreadMails,
    getSearchParams,
}

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail =>
                    regExp.test(mail.from) || regExp.test(mail.subject) || regExp.test(mail.body))
            }
            
            if (filterBy.nav) {
                if (filterBy.nav === 'inbox') {
                    mails = mails.filter(mail =>
                        !mail.removedAt && mail.from !== gLoggedinUser.email && mail.sentAt)
                }
                else if (filterBy.nav === 'starred') {
                    mails = mails.filter(mail =>
                        !mail.removedAt && mail.isStarred)
                }
                else if (filterBy.nav === 'sent') {
                    mails = mails.filter(mail =>
                        !mail.removedAt && mail.from === gLoggedinUser.email && mail.sentAt)
                }
                else if (filterBy.nav === 'trash') {
                    mails = mails.filter(mail =>
                        mail.removedAt)
                }
                else if (filterBy.nav === 'draft') {
                    mails = mails.filter(mail =>
                        !mail.removedAt && !mail.sentAt)
                }
            }
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

function getEmptyMail(subject = '', body = '', sentAt = '', to = '') {
    return {
        createdAt: Date.now(),
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt,
        from: gLoggedinUser.email,
        to,
    }
}

function getUnreadMails() {
    return query().then(mails => {
        let count = 0
        for (let i = 0; i < mails.length; i++) {
            const mail = mails[i]
            if (!mail.isRead && !mail.removedAt && mail.from !== gLoggedinUser.email) count++
        }
        return count
    })
}

function getSearchParams(searchParams) {
    const subject = searchParams.get('subject') || ''
    const body = searchParams.get('body') || ''
    return {
        subject,
        body
    }
}

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
    let mails = utilService.loadFromStorage(MAIL_KEY) || []
    if (!mails || !mails.length) {
        mails = demoMails
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}