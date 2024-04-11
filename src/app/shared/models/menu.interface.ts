export interface MenuItem {
    name: string;
    url: string;
    mobileOnly: boolean;
    authenticatedOnly?: boolean;
}