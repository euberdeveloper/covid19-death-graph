import axios from 'axios';

const ENDPOINT = 'https://api.covid19api.com';

interface Country {
    name: string;
    slug: string;
}
type Countries = Country[];

interface Record {
    timestamp: string;
    cases: number;
}
type Records = Record[];

interface CountryRecords {
    slug: string;
    confirmed: Records;
    recovered: Records;
    deaths: Records;
}

export async function getCountries(): Promise<Countries> {
    try {
        const countries = await axios.get(`${ENDPOINT}/countries`);
        // return countries.map(el => ({
        //     name: el.Country,
        //     slug: el.Slug
        // }));
        return []
    }
    catch (error) {
        throw { message: 'Error in /countries api', error };
    }
}


export async function getCountryRecords(slug: string): Promise<CountryRecords> {
    try {
        const rawConfirmed = await axios.get(`${ENDPOINT}/dayone/country/${slug}/status/confirmed`);
        const rawRecovered = await axios.get(`${ENDPOINT}/dayone/country/${slug}/status/recovered`);
        const rawDeaths = await axios.get(`${ENDPOINT}/dayone/country/${slug}/status/deaths`);

        const confirmed = rawConfirmed.map(record => ({
            
        }));
    }
    catch (error) {

    }
}