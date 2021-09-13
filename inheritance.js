class Parent {
    constructor() {
        this.fatherName = 'Eocono-Fx';

    }
}
class Child extends parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullNam() {
        return this.name + this.fatherName;
    }
}

const baby = new Child('Karana');
const baby2 = new Child('justin');
console.log(baby);
console.log(baby.getFullNam());
console.log(baby2.getFullNam());