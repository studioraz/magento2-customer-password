/**
 * KiwiCommerce
 *
 * Do not edit or add to this file if you wish to upgrade to newer versions in the future.
 * If you wish to customise this module for your needs.
 * Please contact us https://kiwicommerce.co.uk/contacts.
 *
 * @category  KiwiCommerce
 * @package   KiwiCommerce_CustomerPassword
 * @copyright Copyright (C) 2018 Kiwi Commerce Ltd (https://kiwicommerce.co.uk/)
 * @license   https://kiwicommerce.co.uk/magento2-extension-license/
 */
define(
    [
    'uiRegistry',
    'Magento_Ui/js/form/element/abstract'
    ],
    function (registry, Abstract) {
        'use strict';

        return Abstract.extend(
            {
                defaults: {
                    focused: false,
                },
                initialize: function () {
                    this._super();
                    var self = this;
                    var admin_password = registry.get(self.parentName + '.' + 'admin_password');
                    admin_password.hide();
                    this.focused.subscribe(
                        function (value) {
                            if (value) {
                                admin_password.show();
                            } else if (!self.value().length) {
                                admin_password.hide();
                            }
                        }
                    );
                }
            }
        );
    }
);