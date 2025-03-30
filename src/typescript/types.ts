export interface TableData {
  description: string;
  column1Name: string;
  column2Name: string;
  columnValue: {
    key: string;
    column1: string;
    column2: string;
  }[];
}

export interface OfertaItem {
  key: string;
  title: string;
  icon: string;
  text: string;
}

export interface FormData {
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: any;
  companyName: string;
  nip: any;
  message: string;
}
