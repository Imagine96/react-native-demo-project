import { ParamListBase } from "@react-navigation/native";

export interface NFTItemType {
    "id": string;
    "name": string;
    "creator": string;
    "price": number;
    "description": string;
    "image": any;
    "bids": NFTItemBidType[];
}

export interface NFTItemBidType {
    "id": string;
    "name": string;
    "price": number;
    "image": any;
    "date": string;
}

export interface RootStackParamList extends ParamListBase {
    Home: undefined,
    Details: NFTItemType
}