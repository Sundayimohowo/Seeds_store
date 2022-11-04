import { providesList, seedStoreApi } from "./seedsStoreApi";
import { Product } from "./types";

/**
* Configures the connection between the SeedStoreApi and VibesDomain App
* for the endpoints involved with managing Products.
*
*/
export const productsApi = seedStoreApi.injectEndpoints({
  endpoints: (builder) => ({


    /**
    * Configures the GET request to retrieve products
    * @params void
    * @returns Products - products types
    */
    products: builder.query<Product[], void>({
        query: () => `/products`,
        providesTags: (result) => providesList(result, 'Products'),
      }),

   /**
    * Configures the GET request to retrieve a specific Product
    *
    * @param id - The id of a Product
    *
    * @returns Product - The specified Product
    */
    productDetails: builder.query<Product, string>({
        query: (id: string) => `/products/${id}`,
        providesTags: (result, error, id) =>
          result
            ? [{ type: 'Products', id }]
            : error?.status === 401
              ? ['UNAUTHORIZED']
              : ['UNKNOWN_ERROR'],
      }),
  

  }),
  overrideExisting: true,
})


/**
* Export the hooks for using the RTK Query API inside components
*
*/
export const {
    useProductsQuery,
    useProductDetailsQuery
} = productsApi
