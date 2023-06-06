export class Api {
    constructor(options) {
        this.url = options.url;
        this.header = options.header;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    async getCard() {
        return fetch(this.url, {
            headers: this.header,
        })
            .then(this._handleResponse)
    }
}

const api = new Api(
    {
        url: 'https://my-json-server.typicode.com/savayer/demo/posts',
        header: {
            'Content-type': 'application/json'
        }
    }
);

export default api;