import { Configuration, PlayerCharacterApi } from '@vagabondvault/api';

const playerCharacterClient = new PlayerCharacterApi(
    new Configuration({
        basePath: 'http://localhost/api/v1',
    })
);

export const usePlayerCharacter = () => {
    return {
        get: (id: number) => playerCharacterClient.getPlayerCharacter(id).then(({ data }) => data),
    }
};