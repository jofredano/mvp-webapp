import { utilNvl } from '../utils';

export default {
    PORT: parseInt( utilNvl( process.env.PORT, '80'), 10),
    ENVIRONMENT: utilNvl( process.env.ENVIRONMENT, 'none'),
    API: {
        CONTEXT: utilNvl( process.env.API_CONTEXT, '/api/v2')
    },
    SMTP: {
        HOST: utilNvl( process.env.MAIL_SMTP_HOST, 'localhost'),
        PORT: parseInt( utilNvl( process.env.MAIL_SMTP_PORT, '8080'), 10)
    }
};