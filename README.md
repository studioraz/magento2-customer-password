# Magento 2 Change Customer Password on Admin

## Features
1. Allow Admin user to change customer password on Admin panel

## Installation

1. Install this module within Magento 2 using composer
    ```
    composer require studioraz/magento2-customer-password
    ```

4. After this, enable the module
    ```
    bin/magento mo:e KiwiCommerce_CustomerPassword &&
    bin/magento s:up &&
    bin/magento co:set sr_directory/general/enabled 1 &&
    bin/magento c:f
    ```
