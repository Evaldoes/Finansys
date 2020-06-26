import {InMemoryDbService, httpClientInMemBackendServiceFactory} from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService{

    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "pagamentos de contas da casa"},
            {id: 2, name: "Saldo", description: "plano de saúde e remédios"},
            {id: 3, name: "Lazer", description: "Cinemas, parques, praia, etc"},
            {id: 4, name: "Salário", description: "Recebimento de Salário"},
            {id: 5, name: "Freelas", description: "Trabalho como freelancer"},

        ];

        return {categories}
    }
}

