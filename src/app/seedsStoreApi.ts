// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiUrl = "https://demo1087320.mockable.io/";
/**
* Creates list for providesTags for use in API configuration
*
* @param resultsWithIds The results from the API query
* @param tagType The type of Tag the list provides
*
* @returns A list of Tags with ids or a virtual LIST with Tag Type of tagType
*/
export function providesList<R extends { id: string | number }[], T extends string>(
    resultsWithIds: R | undefined,
    tagType: T
) {
    return resultsWithIds
        ? [
            { type: tagType, id: 'LIST' },
            ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
        ]
        : [{ type: tagType, id: 'LIST' }]
}

/**
* Configure the SeedStoreApi App service using a base URL and expected endpoints
*
* The base query is used in the split-up parts of the API, so, the final / is
* omitted.
* The TagTypes are configure globally here for the the whole API
*/
export const seedStoreApi = createApi({
    reducerPath: 'SeedStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: async (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }),
    tagTypes: [
        'Products',
        'UNAUTHORIZED',
        'UNKNOWN_ERROR'
    ],
    endpoints: () => ({}),
})
