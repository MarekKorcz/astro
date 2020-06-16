const router = require('express').Router()

router.get('/', (req, res) => {
    
    res.render('common/homepage')
})

router.post('/contact-message', (req, res) => {

    let name = req.body.name
    let email = req.body.email
    let topic = req.body.topic
    let description = req.body.description

    if (name && email && topic && description) {
        
        const {
            CONTACT_FORM_EMAIL,
            CONTACT_FORM_PASS
        } = process.env

        const nodemailer = require('nodemailer')
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: CONTACT_FORM_EMAIL,
                pass: CONTACT_FORM_PASS
            }
        })

        let mailOptions = {
            from: CONTACT_FORM_EMAIL,
            to: CONTACT_FORM_EMAIL,
            subject: topic,
            text: `
                Imie: ${name}, 
                Email: ${email}, 
                Temat: ${topic}, 
                Opis: ${description}
            `
        }

        let outcome = {
            status: 'error',
            message: 'Niestety nie udało się wysłać wiadomości. Spróbuj ponownie.'
        }

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return res.end(JSON.stringify(outcome))
            } else {
                outcome.status = 'success'
                outcome.message = 'Wiadomość została wysłana!'
                return res.end(JSON.stringify(outcome))
            }
        })
    }
})

router.get('/reservation', (req, res) => {
    
    res.render('common/reservation')
})

router.get('/session', (req, res) => {
    
    res.render('common/session')
})

module.exports = router