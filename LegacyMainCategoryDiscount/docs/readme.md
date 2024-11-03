# Legacy Main Category Discount

This addon works exactly like the legacy settings addon. The reason it was separated into a separate addon is so that the entry in the settings menu will only be displayed when the addon is installed to the client and not like the legacy settings that are always displayed.

## High Level
- When the addon is installed to the client, a new entry is added in the Setting menu under Pricing policy. The addon append an iframe on the page and displays the Dashboard content from our Wsim (Backoffice old site) inside it.
- Legacy Main Category Discounts - For each Account, items belonging to a Main Category (in some cases brand) can be discounted. The discount is applied in the Pricing Policy section of the settings ([more details...](https://support.pepperi.com/hc/en-us/articles/201855618-How-To-Work-with-Discounts))

- To activate Main Category Discounts: goto Setting --> Pricing Policy --> Main Category Discount screen or by uploading a CSV file. See the article: [Uploading Main Category discounts](https://support.pepperi.com/hc/en-us/articles/201855648-Uploading-Main-Category-Discounts).

- The Main Categories (or brands) will shown as list with Accounts & Discount and you can enter a percentage discount per Account for these brands.
---

## Releases
| Version | Description | Migration |
|-------- |------------ |---------- |
| 0.0.4  | Display list with Accounts & Discount with ability to configure discounts per Account for these brands|  |

---

## Deployment
After a Pull Request is merged into a release branch, avilable version will be published.

---

## Debugging
#### Client side: 
To debug your addon with developer toolbar (chrome or any other browser dev tool).
- Open terminal --> change to client-side --> Start your addon with npm start.
- Go to Settings --> Pricing Policy --> Main Category Discount or 
Open your browser at: https://app.pepperi.com/settings/942a8c8f-5bd3-48ea-84e7-99260cd96d6c/editor?view=main_category_discount
- Add the &dev=true.

- Open the browser inspector to make sure that the editor file is served locally
#### Server side: 
There is no Server side (the page comes from the old backoffice).

#### CPI side:
There is no CPI side.

---

## Testing

This addon does not require any tests (so far).

---

## Dependencies

| Addon | Usage |
|-------- |------------ |
| [webapp](https://bitbucket.org/pepperiatlasian/webapp/src/master/) | need the webapp to run the settings |
---

## APIs
    there is no APIs. 

    for more data read [Architecture](./architecture.md)

---

## Limitations
There is no limits.

---

## Architecture
see: [Architecture](./architecture.md)

---

## Known issues

- [provide any information regarding known issues (bugs, qwerks etc.) in the addon] 

---

## Future Ideas & Plans

- [provide any knowledge regarding meaningful future plans for the addons (features, refactors etc.)]

## Usage
- Install the addon & all his dependencies.
- Navigate to Settings --> Pricing Policy --> Main Category Discount.


## UI
- This addon is only an Iframe who get URL. 
- The Iframe displayed a page from the old Wsim backoffice system. the UI and the beavior taken from the page. 
