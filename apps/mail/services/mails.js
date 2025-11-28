import { utilService } from "../../../services/util.service.js";

export const demoMails = [
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Quick Update on Tomorrow’s Meeting',
        body: `Hi team,Just a reminder that our check-in is scheduled for 10:00 AM tomorrow.
         I’ll share the agenda shortly.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "skyline.techhub27@gmail.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Project Deadline Reminder',
        body: `Hello,Please ensure that all deliverables are submitted by end of day Friday.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "dev.team42@gmail.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Weekly Newsletter',
        body: `Greetings! Here’s your weekly update on industry news and trends.
        Don’t forget our team outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "newsletter@techdaily.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Invitation to Webinar',
        body: `Join us for an exclusive webinar on web development best practices.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "events@webinars.io",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Feedback Request',
        body: `Hi,We’d love to hear your thoughts on our new product update.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "support@techhub.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Your Subscription is Expiring',
        body: `Reminder: Your subscription will expire in 3 days. Renew to avoid service interruption.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "billing@softwaresuite.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Team Outing Next Week',
        body: `Hey team, Don’t forget our team outing scheduled for next Friday.
         RSVP if you haven’t yet.Don’t forget our team outing scheduled for next Friday. 
         RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "hr@companymail.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Security Alert: Password Change',
        body: `Your account password was recently changed. If this wasn’t you, please contact support immediately.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "security@webapp.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'New Feature Announcement',
        body: `Exciting news! We’ve launched a new feature to make 
        your experience even better.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "updates@techworld.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Reminder: Team Meeting at 3 PM',
        body: `Quick reminder about our meeting today at 3 PM. Don’t forget to bring your updates.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "teamlead@projects.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Quick Update on Tomorrow’s Meeting',
        body: `Hi team,Just a reminder that our check-in is
                 scheduled for 10:00 AM tomorrow. I’ll share the agenda shortly.
                 Don’t forget our team outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "skyline.techhub27@gmail.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Thank You!',
        body: `Hey, Thanks for helping me with the report yesterday.
                 Your insights really made the difference. Appreciate it!`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
                 Thanks for shopping with us!Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
                 I want to make sure we’re aligned before moving forward.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
                 Hope you get to relax and celebrate.Don’t forget our
                  team outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
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
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'lunarforge.creative@gmail.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Invoice Attached',
        body: `Good afternoon, Please find the invoice for this month attached to this email.
                 Let me know if you need anything else.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'zenithalpha.team@pm.me',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Quick Question',
        body: `Hi, Do you remember where we stored last year’s presentation files?
                 I can’t seem to find them in the shared drive.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'cobaltstream.data@fastmail.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Welcome to the Team!',
        body: `Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.
                 Don’t forget our team outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
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
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'auroracode.network@gmail.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Quick Update on Tomorrow’s Meeting',
        body: `Hi team,Just a reminder that our check-in is scheduled for 10:00 AM tomorrow.
         I’ll share the agenda shortly.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'user@appsus.com',
        to: "skyline.techhub27@gmail.com",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Project Deadline Reminder',
        body: `Hello,Please ensure that all deliverables are submitted by 
        end of day Friday.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: 'dev.team42@gmail.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Weekly Newsletter',
        body: `Greetings! Here’s your weekly update on industry news and trends.
        Don’t forget our team outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: "newsletter@techdaily.com",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Invitation to Webinar',
        body: `Join us for an exclusive webinar on web development best practices.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: "events@webinars.io",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Feedback Request',
        body: `Hi,We’d love to hear your thoughts on our new product update.
        Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: "support@techhub.com",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Your Subscription is Expiring',
        body: `Reminder: Your subscription will expire in 3 days. Renew to
         avoid service interruption.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: "billing@softwaresuite.com",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Team Outing Next Week',
        body: `Hey team, Don’t forget our team outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: "hr@companymail.com",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Security Alert: Password Change',
        body: `Your account password was recently changed. If this wasn’t you, please contact support immediately.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: 'user@appsus.com',
        to: "security@webapp.com",
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'New Feature Announcement',
        body: `Exciting news! We’ve launched a new feature to make your experience even 
        better.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        removedAt: null,
        from: "updates@techworld.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Reminder: Team Meeting at 3 PM',
        body: `Quick reminder about our meeting today at 3 PM. Don’t forget to bring your updates.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        removedAt: null,
        from: "teamlead@projects.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Quick Update on Tomorrow’s Meeting',
        body: `Hi team,Just a reminder that our check-in is
                 scheduled for 10:00 AM tomorrow. I’ll share the agenda shortly.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: null,
        from: "skyline.techhub27@gmail.com",
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Thank You!',
        body: `Hey, Thanks for helping me with the report yesterday.
                 Your insights really made the difference. Appreciate it!Don’t forget our team 
                 outing scheduled for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
        isStarred: Math.random() > 0.5,
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
                 I want to make sure we’re aligned before moving forward.
                 Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
                 Hope you get to relax and celebrate.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
                 I’d like to review the new designs together. Let me know what works.
                 Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
        isStarred: Math.random() > 0.5,
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
                 I can’t seem to find them in the shared drive.Are you available for a 20-minute call on Thursday afternoon?
                 I’d like to review the new designs together. Let me know what works.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
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
                 Your account access will be set up by the end of the day.Hi, We’re excited to have you on board!
                 Your account access will be set up by the end of the day.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'pixelhaven.dev@outlook.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        subject: 'Weekend Plans?',
        body: `Hey, Any chance you’re free this Saturday?
                 Thinking about checking out the new café downtown.
                 Let me know! Don’t forget our team outing scheduled 
                 for next Friday. RSVP if you haven’t yet.`,
        isRead: Math.random() > 0.5,
        isStarred: Math.random() > 0.5,
        sentAt: Date.now(),
        removedAt: Date.now(),
        from: 'auroracode.network@gmail.com',
        to: 'user@appsus.com'
    },
]
