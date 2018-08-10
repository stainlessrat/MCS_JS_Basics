class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHi(){
        return 'Hello, ' + this.name;
    }
}

//наследование
class Female extends User{
    sayHi(){
        return 'Привет, ' + this.name + '! Ты зарегистрирована';
    }
}

const Man = new User('someone', '123@yu.com', '123456');
console.log(Man);

const  Anya = new Female('Аня', '8687@lol.com', 'qwerty');
console.log(Anya);