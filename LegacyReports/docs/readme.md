# Legacy Reports

This addon works exactly like the legacy settings addon. The reason it was separated into a separate addon is so that the entry in the settings menu will only be displayed when the addon is installed to the client and not like the legacy settings that are always displayed.

## High Level
- When the addon is installed to the client, a new entry is added in the Setting menu. The addon append an iframe on the page and displays the Activities reports page content from our Wsim (Backoffice old site) inside it.
- The Legacy Reports addon give you ability to view many types of activity reports.
- By clicking on a report line, you can dive to the specific page of the report and see the report.
- The addon add the query "webAppIframe=true" to the url, the old backoffice know to read this query and to show only the relevant parts of the page (for example: without the page menu)

- The addon add the query "lang=${this.browserLang}" to the url, and the Activities dashboard will be display on the same languge as the webapp. 
---

## Releases
| Version | Description | Migration |
|-------- |------------ |---------- |
| 0.0.5  | display list of activity reports page from the Wsim|  |

---

## Deployment
After a Pull Request is merged into a release branch, avilable version will be published.

---

## Debugging
#### Client side: 
To debug your addon with developer toolbar (chrome or any other browser dev tool).
- Open terminal --> change to client-side --> Start your addon with npm start.
- Go to Settings --> Data --> Reports or 
Open your browser at: https://app.pepperi.com/settings/53ce463d-f97e-4f4f-b5bc-7be8375dda3c/editor?view=reports
- Add the &dev=true.

- Open the browser inspector to make sure that the editor file is served locally
#### Server side: 
There is no Server side on the addon (the page comes from the old backoffice).

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
- Navigate to Settings --> Data --> Reports.


## UI
- This addon is only an Iframe who get URL. 
- The Iframe displayed a page from the old Wsim backoffice system. the UI and the beavior taken from the page. 
