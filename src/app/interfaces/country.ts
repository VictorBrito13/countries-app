export interface ICountry {
    name: {
        common: string;
        official: string;
    };
    tld: string[];
    currencies: {};
    capital: string[];
    region: string;
    subregion: string;
    languages: {},
    flags: { svg: string, png: string, alt: string };
    population: number;
    borders: string[];
}