import { BiBarChart, BiDollar, BiShoppingBag, BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { SiTradingview } from "react-icons/si";
import { IoTicketSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { IoHelpCircleSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export const SIDEBAR_ITEMS = [
    {
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
        color: '#6366f1',
        link: 'dashboard',
        roles: ["admin", "agent","customer"]

    },
    {
        name: "Tickets",
        icon: <IoTicketSharp />,
        color: '#BB5CF6',
        link: 'tickets',
        roles: ["admin","agent","customer"]
    },
    {
        name: "Customers",
        icon: <BiUser />,
        color: '#ec4899',
        link: 'customers',
        roles: ["agent", "admin"]
    },
    {
        name: "Agents",
        icon: <RiCustomerService2Line />,
        color: '#10b981',
        link: 'agents',
        roles: ["admin"]
    },
    {
        name: "Knowledge Base",
        icon: <IoBookSharp />,
        color: '#f59e0b',
        link: 'knowledgebase'
    },
    {
        name: "Help & Support",
        icon: <IoHelpCircleSharp />,
        color: '#3882f6',
        link: 'helpandsupport'
    },
    {
        name: "Settings",
        icon: <CiSettings />,
        color: '#6ee7b7',
        link: 'settings'
    },
    // {
    //     name: "Logout",
    //     icon: <CiLogout />,
    //     color: '#ef4444',
    //     link: 'logout'
    // },
]

export const SALES_DATA = [

    {
        name: "Jul", sales: 4200
    },
    {
        name: "Aug", sales: 3800
    },
    {
        name: "Sep", sales: 5100
    },
    {
        name: "Oct", sales: 4600
    },
    {
        name: "Nov", sales: 5400
    },
    {
        name: "Dec", sales: 7200
    }, {
        name: "Jan", sales: 6100
    },
    {
        name: "Feb", sales: 5980
    }, {
        name: "Mar", sales: 6880
    },
    {
        name: "Apr", sales: 6300
    },
    {
        name: "May", sales: 7100
    },
    {
        name: "Jun", sales: 7500
    },

]

export const CATEGORY_DATA = [
    {
        name: "Electronics", value: 4500
    },
    {
        name: "Clothing", value: 3200
    },
    {
        name: "Home & Garden", value: 2800
    },
    {
        name: "Books", value: 2100
    },
    {
        name: "Sports & Outdoors", value: 1900
    },

]

export const SALES_CHANNEL_DATA=[
    {
        name:"Website" ,value:45600
    },
    {
        name:"Mobile App" ,value:38200
    },
    {
        name:"Marketplace" ,value:29800
    },
    {
        name:"Social Media" ,value:17800
    },

]

export const PRODUCTS_DATA=[
    {
        id:1,name:'Wireless Earbuds',
        category:"Electronics",
        price:59.99,stock:134,
        sales:1220

    },
    {
        id:2,name:'Leather Wallet',
        category:"Accessories",
        price:39.99,stock:84,
        sales:892

    },
    {
        id:3,name:'Smart Watch',
        category:"Electronics",
        price:199.99,stock:53,
        sales:234

    },
    {
        id:4,name:'Yoga Mat',
        category:"Fitness",
        price:29.99,stock:236,
        sales:290

    },
    {
        id:5,name:'Coffee Maker',
        category:"Home",
        price:79.99,stock:79,
        sales:749

    },
   
]

export const USERS_DATA=[
    {
        name:'john doe',
        email:"johndoe@fakegmail.com",
        role:'user',
        status:"active",


    },
    {
        name:'jane smith',
        email:"janeSmith@fakegmail.com",
        role:'user',
        status:"inactive",
        

    },
    {
        name:'mr.bob',
        email:"bobMR@fakegmail.com",
        role:'user',
        status:"inactive",
        

    },
    {
        name:'jane doe',
        email:"janeDoe@fakegmail.com",
        role:'user',
        status:"active",
        

    }
    , {
        name:'hazer',
        email:"hazer56@gmail.com",
        role:'admin',
        status:"active",
        

    },
     {
        name:'alice brown',
        email:"mrAliceBrown@fakegmail.com",
        role:'user',
        status:"inactive",
        

    }

]


export const USER_DEMOGRAPHIC_DATA=[
    {
        name:'18-24',
        value:20
    },
    {
        name:'25-34',
        value:30
    },
    {
        name:'35-44',
        value:25
    },
    {
        name:'45-54',
        value:15
    },
    {
        name:'55+',
        value:10
    },
   ,
]

export const SALES_BY_CATEGORY_DATA=[
    {
        name:'Books',value:100
    },
    {
        name:'Electronics',value:140
    },
    {
        name:'Clothing',value:356
    },

    {
        name:'Home & Garden',value:237
    },
    {
        name:'HealthCare',value:250
    },
    {
        name:'Others',value:150
    },
   
]

export const DAILY_SALES_TREND_DATA=[
    {name:'Mon',
        sales:1000
    },
    {name:'Tue',
        sales:1340
    },
    {name:'wed',
        sales:923
    },
    {name:'Thu',
        sales:1280
    },

    {name:'Fri',
        sales:1390
    },
    {name:'Sat',
        sales:1546
    },
    {name:'Sun',
        sales:1400
    },
]

export const ORDER_STATUS=[
    {
        name:'Shipped',
        value:24,
    },
    {
        name:'Processed',
        value:10,
    },
    {
        name:'Pending',
        value:12,
    },
    {
        name:'Delieverd',
        value:46,
    },

]


export const ORDERS_DATA=[
    
        {
            name:'john doe',
                id:"ORD001",
            total:"234.4",
            data:"12-04-2024",
            status:"Delievered",
    
    
        },
        {
            name:'jane smith',
            id:"ORD002",
            total:"125.00",
            data:"13-04-2024",
            status:"Shipped",
            
    
        },
        {
            name:'mr.bob',
            id:"ORD003",
            total:"634.99",
            data:"13-04-2024",
            status:"Delievered",
            
    
        },
        {
            name:'jane doe',
            id:"ORD004",
            total:"755.00",
            data:"14-04-2024",
            status:"Canceled",
            
    
        }
        , {
            name:'hazer',
            id:"ORD005",
            total:"999.99",
            data:"30-08-2024",
            status:"Pending",
            
    
        },
         {
            name:'alice brown',
            id:"ORD006",
            total:"755.00",
            data:"01-09-2024",
            status:"Pending",
            
    
        }
 
]