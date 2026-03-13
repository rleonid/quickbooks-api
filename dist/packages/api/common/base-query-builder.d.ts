import { DeepKeys, Query, SearchOptions } from '../../../types/types';
export declare abstract class BaseQueryBuilder<T> {
    protected readonly endpoint: string;
    protected readonly baseQuery: Query;
    /**
     * The Search Options
     */
    searchOptions: SearchOptions<T>;
    /**
     * The Where Clauses
     */
    protected whereClauses: Array<string>;
    /**
     * Constructor
     * @param endpoint - The Endpoint
     * @param baseQuery - The Base Query
     */
    constructor(endpoint: string, baseQuery: Query);
    /**
     * Where ID
     * @param id - The ID
     * @returns The Query Builder
     */
    whereId(id: string): this;
    /**
     * Where Last Updated After
     * @param date - The Date
     * @returns The Query Builder
     */
    whereLastUpdatedAfter(date: Date): this;
    /**
     * Where Last Updated Before
     * @param date - The Date
     * @returns The Query Builder
     */
    whereLastUpdatedBefore(date: Date): this;
    /**
     * Where Created After
     * @param date - The Date
     * @returns The Query Builder
     */
    whereCreatedAfter(date: Date): this;
    /**
     * Where Created Before
     * @param date - The Date
     * @returns The Query Builder
     */
    whereCreatedBefore(date: Date): this;
    /**
     * Set the Search Options
     * @param options - The Search Options
     * @returns The Query Builder
     */
    setSearchOptions(options: SearchOptions<T>): this;
    /**
     * Build the Query
     * @returns The URL
     */
    build(): string;
    /**
     * Builds the Search Options
     * @returns The Search Options
     */
    protected buildSearchOptions(): string;
    protected addDateFilter(field: DeepKeys<T>, date: Date, operator: '>' | '<' | '='): void;
}
