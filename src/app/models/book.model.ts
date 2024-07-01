export interface Book {
    id?: number;    // O ID é opcional para o caso de novos livros ainda não terem um ID definido
    title: string;
    author: string;
    year: number;
    genre?: string; // O gênero é opcional
  }
  