export class CommonUtility {

    static isEmpty = (obj:any) => {
        return obj !== undefined && obj !== null && obj.length > 0;
    }

    static timeout = (ms:any) => {
        return new Promise(resolve => setTimeout(resolve,ms));
    }
}