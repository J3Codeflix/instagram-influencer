export class ApiUrls {
    public static baseUrl = 'https://instagram.com/';
    public static searchAll = keyword => ApiUrls.baseUrl + `web/search/topsearch/?context=blended&query=${keyword}&__a=1`;
    public static searchUsername = user => ApiUrls.baseUrl + `${user}/?__a=1`;
}