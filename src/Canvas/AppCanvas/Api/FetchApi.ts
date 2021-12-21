import Api from './Api';

export default class FetchApi implements Api {
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    get = () => {
      // .. implement fetch
    }
}