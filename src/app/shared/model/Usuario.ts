export class Usuario{

  id?: string;
  nome = '';
  cpf = '';
  idade: string;
  senha: string;
  email: string;

  constructor(id?: string, usuario: Usuario = {nome: '', cpf: '', idade: '', senha: '', email: ''}) {
  this.id = id;
  this.cpf = usuario.cpf;
  this.nome = usuario.nome;
  this.idade = usuario.idade;
  this.senha = usuario.senha;
  this.email = usuario.email;
  }
}
