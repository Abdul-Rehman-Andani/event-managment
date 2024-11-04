export class ErrorHandler extends Error {
    constructor(massage, statusCode){
        super(message);
        this.message = massage;
        this.statusCode = statusCode;
    }
}