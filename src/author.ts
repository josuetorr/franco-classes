import Base, { IBase } from "./base";

export interface IAuthor extends IBase {
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    articleIds: string[];
}

export default class Author extends Base {
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    articleIds: string[];

    constructor(props?: IAuthor) {
        super(props);
        this.firstName = props?.firstName ?? "";
        this.lastName = props?.lastName ?? "";
        this.email = props?.email ?? "";
        this.bio = props?.bio ?? "";
        this.articleIds = props?.articleIds ?? [];
    }
}
