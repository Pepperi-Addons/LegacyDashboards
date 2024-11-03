# Subscription

This addon works exactly like the legacy settings addon. The reason it was separated into a separate addon is so that the entry in the settings menu will only be displayed when the addon is installed to the client and not like the legacy settings that are always displayed.

## High Level
- Once you have made your online payment for Pepperi through the Pepperi Back Office an additional menu item - "Subscription" - will be added in the settings for you to manage your users subscriptions. All prices are in US dollars.
- Another way, is to install the Subscription addon with the postman.
- 3 new entries are added in the setting menu under Subscription.
  - Upgrade Users - add or remove users to your account.
  - Billing History - Billing report.
  - Change credit card - Change payment method.

 The addon append an iframe on the page and displays the Subscription content from our Wsim (Backoffice old site) inside it.
- The Subscription addon give you the ability to:
    - Manage your subscription, Add or remove users, choose payment plan (Monthly/Yearly).
    - See billings reports.
    - Change paymeny method & details.

- The addon add the query "webAppIframe=true" to the url, the old backoffice know to read this query and to show only the relevant parts of the page (for example: without the page menu)

- The addon add the query "lang=${this.browserLang}" to the url, and the subscription will be display on the same languge as the webapp. 
---

## Releases
| Version | Description | Migration |
|-------- |------------ |---------- |
| 0.0.8  | manage your subscription|  |

---

## Deployment
After a Pull Request is merged into a release branch, avilable version will be published.

---

## Debugging
#### Client side: 
To debug your addon with developer toolbar (chrome or any other browser dev tool).
- Open terminal --> change to client-side --> Start your addon with npm start.
- Go to Settings --> Subscription --> Upgrade Users or 
Open your browser at: https://app.pepperi.com/settings/0271c78a-5d33-4319-9e24-b238cca8c76d/editor?view=upgrade_users.
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
- Navigate to Settings --> Subscription  --> Upgrade Users.


## UI
- This addon is only an Iframe who get URL. 
- The Iframe displayed a page from the old Wsim backoffice system. the UI and the beavior taken from the page. 
