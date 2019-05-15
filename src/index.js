const fetch = require("node-fetch");

class Instagram {
	constructor(username, pass) {
		this.user = username;
		this.pass = pass;
	}
}

module.exports = {
    Instagram
}
