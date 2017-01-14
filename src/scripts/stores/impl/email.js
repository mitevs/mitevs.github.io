import BaseStore from '../base';
import $ from 'jquery';

class EmailStore extends BaseStore {
    constructor() {
        super({
            'SEND_EMAIL': 'sendEmail'
        });
    }

    sendEmail(data) {
        $.ajax({
            url: "https://formspree.io/stefomitev@gmail.com",
            method: "POST",
            data: {email: data.email, message: data.message}, 
            dataType: "json",
            crossDomain: true
        }).then(() => {
            this.emit('change');
        }).fail(e => {
            this.emit('error', e)
        });
    }
}

export default new EmailStore()