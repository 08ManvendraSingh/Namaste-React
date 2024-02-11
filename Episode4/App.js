import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div id="header">
            <div className="logo">
                <img src="https://w7.pngwing.com/pngs/217/237/png-transparent-just-eat-full-logo-tech-companies-thumbnail.png" alt="" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// passing hard coded data inside card 

// const RestaurantCard=()=>{
//     return(
//         <div className="resCard">
//             <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57fd0c70d5037278b808fb48afbeac46" alt="" />
//             <div className="resCard_content">
//                 <h3>Roastery Coffee House</h3>
//                 <h4>⭐ 4.3</h4>
//                 <p>American,Europern,Italian...</p>
//                 <h6>C scheme</h6>
//             </div>
//         </div>
//     )
// }


// passing data using props

// const RestaurantCard=(props)=>{

//     console.log(props);
//     const{resName,cuisiens}=props;

//     return(
//         <div className="resCard">
//             <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57fd0c70d5037278b808fb48afbeac46" alt="" />
//             <div className="resCard_content">
//                 {/* <h3>{props.resName}</h3> */}
//                 <h3>{resName}</h3>
//                 <h4>⭐ 4.3</h4>
//                 {/* <p>{props.cuisiens}</p> */}
//                 <p>{cuisiens}</p>
//                 <h6>C scheme</h6>
//             </div>
//         </div>
//     )
// }


const resObj=[
    {
      "info": {
        "id": "45607",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "gzobptvged4mzsk4vnfx",
        "locality": "DP Colony",
        "areaName": "Sodala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "45607",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "2456",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 02:57:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-dp-colony-sodala-jaipur-45607",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "44222",
        "name": "Thali and More",
        "cloudinaryImageId": "c62375f4fdd7edb7e076bb972fd82a56",
        "locality": "Sarojini Marg",
        "areaName": "C Scheme",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Rajasthani",
          "Continental"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "44222",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "204124",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/thali-and-more-sarojini-marg-c-scheme-jaipur-44222",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "47110",
        "name": "Chawla's-C Scheme",
        "cloudinaryImageId": "pwweixayk8fwyqkdvycr",
        "locality": "C Scheme",
        "areaName": "C Scheme",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Thalis",
          "Mughlai",
          "Snacks",
          "Kebabs",
          "Afghani",
          "Tandoor",
          "Indian",
          "Grill",
          "Hyderabadi",
          "Lucknowi"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "47110",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2900
        },
        "parentId": "58993",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chawlas-c-scheme-c-scheme-jaipur-47110",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "257747",
        "name": "DMB Sweets Pvt Ltd",
        "cloudinaryImageId": "kolhcnu4vpylabtjemll",
        "locality": "Kartarpura",
        "areaName": "Bais Godam",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Snacks",
          "South Indian",
          "Chinese",
          "Bengali",
          "Italian",
          "Bakery"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "257747",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "244910",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 21:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dmb-sweets-pvt-ltd-kartarpura-bais-godam-jaipur-257747",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "129366",
        "name": "Ganesh Bhojnalaya - Jyoti Nagar",
        "cloudinaryImageId": "ebqewymo7zx4kdsslxdw",
        "locality": "Jyoti Nagar",
        "areaName": "Lal Kothi",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Thalis",
          "Chinese",
          "Mughlai",
          "Chaat",
          "Punjabi",
          "Desserts",
          "Snacks",
          "Rajasthani",
          "Tandoor",
          "Sweets",
          "Indian",
          "Beverages",
          "Ice Cream",
          "Italian",
          "Pastas"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "129366",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "85926",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ganesh-bhojnalaya-jyoti-nagar-jyoti-nagar-lal-kothi-jaipur-129366",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "645677",
        "name": "Tadka Punjab Ka\t",
        "cloudinaryImageId": "2559d05bdd3bc1941d8108aee9dc246f",
        "locality": "Panchsheel Colony",
        "areaName": "Vaishali Nagar",
        "costForTwo": "₹360 for two",
        "cuisines": [
          "Indian",
          "Fast Food"
        ],
        "avgRating": 3.8,
        "veg": true,
        "feeDetails": {
          "restaurantId": "645677",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "199904",
        "avgRatingString": "3.8",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/tadka-punjab-ka-panchsheel-colony-vaishali-nagar-jaipur-645677",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "590905",
        "name": "Roastery Coffee House",
        "cloudinaryImageId": "57fd0c70d5037278b808fb48afbeac46",
        "locality": "Plot No - J-9",
        "areaName": "C Scheme",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "American",
          "European",
          "Italian",
          "Desserts",
          "Continental",
          "Pizzas",
          "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "590905",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "170319",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/roastery-coffee-house-plot-no-j-9-c-scheme-jaipur-590905",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "262456",
        "name": "The Lama",
        "cloudinaryImageId": "dhulhzcsuama2zguun0i",
        "locality": "Durgadas Colony",
        "areaName": "C Scheme",
        "costForTwo": "₹1200 for two",
        "cuisines": [
          "Asian",
          "Chinese",
          "Indian",
          "Biryani"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "262456",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2900
        },
        "parentId": "210773",
        "avgRatingString": "4.2",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-lama-durgadas-colony-c-scheme-jaipur-262456",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "611857",
        "name": "Indian Breads & Curries - IBC",
        "cloudinaryImageId": "xz1mmyxtbfpmvfcjcdtp",
        "locality": "C Scheme",
        "areaName": "C Scheme",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "611857",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "365187",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 01:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1b09982-6c8c-49df-876c-fadd0f99586a"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/indian-breads-and-curries-ibc-c-scheme-jaipur-611857",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
  ];

const RestaurantCard=(props)=>{

    console.log(props);
    // const{resData}=props;
    const{name,cuisines,avgRating,areaName,cloudinaryImageId}=props?.resData?.info;

    return(
        <div className="resCard">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
            <div className="resCard_content">
                {/* <h3>{props.resName}</h3> */}
                {/* <h3>{resName}</h3> */}
                <h3>{name}</h3>
                <h4>⭐ {avgRating}</h4>
                {/* <p>{props.cuisiens}</p> */}
                {/* <p>{cuisiens}</p> */}
                <p>{cuisines.join(', ')}</p>
                <h6>{areaName}</h6>
            </div>
        </div>
    )
}

const Body=()=>{
    return(
        <div id="body">
            <div className="searchContainer">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="restaurantContainer">
                {/* <RestaurantCard/> */}
                {/* <RestaurantCard resName="Roastery Coffee House" cuisiens="American,Europern,Italian..."/> */}
                {/* <RestaurantCard resData={resObj[0]}/>
                <RestaurantCard resData={resObj[1]}/> */}
                {resObj.map((x)=><RestaurantCard key={x.info.id} resData={x}/>)}
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div id='appContainer'>
            <Header/>
            <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);