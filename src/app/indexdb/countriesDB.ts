import Dexie, { Table } from "dexie";
import { ICountry } from "../interfaces/country";

export class CountriesDB extends Dexie {
    public countries!: Table<ICountry, number>

    constructor(){
        super('countriesDB')
        this.version(1.1).stores({
            countries: '++id,name,tld,currencies,capital,region,subregion,languages,flags,population,borders'
        })
    }
}

export const db = new CountriesDB()
