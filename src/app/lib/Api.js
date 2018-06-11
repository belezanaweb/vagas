const PROTOCOL = "http";
const DOMAIN = "www.mocky.io";
const SUBDOMAIN = "v2";
const PATH = "5b15c4923100004a006f3c07";

class Api {

    static headers() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
    }

    static get(path = PATH) {
        return this.xhr(path, null, "GET");
    }

    static async xhr(path, params, verb) {

        const url = `${PROTOCOL}://${DOMAIN}/${SUBDOMAIN}/${path}`;

        const options = {
            headers: this.headers(),
            method: verb
        };

        if (params) {
            options.body = JSON.stringify(params);
        }

        const response = await fetch(url, options);
        const json = response.json();

        return json;
    }
}

export default Api;
