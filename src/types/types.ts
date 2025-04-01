export interface PriceListTableData {
  description: string;
  column1Name: string;
  column2Name: string;
  columnValue: {
    key: string;
    column1: string;
    column2: string;
  }[];
}

export interface ItemOffer {
  key: string;
  title: string;
  icon: string;
  text: string[];
}

export interface FormData {
  name: string;
  surname: string;
  email: string;
  number: string;
  company: string;
  nip: string;
  message: string;
}
