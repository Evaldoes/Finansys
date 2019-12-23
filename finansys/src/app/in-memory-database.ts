import {InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService{
    createDb() {
        const categories = [
            {id: 1, name: 'moradia', description: 'Pagamentos de Contas da Casa'},
            {id: 2, name: 'Saúde', description: 'Planos de Saúde e Remédios'},
            {id: 3, name: 'Lazer', description: 'Cinema, parques, paraia,etc'},
            {id: 4, name: 'Salário', description: 'Recebimento de salário'},
            {id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ];
    }

}