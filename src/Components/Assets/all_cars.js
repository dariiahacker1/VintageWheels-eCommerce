//lincoln
import img1 from './images/img.png'
import img2 from './images/img_1.png'
import img3 from './images/img_2.png'
import img4 from './images/img_3.png'
import img5 from './images/img_4.png'

//corvette
import img6 from './images/img_5.png'
import img7 from './images/img_6.png'
import img8 from './images/img_7.png'
import img9 from './images/img_8.png'
import img10 from './images/img_9.png'

//mustang
import img11 from './images/img_10.png'
import img12 from './images/img_11.png'
import img13 from './images/img_12.png'
import img14 from './images/img_13.png'
import img15 from './images/img_14.png'

//corvette
import img16 from './images/img_15.png'
import img17 from './images/img_16.png'
import img18 from './images/img_17.png'
import img19 from './images/img_18.png'
import img20 from './images/img_19.png'

//gt40
import img21 from './images/img_20.png'
import img22 from './images/img_21.png'
import img23 from './images/img_22.png'
import img24 from './images/img_23.png'
import img25 from './images/img_24.png'

//fleetline
import img26 from './images/img_25.png'
import img27 from './images/img_26.png'
import img28 from './images/img_27.png'
import img29 from './images/img_28.png'
import img30 from './images/img_29.png'

//rolls
import img31 from './images/img_30.png'
import img32 from './images/img_31.png'
import img33 from './images/img_32.png'
import img34 from './images/img_33.png'
import img35 from './images/img_34.png'

//mercedes
import img36 from './images/img_35.png'
import img37 from './images/img_36.png'
import img38 from './images/img_37.png'
import img39 from './images/img_38.png'
import img40 from './images/img_39.png'

//charger
import img41 from './images/img_40.png'
import img42 from './images/img_41.png'
import img43 from './images/img_42.png'
import img44 from './images/img_43.png'
import img45 from './images/img_44.png'

//330 GTC
import img46 from './images/img_45.png'
import img47 from './images/img_46.png'
import img48 from './images/img_47.png'
import img49 from './images/img_48.png'
import img50 from './images/img_49.png'

//356A
import img51  from './images/img_50.png'
import img52  from './images/img_51.png'
import img53  from './images/img_52.png'
import img54  from './images/img_53.png'
import img55  from './images/img_54.png'

//Packard Eight
import img56 from './images/img_55.png'
import img57 from './images/img_56.png'
import img58 from './images/img_57.png'
import img59 from './images/img_58.png'
import img60 from './images/img_59.png'

//FLH
import img61 from './images/img_60.png'
import img62 from './images/img_61.png'
import img63 from './images/img_62.png'
import img64 from './images/img_63.png'
import img65 from './images/img_64.png'

//vanquish
import img66 from './images/img_65.png'
import img67 from './images/img_66.png'
import img68 from './images/img_67.png'
import img69 from './images/img_68.png'
import img70 from './images/img_69.png'

//3100
import img71  from './images/img_70.png'
import img72 from './images/img_71.png'
import img73 from './images/img_72.png'
import img74 from './images/img_73.png'
import img75 from './images/img_74.png'

//Limousine

import img76 from './images/img_75.png'
import img77 from './images/img_76.png'
import img78 from './images/img_77.png'
import img79 from './images/img_78.png'
import img80 from './images/img_79.png'

//eldorado

import img81   from './images/img_80.png'
import img82   from './images/img_81.png'
import img83   from './images/img_82.png'
import img84   from './images/img_83.png'
import img85   from './images/img_84.png'

// categories: antique, convertible, future-classic, luxury, motorcycle, muscle, truck


