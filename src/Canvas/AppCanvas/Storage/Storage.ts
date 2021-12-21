export default interface Storage {
    save: (data: any, key: string) => void;
    get: (key: string) => any | undefined;
    delete: (key: string) => void;
}