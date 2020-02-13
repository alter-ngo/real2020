[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6cd3105f2f35415789a33210ac3df688)](https://www.codacy.com/app/paubric/real?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=paubric/real&amp;utm_campaign=Badge_Grade)
[![](https://img.shields.io/github/last-commit/paubric/real)](https://github.com/paubric/real/commits/master)
[![](https://img.shields.io/github/contributors/paubric/real)](https://github.com/paubric/real/graphs/contributors)
# Registrul Educațional Alternativ


_Registrul Educațional Alternativ_ is a platform through which romanian highschools are evaluated by students, teachers, parents, alumni, and others.

Its main objectives are:

- helping students, future students, and their families choose the right highschool
- helping teachers and future teachers choose the right highschool
- providing open data on romanian highschools of unprecedented quality and quantity for research and media purposes
- guiding administrative personnel in improving their offer
- confirming critical measurements for decision factors

# Components

| Components                                                                 | Description                                                                                                                                                                                                        |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [bot_family](https://github.com/paubric/real/tree/master/bot_family)         | The place where you can meet the bot family which lives on our Discord server. They can help you with everything from event briefing to cheering you up. **Javascript, Zapier**                                                  |
| [external_data](https://github.com/paubric/real/tree/master/external_data) | Here you can find crawlers, scrapers, and other sorts of scripts which extract public data from various platforms. Additionally, these are accompanied by other data wrangling scripts. **Python, UiPath** |
| [site](https://github.com/paubric/real/tree/master/site) | The home of our web platform. It consists of the core element of the project, through which subjective data is collected and all data is presented. **Javascript, Firebase** |
| [data_analysis](https://github.com/paubric/real/tree/master/data_analysis) | The place where you can find some documented explorations of the REAL dataset designed to extract various insights. **Python** |

# Contributing
### General
- We are not using branches or forks for now

### Python
- Variables and functions must have English names
- Variables and functions must have descriptive names, with minimal shortening (E.g. `highschool_list` instead of `hs`)
- Variables and functions must have `lower_case_with_underscores` names
- Use an automatic code formatter (E.g. *Prettier* in VS Code) in order to easily apply standard formatting
- Comments are encouraged

# Contributors
- [Paul Bricman](https://github.com/paubric)
- [Mihai Sturza](https://github.com/sturzamihai)
- [Alex Constantin](https://github.com/xfde)
