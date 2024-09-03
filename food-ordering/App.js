import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/logo.png";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestroCard = (props) => {
    const resInfo= props.resInfo;
    const { name, cuisines, avgRating } = resInfo?.info;
    const { slaString } = resInfo?.info?.sla;
    return (
        <div className='restro-card'>
            <img
                className='restro-logo'
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resInfo.info.cloudinaryImageId
                }
                alt='restaurant'
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐️</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

restaurentData = [
    {
        info: {
            id: "692371",
            name: "Donne Biryani @99",
            cloudinaryImageId: "1e88d6b0986ca2bbbc89841219da8932",
            locality: "Chinnapanahalli",
            areaName: "Near Shuchodaya Apartment",
            costForTwo: "₹200 for two",
            cuisines: ["Biryani", "Chinese", "Snacks"],
            avgRating: 3.6,
            parentId: "262680",
            avgRatingString: "3.6",
            totalRatingsString: "1.6K+",
            sla: {
                deliveryTime: 34,
                lastMileTravel: 7.4,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "7.4 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-11 00:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "UPTO ₹40",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/donne-biryani-99-chinnapanahalli-near-shuchodaya-apartment-rest692371",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "764829",
            name: "Al Habibi Shawarma",
            cloudinaryImageId: "3686fef60972085a52d8bccfc86ed037",
            locality: "Gmr complex",
            areaName: "Bellandur Sarjapur",
            costForTwo: "₹250 for two",
            cuisines: ["Fast Food"],
            avgRating: 4.3,
            parentId: "240516",
            avgRatingString: "4.3",
            totalRatingsString: "358",
            sla: {
                deliveryTime: 34,
                lastMileTravel: 10.8,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "10.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 07:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/al-habibi-shawarma-gmr-complex-bellandur-sarjapur-rest764829",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "573190",
            name: "Olio - The Wood Fired Pizzeria",
            cloudinaryImageId: "rcx9e6cavubzanxczxsh",
            locality: "Varthur Main Road",
            areaName: "Whitefield",
            costForTwo: "₹300 for two",
            cuisines: ["Pizzas", "Italian"],
            avgRating: 4.3,
            parentId: "11633",
            avgRatingString: "4.3",
            totalRatingsString: "2.4K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-varthur-main-road-whitefield-rest573190",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "288652",
            name: "Imperio Juice & Ice creams",
            cloudinaryImageId: "jfme9etag3sqjxfwoy6i",
            locality: "Itpl Main Road",
            areaName: "Brookefield",
            costForTwo: "₹250 for two",
            cuisines: ["Juices", "Ice Cream", "Desserts", "Beverages"],
            avgRating: 4.2,
            veg: true,
            parentId: "423750",
            avgRatingString: "4.2",
            totalRatingsString: "2.6K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 4.3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "4.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/imperio-juice-and-ice-creams-itpl-main-road-brookefield-rest288652",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "741053",
            name: "Simplee Shawarma",
            cloudinaryImageId: "d625a1a6732cfda01e9210aa78564a8d",
            locality: "Mahadevapura",
            areaName: "Marathahalli",
            costForTwo: "₹200 for two",
            cuisines: ["Arabian", "Fast Food", "Snacks"],
            avgRating: 4.1,
            parentId: "188150",
            avgRatingString: "4.1",
            totalRatingsString: "448",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 6.1,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "6.1 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 05:30:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹100",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/simplee-shawarma-mahadevapura-marathahalli-rest741053",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "886852",
            name: "Bagara Biryani Cafe",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/6/7f740db9-d8a0-4e92-8d48-d55eb35cfd9c_886852.ss.jpg",
            locality: "Whitefield",
            areaName: "Whitefield",
            costForTwo: "₹450 for two",
            cuisines: ["Biryani", "South Indian"],
            avgRating: 3.8,
            parentId: "513225",
            avgRatingString: "3.8",
            totalRatingsString: "103",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 23:59:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.6",
                    ratingCount: "110",
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/bagara-biryani-cafe-whitefield-rest886852",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "10866",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/a12922f7-3ef7-4df7-921b-ed6e343a234e_10866.jpg",
            locality: "Munnekolalu Village",
            areaName: "Marathahalli",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.1,
            parentId: "721",
            avgRatingString: "4.1",
            totalRatingsString: "28K+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 4.5,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "4.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/pizza-hut-munnekolalu-village-marathahalli-rest10866",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "149682",
            name: "Samosa Party",
            cloudinaryImageId: "thzhbierhb2qxhqsl0bo",
            locality: "Munnekollal",
            areaName: "Marathahalli",
            costForTwo: "₹100 for two",
            cuisines: [
                "Fast Food",
                "Snacks",
                "Beverages",
                "Chaat",
                "North Indian",
                "Street Food",
                "Sweets",
                "Desserts",
                "Punjabi",
                "Bakery",
            ],
            avgRating: 4.3,
            parentId: "6364",
            avgRatingString: "4.3",
            totalRatingsString: "17K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 3.9,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "3.9 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-11 00:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            select: true,
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/samosa-party-munnekollal-marathahalli-rest149682",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "78138",
            name: "Imperio Restaurant",
            cloudinaryImageId: "a1629b9c7f59577a55411e94425c6d99",
            locality: "Brookefields",
            areaName: "Brookefields",
            costForTwo: "₹300 for two",
            cuisines: ["Biryani", "Kebabs", "South Indian", "Tandoor", "Beverages", "North Indian", "Ice Cream", "Desserts"],
            avgRating: 4.1,
            parentId: "5610",
            avgRatingString: "4.1",
            totalRatingsString: "38K+",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 4.3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "4.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 05:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹599",
                discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "20K+",
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/imperio-restaurant-brookefields-rest78138",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "335190",
            name: "GOCHICK",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/909ff35e-d362-49ad-b3a6-9d97ed880937_335190.jpg",
            locality: "AECS Layout",
            areaName: "Brookefield",
            costForTwo: "₹300 for two",
            cuisines: [
                "American",
                "Burgers",
                "Grill",
                "Italian",
                "Continental",
                "Salads",
                "Rolls & Wraps",
                "Healthy Food",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.2,
            parentId: "414879",
            avgRatingString: "4.2",
            totalRatingsString: "5.4K+",
            sla: {
                deliveryTime: 35,
                lastMileTravel: 4.3,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "4.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-09-04 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-85776b67-361b-4ccf-bd05-87a123e6bce2",
        },
        cta: {
            link: "https://www.swiggy.com/city/bangalore/gochick-aecs-layout-brookefield-rest335190",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
];


const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restro-container'>
                {restaurentData.map((restroInfo) => (
                    <RestroCard key={restroInfo.info.id} resInfo={restroInfo} />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);