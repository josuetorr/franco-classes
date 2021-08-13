export interface IBase {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;
}

export default class Base {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;

    constructor(props?: IBase) {
        this.id = props?.id;
        this.createdAt = props?.createdAt;
        this.updatedAt = props?.updatedAt;
        this.isDeleted = props?.isDeleted;
    }
}
