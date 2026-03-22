// console.log(this);

const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function () {
        return `${this.lastName} ${this.firstName}`;
    },
    dekayName: function () {
        setTimeout(() =>{
            console.log(this.fullName());
        },2000);
        
}}

