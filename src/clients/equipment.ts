import { Configuration, EquipmentApi } from '@vagabondvault/api';

const client = new EquipmentApi(
    new Configuration({
        basePath: 'http://localhost/api/v1',
    })
);

export const useRoguishFeats = () => {
    return {
        list: () => client.listEquipment().then(({ data }) => data),
        get: (id: number) => client.getEquipment(id).then(({ data }) => data),
    }
};