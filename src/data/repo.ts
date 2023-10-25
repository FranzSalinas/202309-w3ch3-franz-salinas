import { Pets } from '../models/pets';

export const repo = () => {
  const data: Pets[] = [
    {
      id: crypto.randomUUID(),
      name: 'Juancho',
      owner: 'Serafin',
      race: 'German sheper',
      isAdopted: false,
    },

    {
      id: crypto.randomUUID(),
      name: 'Nitin',
      owner: 'Juan',
      race: 'Canarian Retriever',
      isAdopted: false,
    },

    {
      id: crypto.randomUUID(),
      name: 'Bruno',
      owner: 'Ivana',
      race: 'Brasilian sheper',
      isAdopted: false,
    },

    {
      id: crypto.randomUUID(),
      name: 'Elias',
      owner: 'Sergi',
      race: 'Spaniar sheper',
      isAdopted: false,
    },
  ];
  return data;
};
