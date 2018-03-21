import { MenuItem } from '@slb-planck-ui/web-framework';
import { executionMenuItems as commonMenuItems } from '@slb-planck-ui/web-common-module/menu-items';

/**
 * Returns a list of menu items based on the product type
 * @returns {Array<MenuItem>}
 */
export function getMenuItemsForProduct(): Array<MenuItem> {
    const menuItems: Array<MenuItem> = [
        {
            path: 'home',
            name: 'Home',
            icon: 'assets/home.svg',
            featureId: '',
            displayOrder: 100
        },
        {
            path: 'hello',
            name: 'Hello',
            icon: 'assets/user.svg',
            featureId: '',
            displayOrder: 120
        },
        ...commonMenuItems
    ];
    return menuItems;
}
