class Custumer {
    constructor(name){
        this.name = name;
    }
    buy(){
        return 'Куплено';
    }
}
class childCustumer extends Custumer{
    getPresent(){
        return 'Шарик в подарок';
    }
}