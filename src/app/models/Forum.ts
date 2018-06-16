import { Category } from "./Category";

export interface Forum {

    category: {
        name: string,
        order: number
    },
    categoryId: any;
    name: string;
    id: number;


}