import { Configuration, RoguishFeatApi } from '@vagabondvault/api';

const client = new RoguishFeatApi(
    new Configuration({
        basePath: 'http://localhost/api/v1',
    })
);

export const useRoguishFeats = () => {
    return {
        list: () => client.listroguishFeats().then(({ data }) => data),
        get: (id: number) => client.getroguishFeat(id).then(({ data }) => data),
    }
};