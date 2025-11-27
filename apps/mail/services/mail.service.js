import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";

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
    // getDefaultFilter,
    // getSearchParams,
}

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.from))
            }
            if (filterBy.nav) {
                if (filterBy.nav === 'inbox') {
                    mails = mails.filter(mail => !mail.removedAt && mail.from !== gLoggedinUser.email)
                }
                if (filterBy.nav === 'sent') {
                    mails = mails.filter(mail => !mail.removedAt && mail.from === gLoggedinUser.email)
                }
                if (filterBy.nav === 'trash') {
                    mails = mails.filter(mail => mail.removedAt && mail.from !== gLoggedinUser.email)
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
        mail.sentAt = Date.now()
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(subject = '', body = '', sentAt = '', to = '') {
    return {
        createdAt: Date.now(),
        subject,
        body,
        isRead: false,
        sentAt,
        from: gLoggedinUser.email,
        to,
    }
}

function getUnreadMails() {
    return query().then(mails => {
        let count = 0
        for (let i = 0; i < mails.length; i++) {
            if (!mails[i].isRead && !mails.removedAt && mails.from !== gLoggedinUser.email) count++
        }
        return count
    })
}

// function getDefaultFilter() {
//     return { txt: '', maxPrice: '' }
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
        const mails = [
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Quick Update on Tomorrow’s Meeting',
                body: `Hi team,Just a reminder that our check-in is
                 scheduled for 10:00 AM tomorrow. I’ll share the agenda shortly.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: "skyline.techhub27@gmail.com",
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Thank You!',
                body: `Hey, Thanks for helping me with the report yesterday.
                 Your insights really made the difference. Appreciate it!`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'nova.spark.engineer@outlook.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Package Has Shipped',
                body: `Hello, Your order has been processed and shipped!
                 You can expect delivery within 3–5 business days.
                 Thanks for shopping with us!`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'crystalwave.support@protonmail.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Need Clarification',
                body: `Could you clarify the second point in your proposal?
                 I want to make sure we’re aligned before moving forward.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'orbitshift.studio@icloud.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Happy Birthday!',
                body: `Hey, Just wanted to wish you a fantastic birthday!
                 Hope you get to relax and celebrate.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'hexabyte.admin2025@yahoo.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Scheduling a Call',
                body: `Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'lunarforge.creative@gmail.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Invoice Attached',
                body: `Good afternoon, Please find the invoice for this month attached to this email.
                 Let me know if you need anything else.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'zenithalpha.team@pm.me',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Quick Question',
                body: `Hi, Do you remember where we stored last year’s presentation files?
                 I can’t seem to find them in the shared drive.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'cobaltstream.data@fastmail.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Welcome to the Team!',
                body: `Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'pixelhaven.dev@outlook.com',
                to: 'user@appsus.com'
            },
            {
                id: utilService.makeId(),
                createdAt: Date.now(),
                subject: 'Weekend Plans?',
                body: `Hey, Any chance you’re free this Saturday?
                 Thinking about checking out the new café downtown.
                 Let me know!`,
                isRead: Math.random() > 0.5,
                sentAt: Date.now(),
                removedAt: null,
                from: 'auroracode.network@gmail.com',
                to: 'user@appsus.com'
            },
        ]
        utilService.saveToStorage(MAIL_KEY, mails)
    }

}
