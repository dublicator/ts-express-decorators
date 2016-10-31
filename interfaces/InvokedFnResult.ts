import * as Promise from "bluebird";

export interface IInvokedFNResult {
    result: Promise<any> | any | void;
    impliciteNext: boolean;
}