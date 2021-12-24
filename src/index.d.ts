import picgo from 'picgo';
declare const _default: (ctx: picgo) => {
    register: () => void;
    config: (ctx: any) => {
        name: string;
        type: string;
        alias: string;
        default: any;
        message: string;
        required: boolean;
    }[];
};
export = _default;
