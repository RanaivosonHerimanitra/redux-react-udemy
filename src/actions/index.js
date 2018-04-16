export const BOOK_SELECTED="BOOK_SELECTED"
//selectBook is an action creator
export function selectBook(book) {
    console.log("book has been selected!!", book.title)
    return {
        type: BOOK_SELECTED,
        payload: book
    }
    
}