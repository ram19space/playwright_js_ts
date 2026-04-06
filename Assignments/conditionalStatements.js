// let browsername = 'firefox'

// if(browsername == 'chrome')
// {
//     console.log("Launch Chrome browser")
// }
// else 
//     console.log("Launch other browsers")

let testtype = "smoke"

switch (testtype)
{
    case  "smoke":
            console.log("Smoke testing")
    break

    case  'sanity':
    console.log("sanity testing")
    break

    default:
    console.log("Regression testing")
}