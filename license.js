
const generateREADME = (data, getFetch) => {

    let license = makeBadge(data.license)
    let pathURL = mypath(data.license)
    let result = (`

#     ${data.title}
   
    
![License](${license})
   
    
    
#      Description   
         ${data.description}
    


    
#     Table of Contents
    
\n* [Installation](#Installation)

\n* [Usage](#Usage)

\n* [License](#License)

\n* [Contributors](#Contributors)

\n* [Tests](#Tests)

\n* [Questions](#Questions)
          
    
    
    
    
#    Installation
    
            ${data.installation}
            
    
    
#    Usage
    
            ${data.useage}
            
            
    
            
#     Contributors
    
            ${data.contributor}


     
#     License
    
        This project is licensed under the ${data.license}. See the link below for details.
  
\n* [License](${pathURL})  


            
#      Tests
    
            ${data.test}
            
    
#       Questions 
    
        Please contact me for further questions.
            
\n* [GitHub](${getFetch.html_url})

\n* [${data.email}](mailto:${data.email})`)
    
  
    return result;
   
    
    }

const makeBadge = license => {
    let badge;

    switch(license) {
        case "Mozilla Public License 2.0":
            badge = { name: "Mozilla+2.0", color: "yellow" };
            break;

        case "MIT License":
            badge = { name: "MIT", color: "brightgreen" };
            break;
        
        case "Boost Software License 1.0":
            badge = { name: "Boost+Software+1.0", color: "yellowgreen" };
            break;    
    }
    return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}

const mypath = license => {
    let path;

    switch(license){

        case "Mozilla Public License 2.0":
            path = "mpl-2.0";
            break;

        case "MIT License":
            path = "mit";
            break; 
            
         case "Boost Software License 1.0":
            path = "bsl-1.0";
            break;    
    }
    return `https://choosealicense.com/licenses/${path}/`;
  
}


module.exports = generateREADME;
