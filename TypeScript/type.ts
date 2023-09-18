// class Default {
//     texto: string;
//     // numero: number;
//     qualquer: any;
//     // boleano: boolean;
//     array: Array<any>;
//     // array2: any[];

//     constructor(){
//         this.metodo();
//         this.array = [{
//             teste: 'teste'
//         }]
//     }
//     metodo(){
//         // return this.texto = 'Teste';
//         // this.numero = 10;
//         this.texto = "Este é uma alert simples em typeScript"
//         return alert(this.texto)
//     }
// }

//Tipagem de dados 
//String
//Number 
//Any
//Boolean
//Array 

// let a: [string , any][] =[
//     ['url' , 'http://localhost'],
//     ['post' ,  8880]
// ];

// function funcao(){
//     a.forEach(element=>{
//         console.log(element[1]);
//     } )
// }
// funcao();


// enum CardSuits{
//     Clubs, 
//     Hearts, 
//     Spades, 
//     Diamonds
// }

// function funcao1(){
//     let x = 1
//     if(x === CardSuits.Clubs){
//         alert('True')
//     }else{
//         alert('False')
//     }
//     console.log(CardSuits.Clubs);
    
// }


//Criar objetos 
let obj :{name:string, age:number, active:boolean} = {
    name:'Julio Cesar',
    age: 25,
}

let obj2 = {[key: string]: any} ={
    name: 'julio',
    bar: true
}

function func(){
    obj2.name
}

