# Subscription Architecture

## Overview

- This addon works exactly like the legacy settings addon. The reason it was separated into a separate addon is so that the entry in the settings menu will only be displayed when the addon is installed to the client and not like the legacy settings that are always displayed.
- All of the logic & UI come from the Wsim backoffice system.
- The addon add the query "webAppIframe=true" to the url, the old backoffice know to read this query and to show only the relevant parts of the page (for example: without the page menu)
---

## Infrastructure

| Addon  | Usage  |
| ---------------------------|------------------------ |
| [Subsriptions](https://github.com/Pepperi-Addons/LegacyDashboards/tree/main/Subscription) | is the addon that display the Sucription details from the Wsin on an iFrame in the Settings menu|

---

## Data Model

Each addon contains 2 HTML iframes.​

- ​The first, a hidden iframe, was built to allow the client to plant a cookie in order to enable the login to the old Wsim system.​

- The second get the src property and display the page content. The src consists of a variable "backOfficeMainDom" &the address of the desired page (for example: "views/Agents/Special/SpecialOffers.aspx").​

- The addon add the parameter "webAppIframe=true" to the url, the Wsim know to read this query and to show only the relevant parts of the page (for example: without the page menu).​

- The addon add the parameter "lang=${this.browserLang}" to the url, so, the iframe contenet will be display on the same language as the webapp.

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
- The addon add the query "lang=${this.browserLang}" to the url, and the Activities dashboard will be display on the same languge as the webapp.
_____________________________________________________________
### CPI endpoints:

There is no CPI side.
_____________________________________________________________
#### Diagram

[Provide any diagrams relevant to topic1]
