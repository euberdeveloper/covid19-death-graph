import axios from 'axios';

const ENDPOINT = 'https://api.covid19api.com';

interface Country {
    name: string;
    slug: string;
}

interface Record {
    timestamp: string;
    confirmed: number;
    recovered: number;
    deaths: number;
}

interface CountryRecords {
    slug: string;
    records: Record[];
}


export async function getCountries(): Promise<Country[]> {
    try {
        const countries = (await axios.get(`${ENDPOINT}/countries`)).data;
        return countries
            .map(el => ({
                name: el.Country,
                slug: el.Slug
            }))
            .reduce((acc, curr) => acc.find(el => el.slug === curr.slug) ? acc : [...acc, curr], [])
            .slice(1);
    }
    catch (error) {
        throw { message: 'Error in /countries api', error };
    }
}


export async function getCountryRecords(slug: string): Promise<CountryRecords> {
    try {
        const confirmed = (await axios.get(`${ENDPOINT}/total/country/${slug}/status/confirmed`)).data;
        const recovered = (await axios.get(`${ENDPOINT}/total/country/${slug}/status/recovered`)).data;
        const deaths = (await axios.get(`${ENDPOINT}/total/country/${slug}/status/deaths`)).data;

        const startConfirmed = confirmed[0].Date;
        const startRecovered = recovered[0].Date;
        const startDeaths = deaths[0].Date;

        const startDate = new Date([startConfirmed, startRecovered, startDeaths].sort()[0]);
        const today = new Date();
        const endDate = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);

        const result: CountryRecords = {
            slug,
            records: []
        };

        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const timestamp = date.toISOString();

            const record: Record = {
                timestamp,
                confirmed: confirmed[0].Date === timestamp.replace('.000Z', 'Z') ? (confirmed.shift()).Cases : 0,
                recovered: recovered[0].Date === timestamp.replace('.000Z', 'Z') ? (recovered.shift()).Cases : 0,
                deaths: deaths[0].Date === timestamp.replace('.000Z', 'Z') ? (deaths.shift()).Cases : 0,
            };
            result.records.push(record);
        }

        return result;
    }
    catch (error) {
        throw { message: 'Error in /get-country-data api', error };
    }
}