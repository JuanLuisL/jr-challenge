class People {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
}

class Credentials extends People {
    constructor(data) {
        super(data.email, data.password);
    }
}

export default { Credentials };
