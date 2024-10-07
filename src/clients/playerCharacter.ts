import { formatUrl } from './api';
import { Configuration, PlayerCharacterApi } from '@vagabondvault/player-character';

const playerCharacterClient = new PlayerCharacterApi(
    new Configuration({
        basePath: 'http://localhost/api/v1',
    })
);

export const usePlayerCharacter = () => {
    return {
        get: (id: number) => playerCharacterClient.getPlayerCharacterById(id).then(({ data }) => data),
    }
};