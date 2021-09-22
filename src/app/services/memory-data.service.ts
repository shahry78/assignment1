import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Group1' },
      { id: 11, name: 'Group2' },
      { id: 12, name: 'Group3' },
      { id: 13, name: 'Group4' },
      { id: 14, name: 'Group5' }
    ];
    const channels = [
      { id: 10, name: 'Channel1' },
      { id: 11, name: 'Channel2' },
      { id: 12, name: 'Channel3' },
      { id: 13, name: 'Channel4' },
      { id: 14, name: 'Channel5' }
    ];
    
    const normalUsers = [
      { id: 10, name: 'user1@gmail.com' },
      { id: 11, name: 'user2@gmail.com' },
      { id: 12, name: 'user3@gmail.com' },
      { id: 13, name: 'user4@gmail.com' },
      { id: 14, name: 'user5@gmail.com' }
    ];
    return { heroes,channels,normalUsers };
    

  }
}
