export interface SearchResponse<T> {
    /** The Results */
    results: Array<T>;
    /** Indicates if there is a next page */
    hasNextPage?: boolean;
    /** The Intuit Transaction ID from the response header */
    intuitTID: string;
}
