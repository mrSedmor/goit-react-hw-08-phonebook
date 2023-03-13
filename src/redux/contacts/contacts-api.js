import { createApi } from '@reduxjs/toolkit/query/react';
import sortContacts from 'shared/services/sort-contacts';
import insertIntoSortedContacts from 'shared/services/insert-into-sorted-contacts';
import axiosBaseQuery from 'shared/services/axios-base-query';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({ url: '/contacts', method: 'get' }),
      transformResponse: contacts => {
        const sortedContacts = [...contacts];
        sortContacts(sortedContacts);
        return sortedContacts;
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),

    addContact: build.mutation({
      query: contact => ({ url: '/contacts', method: 'POST', data: contact }),
      // Після додавання контакта, список контактів вважаємо неактуальним,
      // нехай rtkQ сам його оновить
      invalidatesTags: result => {
        return result ? [{ type: 'Contacts', id: 'LIST' }] : [];
      },
      // Песимістичне оновлення
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: newContact } = await queryFulfilled;
          dispatch(
            contactsApi.util.updateQueryData(
              'getContacts',
              undefined,
              contacts => {
                insertIntoSortedContacts(contacts, newContact);
              }
            )
          );
        } catch {}
      },
    }),

    deleteContact: build.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      // Список контактів буде визнано неактуальним, бо неактуальним визнано один з контактів
      invalidatesTags: (result, _, id) =>
        result ? [{ type: 'Contacts', id }] : [],
      // Оптимістичне оновлення (видалення):
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        const update = dispatch(
          contactsApi.util.updateQueryData(
            'getContacts',
            undefined,
            contacts => {
              const index = contacts.findIndex(contact => contact.id === id);
              if (index < 0) {
                return;
              }
              contacts.splice(index, 1);
            }
          )
        );
        queryFulfilled.catch(() => {
          update.undo();
        });
      },
    }),

    updateContact: build.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'PATCH',
        data: contact,
      }),
      // Список контактів буде визнано неактуальним, бо неактуальним визнано один з контактів
      invalidatesTags: (result, _, id) =>
        result ? [{ type: 'Contacts', id }] : [],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
