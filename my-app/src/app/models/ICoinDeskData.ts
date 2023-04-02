import { ICoinDeskItem } from "./ICoinDeskItem";

export interface ICoinDeskData {
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
      };
      disclaimer: string;
      chartName: string;
      bpi: {
        USD: ICoinDeskItem;
        GBP: ICoinDeskItem;
        EUR: ICoinDeskItem;
      };
}