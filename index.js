// Chapter 40: switch statments: how to complete them

// Recap of the last video 
// use of switch
// switch vs if-else
// example program 
// syntax- first 3 lines 

// understanding the whole program 
const day = "Friday"

switch (day) {
    case "Monday":
        console.log("today is Monday");
        break;
        case "Tuesday":
            console.log("today is Tuesday");
            break;
            case "Wednesday":
            console.log("today is Wednesday");
            break;
            case "Thursday":
            console.log("today is Thursday");
            break;
            case "Friday":
            console.log("today is Friday");
            console.log("Blessed day");
            break;
            case "Saturday":
            console.log("today is Saturday");
            break;
            case "Sunday":
            console.log("today is Sunday");
            break;
            default:
                console.log("invalid");
}