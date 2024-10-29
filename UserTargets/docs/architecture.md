# Manage User Targets Architecture

## Overview

- This addon works exactly like the legacy settings addon. The reason it was separated into a separate addon is so that the entry in the settings menu will only be displayed when the addon is installed to the client and not like the legacy settings that are always displayed.
- All of the logic & UI come from the Wsim backoffice system.
- The addon add the query "webAppIframe=true" to the url, the old backoffice know to read this query and to show only the relevant parts of the page (for example: without the page menu)
---

## Infrastructure

| Addon  | Usage  |
| ---------------------------|------------------------ |
| [UserTargets](https://github.com/Pepperi-Addons/LegacyDashboards/tree/main/UserTargets) | Display reps targets charts from the Wsin on an iFrame in the Settings menu|

---

## Data Model

[Provide any data models used by the addon (eg. ADAL tables etc.)]

---

## PNS Usage

[Provide any PNS subscriptions or publishes done by the addon]

---

## Relations
| Relation Name | Description |
|---------------|--------------|

---

## Topics

- The addon add the query "webAppIframe=true" to the url, the old backoffice know to read this query and to show only the relevant parts of the page (for example: without the page menu)
- The addon add the query "lang=${this.browserLang}" to the url, and the User targets will be display on the same languge as the webapp.
_____________________________________________________________
### CPI endpoints:

There is no CPI side.
_____________________________________________________________
#### Diagram

[Provide any diagrams relevant to topic1]