let all_cars = [
    {
        id:1,
        name: "1963 Lincoln Continental Convertible",
        price: "275,000",
        location: "San Diego, California",
        year: 1963,
        make: "Lincoln",
        model: "Continental Convertible",
        exterior_color: "White",
        interior_color: "Turquoise",
        transmission: "Automatic",
        engine_size: "V-8",
        odometer: 1700,
        images: [img1, img2, img3, img4, img5],
        categories: ["convertible"]
    },
    {
        id:2,
        name: "1964 Chevrolet Corvette",
        price: "74,500",
        location: "Lakeland, Florida",
        year: 1964,
        make: "Chevrolet",
        model: "Corvette",
        exterior_color: "Riverside Red",
        interior_color: "Black",
        transmission: "Manual",
        odometer: 46567,
        images: [img6, img7, img8, img9, img10],
        categories: ["convertible"]
    },
    {
        id:3,
        name: "1967 Ford Mustang",
        price: "115,000",
        location: "Torrance, California",
        year: 1967,
        make: "Ford",
        model: "Mustang",
        exterior_color: "Candy Red",
        interior_color: "Black",
        engine_size: "V-8",
        odometer: 44300,
        images: [img11, img12, img13, img14, img15],
        categories: ["muscle"]
    },
    {
        id:4,
        name: "1968 Chevrolet Corvette",
        price: "100,000",
        location: "LITTLE BRITAIN, Ontario",
        year: 1968,
        make: "Chevrolet",
        model: "Corvette",
        exterior_color: "White",
        interior_color: "Tan",
        transmission: "Manual",
        odometer: 81000,
        images: [img16, img17, img18, img19, img20],
        categories: ["convertible"]
    },
    {
        id:5,
        name: "1966 Superformance GT40",
        price: "214,999",
        location: "Cumming, Georgia",
        year: 1966,
        make: "Superformance",
        model: "GT40",
        exterior_color: "Yellow",
        interior_color: "Black",
        transmission: "Manual",
        odometer: 3389,
        images: [img21, img22, img23, img24, img25],
        categories: ["future-classic"]
    },
    {
        id:6,
        name: "1951 Chevrolet Fleetline",
        price: "27,900",
        location: "Austin, Texas",
        year: 1951,
        make: "Chevrolet",
        model: "Fleetline",
        exterior_color: "Red",
        interior_color: "Red",
        transmission: "Automatic",
        odometer: 88400,
        images: [img26, img27, img28, img29, img30],
        categories: [""]
    },
    {
        id:7,
        name: "1980 Rolls-Royce Silver Shadow",
        price: "10,750",
        location: "Beverly Hills, California",
        year: 1980,
        make: "Rolls-Royce",
        model: "Silver Shadow II",
        exterior_color: "black over silver",
        transmission: "Automatic",
        odometer: 30404,
        images: [img31, img32, img33, img34, img35],
        categories: ["luxury"]
    },
    {
        id:8,
        name: "1963 Mercedes-Benz 190SL",
        price: "140,000",
        location: "New Smyrna Beach, Florida",
        year: 1963,
        make: "Mercedes-Benz",
        model: "190SL",
        exterior_color: "White",
        interior_color: "Red",
        transmission: "Manual",
        odometer: 45437,
        images: [img36, img37, img38, img39, img40],
        categories: [""]
    },
    {
        id:9,
        name: "1973 Dodge Charger",
        price: "35,000",
        location: "Dalton, Georgia",
        year: 1973,
        make: "Dodge",
        model: "Charger",
        exterior_color: "Bronze",
        interior_color: "Tan",
        transmission: "Automatic",
        engine_size: "V-8",
        odometer: 44447,
        images:[img41, img42, img43, img44, img45],
        categories: ["muscle"]
    },
    {
        id: 10,
        name: "1967 Ferrari 330 GTC",
        price: "439,500",
        location: "Astoria, New York",
        year: 1967,
        make: "Ferrari",
        model: "330 GTC",
        exterior_color: "Red",
        interior_color: "Tan",
        odometer: 0,
        images: [img46, img47, img48, img49, img50],
        categories: [""]
    },
    {
        id: 11,
        name: "1959 Porsche 356A",
        price: "229,500",
        location: "Astoria, New York",
        year: 1959,
        make: "Porsche",
        model: "356A",
        exterior_color: "Blue",
        interior_color: "Tan",
        odometer: 0,
        images: [img51, img52, img53, img54, img55],
        categories: ["convertible"]
    },
    {
        id: 12,
        name: "1934 Packard Eight",
        price: "119,000",
        location: "fullerton, California",
        year: 1934,
        make: "Packard",
        model: "Eight",
        exterior_color: "Black",
        interior_color: "Tan",
        transmission: "Manual",
        odometer: 0,
        images: [img56, img57, img58, img59, img60],
        categories: ["antique"]
    },
    {
        id: 13,
        name: "1976 Harley-Davidson FLH",
        price: "19,800",
        location: "Daytona Beach, Florida",
        year: 1976,
        make: "Harley-Davidson",
        model: "FLH",
        exterior_color: "Black",
        interior_color: "White",
        odometer: 147,
        images: [img61, img62, img63, img64, img65],
        categories: ["motorcycle"]
    },
    {
        id: 14,
        name: "2016 Aston Martin Vanquish",
        price: "80,500",
        location: "Huntington Station, New York",
        year: 2016,
        make: "Aston Martin",
        model: "Vanquish",
        exterior_color: "Ceramic Grey",
        interior_color: "Obsidian Black Semi-Aniline",
        odometer: 16756,
        images: [img66, img67, img68, img69, img70],
        categories: ["luxury", "convertible"]
    },
    {
        id: 15,
        name: "1953 Chevrolet 3100",
        price: "49,500",
        location: "Lexington Park , Maryland",
        year: 1953,
        make: "Chevrolet",
        model: "3100",
        exterior_color: "Red",
        interior_color: "Beige",
        transmission: "Automatic",
        engine_size: "V-8",
        odometer: 3300,
        images: [img71, img72, img73, img74, img75],
        categories: ["truck"]
    },
    {
        id: 16,
        name: "1932 Lincoln Limousine",
        price: "150,000",
        location: "Salem, Oregon",
        year: 1932,
        make: "Lincoln",
        model: "Limousine",
        exterior_color: "Dark Maroon/Black",
        interior_color: "black / grey",
        transmission: "Manual",
        engine_size: "V-12",
        odometer: 300,
        images: [img76, img77, img78, img79, img80],
        categories: ["antique", "luxury"]
    },
    {
        id: 17,
        name: "1976 Cadillac Eldorado",
        price: "28,000",
        location: "Stormville, New York",
        year: 1976,
        make: "Cadillac",
        model: "Eldorado",
        exterior_color: "Baige",
        interior_color: "Baige",
        transmission: "Automatic",
        engine_size: "V-8",
        odometer: 29301,
        images: [img81, img82, img83, img84, img85],
        categories: ["future-classic","convertible"]
    }
]

export default all_cars;