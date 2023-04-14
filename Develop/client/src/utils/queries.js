import { gql } from "@apollo/client";

export const GET_BOOK=gql`
{
    getBook{
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
    }
}`
