import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useMainStore = defineStore('main', {
  state: () => ({
    list: [{
      id: 1,
      name: 'John Doe',
      tel: '1234567890',
      createdDate: new Date(),
      totalPrice: 8,
      shipped: {
        done: false,
        date: null,
        by: null,
        address: '1234 Main St, Anytown, USA',
      },
      paid: {
        done: false,
        method: 'cash',
        date: null,
        cashier: null,
      },
      carpets: [{
        id: 1,
        dimensionsX: '1',
        dimensionsY: '2',
        price: 2,
        quantity: 1,
      }, {
        id: 2,
        dimensionsX: '2',
        dimensionsY: '3',
        price: 6,
        quantity: 2,
      }],
    },
    {
      id: 2,
      name: 'Jane White',
      tel: '0987654321',
      createdDate: new Date(),
      totalPrice: 20,
      shipped: {
        done: true,
        date: new Date(),
        by: 'Sam Smith',
        address: '4321 Elm St, Anytown, USA',
      },
      paid: {
        done: true,
        method: 'cash',
        date: new Date(),
        cashier: 'Sam Smith',
      },
      carpets: [{
        id: 3,
        dimensionsX: '3',
        dimensionsY: '4',
        price: 12,
        quantity: 1,
      }, {
        id: 4,
        dimensionsX: '4',
        dimensionsY: '5',
        price: 8,
        quantity: 1,
      }],
    }],
  }),
  actions: {
    // increment() {
    //   this.count += 1;
    // },
    // setName(newName: string) {
    //   this.name = newName;
    // },
  },
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
});
