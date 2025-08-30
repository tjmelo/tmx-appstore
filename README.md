![project](https://img.shields.io/badge/project-TMX%20AppStore-blue)

![Size](https://img.shields.io/github/repo-size/tjmelo/tmx-appstore) ![Version](https://img.shields.io/github/package-json/v/tjmelo/tmx-appstore) ![Release](https://img.shields.io/github/v/release/tjmelo/tmx-appstore) ![Last Commit](https://img.shields.io/github/last-commit/tjmelo/tmx-appstore/main)
![Passing](https://img.shields.io/github/actions/workflow/status/tjmelo/tmx-appstore/checkout-ci.yml)

## Table of content

-   [About app](#about-app)
-   [Preview Screens](#preview-screens)
-   [Project details](#project-details)
    -   [Simple Develop Process](#simple-develop-process)
    -   [Docker Develop Process](#docker-develop-process)
-   [Contributing](#preview-screens)
-   [License](#license)
-   [Testing](#testing)



# About app

TMX AppStore is a showcase platform for digital products, designed to provide users with a seamless experience for browsing, discovering, and previewing a curated selection of applications, tools, and resources. The app features an interactive interface with visually engaging cards, banners, and product details, making it easy to explore available offerings.

Key features:
- Browse a variety of digital products organized by categories such as shoes, socks, and more
- View detailed information and images for each product
- Add products to a cart for easy management and preview
- Responsive design for optimal viewing on desktop and mobile devices
- Fast navigation and smooth transitions for an intuitive user experience

TMX AppStore is ideal for users looking to explore and preview digital products in a modern, user-friendly environment.

Online project: [https://tjmelo.github.io/tmx-appstore/](https://tjmelo.github.io/tmx-appstore/)

# Preview Screens

![Screen](/public/TMXScreen1.png)

![Screen](/public/TMXScreen2.png)

# Project Details

Some principal project dependencies

![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-appstore/bootstrap?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-appstore/sass?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-appstore/scrollreveal?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-appstore/axios?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-appstore/react?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-appstore/react-router-dom?color=blue)

## Simple Develop Process

Download the project

Clone or fork this repository

```sh
git clone https://github.com/tjmelo/tmx-appstore.git

cd tmx-appstore

git checkout -b develop

npm install && npm start
```

## Docker Develop Process

```sh
git clone https://github.com/tjmelo/tmx-appstore.git

cd tmx-appstore

docker compose up -d
```

Install from the command line

```
docker pull ghcr.io/tjmelo/tmx-appstore:latest
```

or image in **Docker Hub** for optional download

```
docker pull tmwd/tmx-appstore
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

MIT

## Testing

To run tests:

```sh
yarn test
```

For questions, open an issue.

Open the app on a browser http://localhost:3000/tmx-appstore

---

Have a fun! :tada:
