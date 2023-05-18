export class Usuario{

  constructor(public id: number = 0,
              public nome: string = '',
              public email: string = '',
              public senha: string = '',
              public cpf: string = '',
              public idade: string = '') {
  }
}
