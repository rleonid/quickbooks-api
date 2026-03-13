import { AuthScopes, type Token, type IdToken, type UserProfile, Environment } from '../../types/types.js';
/**
 * The Auth Provider is responsible for handling the OAuth2 flow for the application.
 * It is responsible for generating the OAuth2 URL and handling the callback.
 */
export declare class AuthProvider {
    private readonly clientId;
    private readonly clientSecret;
    private readonly redirectUri;
    private readonly scopes;
    private token?;
    private readonly environment;
    readonly serializationHeader = "QBOAUTHTOKEN";
    /**
     * The Auth Header for the application
     */
    readonly authHeader: string;
    /**
     * The Event Emitter for the Auth Provider
     */
    private readonly eventEmitter;
    /**
     * Wether to automatically refresh the token when it is expired
     */
    private autoRefresh;
    /**
     * Initialize the Auth Provider
     * @param clientId The client ID for the application *Required*
     * @param clientSecret The client secret for the application *Required*
     * @param redirectUri The redirect URI for the application *Required*
     * @param scopes The scopes for the application *Required*
     * @param token The token for the application (optional)
     * @param environment The environment to use for the application (optional, defaults to Production)
     */
    constructor(clientId: string, clientSecret: string, redirectUri: string, scopes: Array<AuthScopes>, token?: Token | undefined, environment?: Environment);
    /**
     * Enable the Auto Refresh
     */
    enableAutoRefresh(): void;
    /**
     * Disable the Auto Refresh
     */
    disableAutoRefresh(): void;
    /**
     * Get the Access Token
     * @throws {QuickbooksError} If the token is not provided
     * @returns {string} The access token
     */
    getToken(): Promise<Token>;
    /**
     * Set the Token
     * @param token The token to set
     * @throws {QuickbooksError} If the token is not provided
     */
    setToken(newToken: Token | null): Promise<void>;
    /**
     * Generates the OAuth2 URL to get the auth code from the user
     * @param state The state to use for the OAuth2 URL (optional, auto-generated if not provided)
     * @param nonce The nonce to use for OpenID Connect (optional, auto-generated if SSO is enabled)
     * @returns {URL} The OAuth2 URL to get the auth code from the user
     */
    generateAuthUrl(state?: string, nonce?: string): URL;
    /**
     * Exchanges an Auth Code for a Token
     * @param code The auth code to exchange for a token
     * @param realmId The realm ID from the OAuth callback
     * @param nonce Optional nonce to validate the ID token (should match the one used in generateAuthUrl)
     * @param autoFetchUserProfile Whether to automatically fetch user profile when SSO is enabled (default: true)
     * @throws {QuickbooksError} If the token is not provided or the refresh token is expired
     * @returns {Promise<Token>} The token
     */
    exchangeCode(code: string, realmId: string, nonce?: string, autoFetchUserProfile?: boolean): Promise<Token>;
    /**
     * Exchanges a Refresh Token for a Token
     * @param refreshToken The refresh token to exchange for a token
     * @throws {QuickbooksError} If the token is not provided or the refresh token is expired
     * @returns {Promise<Token>} The refreshed token
     */
    refresh(): Promise<Token>;
    /**
     * Revokes a Token
     * @param token The token to revoke
     * @throws {QuickbooksError} If the token is not provided
     * @returns {Promise<boolean>} True if the token was revoked, false otherwise
     */
    revoke(): Promise<boolean>;
    /**
     * Validates the Token
     * @throws {QuickbooksError} If the token is not provided
     * @returns {Promise<boolean>} True if the token is valid, false otherwise
     */
    validateToken(): Promise<boolean>;
    /**
     * Serializes the Token
     * @param secretKey The secret key to use for the serialization
     * @throws {QuickbooksError} If the secret key is not provided or the token is not provided
     * @returns {string | undefined} The serialized token
     */
    serializeToken(secretKey: string): Promise<string | undefined>;
    /**
     * Deserializes the Token
     * @param serialized The serialized token to deserialize
     * @param secretKey The secret key used for decryption
     * @throws {QuickbooksError} If the serialized token is not valid or the secret key is not provided
     */
    deserializeToken(serialized: string, secretKey: string): Promise<void>;
    /**
     * Adds a callback to be called when the token is refreshed
     * @param callback The callback to call when the token is refreshed
     */
    onRefresh(callback: (refreshedToken: Token) => void): void;
    /**
     * Adds a callback to be called when the token is revoked
     * @param callback The callback to call when the token is revoked
     */
    onRevoke(callback: (revokedToken: Token) => void): void;
    /**
     * Decodes and verifies an ID token from a JWT string using cryptographic signature verification
     * @param idTokenString The ID token JWT string
     * @returns {IdToken} The decoded and verified ID token
     * @throws {QuickbooksError} If the ID token is invalid, signature verification fails, or cannot be decoded
     * @remarks This method performs cryptographic signature verification using Intuit's JWKS endpoint.
     * The token signature, issuer, audience, and expiration are all verified before the token is accepted.
     * Token claims are cryptographically verified and safe for authorization decisions.
     */
    decodeIdToken(idTokenString: string): Promise<IdToken>;
    /**
     * Validates additional ID token claims (nonce and email verification)
     * Note: Signature, issuer, audience, and expiration are already validated by decodeIdToken using cryptographic verification
     * @param idToken The ID token to validate (must already be decoded and signature-verified)
     * @param nonce Optional nonce to validate against (should match the one used in generateAuthUrl)
     * @returns {boolean} True if the ID token claims are valid
     * @throws {QuickbooksError} If the ID token claims are invalid
     */
    validateIdToken(idToken: IdToken, nonce?: string): Promise<boolean>;
    /**
     * Retrieves the user profile from Intuit's user info endpoint
     * This method requires an access token and is used for SSO flows
     * @returns {Promise<UserProfile>} The user profile information
     * @throws {QuickbooksError} If the request fails or the token is not available
     */
    getUserProfile(): Promise<UserProfile>;
    /**
     * Checks if SSO (OpenID Connect) is enabled
     * @returns {boolean} True if the openid scope is included
     */
    isSsoEnabled(): boolean;
    /**
     * Gets the current user profile if SSO is enabled
     * This is a convenience method that returns the cached user profile from the token
     * or fetches it if not available
     * @returns {Promise<UserProfile | undefined>} The user profile or undefined if SSO is not enabled
     */
    getCurrentUserProfile(): Promise<UserProfile | undefined>;
    /**
     * Derives a Crypto Key
     * @param secretKey The secret key to derive the key from
     * @param salt The salt to derive the key from
     * @param keyUsage The key usage for the derived key
     * @returns {Promise<CryptoKey>} The derived key
     */
    private deriveKey;
    /**
     * Parses the Token Response
     * @param response The token response to parse
     * @param realmId The realm ID for the token
     * @param nonce Optional nonce to validate the ID token
     * @param autoFetchUserProfile Whether to automatically fetch user profile when SSO is enabled
     * @returns {Promise<Token>} The parsed token
     */
    private parseTokenResponse;
    /**
     * Restores the Token Types
     * @param parsedToken The parsed token to restore
     * @returns {Token} The restored token
     */
    private restoreTokenTypes;
    /**
     * Checks if a value is an ISO date string
     * @param value The value to check
     * @returns {boolean} True if the value is an ISO date string, false otherwise
     */
    private isDateString;
}
