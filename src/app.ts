// 1

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number = 50;
let names: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback= (a: number): number  => { return 100 + a };



// 2 

// let anything = -20;
// anything = 'Text';
// anything = {};


let anything: string | {} = -20;
anything = 'Text';
anything = {};



//3 

// let some:unknown;
// some = 'Text';

// let str: string;

// str = some;

let some: string;
some = 'Text';

let str: string;

str = some;


// 4

// let person = ['Max', 21];

let person: [string, number] = ['Max', 21];




// 5/6/7

//  Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
// Зробіть змінну, яка може приймати або рядок, або число.
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'



enum State {
    ready = "READY",
    loading = "LOADING"
};

let random: string | number;

type Texts = 'enable' | 'disable';
let button: Texts;




// 8 Вкажіть типи для наступних функцій

// function showMessage(message) {
//     console.log(message);
//    }
   
//    function calc(num1, num2) {
//     return num1 + num2;
//    }
   
//    function customError() {
//     throw new Error('Error');
//    }


function showMessage(message: string): void {
    console.log(message);
   }
   
   function calc(num1: number, num2: number): number {
    return num1 + num2;
   }
   
   function customError(): string {
    throw new Error('Error');
   }





// 9 Створіть свій тип даних на основі наявних даних.


type Pages = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: {
        [key: string]: string,
    }
}


const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
   }
   
   const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
   }