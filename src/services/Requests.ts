import { catchError, of } from "rxjs";
import { tap } from "rxjs/operators";
import { API } from "./APIRequests";

interface ICardProduct {}

class Requests {
  getProducts = async ({ set, category }: { set: any; category: string }) => {
    API.getProducts({ category })
      .pipe(
        tap((dataR: ICardProduct[]) => {
          set(dataR);
        }),
        catchError(PrintAlertError())
      )
      .subscribe();
  };

  getProduct = ({ id, success }: { id: string; success: any }) => {
    API.getProduct(id)
      .pipe(
        tap((product: ICardProduct) => success(product)),
        catchError(PrintAlertError())
      )
      .subscribe();
  };
}

export const APIData = new Requests();

const PrintAlertError = () => (err: any) => {
  console.log(err);

  return of(err);
};
