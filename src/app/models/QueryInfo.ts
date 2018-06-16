import { OrderBy } from "./OrderBy";

export class QueryInfo {
    constructor(
        private _page: number,
        private _size?: number,
        private _orderBy?: OrderBy,
        private _sort?: string
    ) { }
    get page() {
        return this._page;
    }
    set page(page: number) {
        this._page = page;
    }
    get size() {
        return this._size;
    }
    set size(size: number) {
        this._size = size;
    }
    get orderBy() {
        return this._orderBy;
    }
    set orderBy(orderBy: OrderBy) {
        this._orderBy = orderBy;
    }
    get sort() {
        return this._sort;
    }
    set sort(sort: string) {
        this._sort = sort;
    }
}