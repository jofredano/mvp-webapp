import { utilNvl } from '../utils';

export default {
    PORT: parseInt( utilNvl( process.env.PORT, '8080'), 10),
    SMTP: {
        HOST: utilNvl( process.env.MAIL_SMTP_HOST, 'localhost'),
        PORT: parseInt( utilNvl( process.env.MAIL_SMTP_PORT, '8080'), 10)
    }
};