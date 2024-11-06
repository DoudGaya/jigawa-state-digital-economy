
import oneGp from '@/app/images/1GP.png'
import agric from '@/app/images/Agriculture.png'
import climate from '@/app/images/Climate.png'
import emis from '@/app/images/EMiS.png'
import hmis from '@/app/images/HMIS.png'
import subeb from '@/app/images/SUBEB.png'
import basic from '@/app/images/basiceducation1.png'
import budget from '@/app/images/budget1.png'
import finance from '@/app/images/finance1.png'
import information from '@/app/images/information.png'
import jgwebsite from '@/app/images/jgwebsite1.png'
import land from '@/app/images/land1.png'
import specialduties from '@/app/images/specialduties.png'
import water from '@/app/images/water.png'
import geo from '@/app/images/Geography.png'
// import engage from '@/app/images/Engagement.png'
// import amis from '@/app/images/AMIS.png'
// import stb from '@/app/images/STB.png'
// import tech from '@/app/images/TECHNOLOGY.png'
// import claimcourt from '@/app/images/claimscourt1.png'
// import icttechnical from '@/app/images/icttechnical.png'
// import identity from '@/app/images/identity.png'
// import jichma from '@/app/images/jichma.png'
// import jiglogo from '@/app/images/jiglogo2.png'
// import jmis from '@/app/images/jmis.png'
// import kpis from '@/app/images/kpis.png'
// import revenue from '@/app/images/revenue.png'
// import socialregister from '@/app/images/socialregister.png'
// import womenAffairs from '@/app/images/women_affairs1.png'


// const endpoints = [
//   {
//     name: "All Info",
//     path: "/api/v2/all-info",
//     description: "Retrieves all available information about a registered indigene of Jigawa State.",
//     permission: "all",
//     requestBody: {
//       jigawa_id: "string"
//     },
//     responseFields: [
//       "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
//       "email_address", "phone_number", "alt_phone_number", "address", "passport", "polling_unit", "ward",
//       "lga", "marital_status", "occupation", "maiden_name", "nin", "bvn", "voter_card_no", "driver_license_no",
//       "passport_no", "father_name", "mother_name", "spouse_name", "no_of_dependent", "nok", "nok_phone_no",
//       "nok_address", "nok_polling_unit", "nok_ward", "nok_lga", "nok_relationship", "category"
//     ],
//     exampleResponse: {
//       status: "success",
//       message: "Indigene information retrieved successfully",
//       result: {
//         jigawa_id: "JG-01-02-501",
//         title: "Mr.",
//         first_name: "John",
//         middle_name: "Doe",
//         surname: "Smith",
//         full_name: "John Doe Smith",
//         gender: "Male",
//         dob: "1990-01-01",
//         age: 34,
//         email_address: "john.smith@example.com",
//         phone_number: "+2347012345678",
//         alt_phone_number: "+2348098765432",
//         address: "123 Main Street, Dutse, Jigawa State",
//         passport: "url_to_passport_image",
//         polling_unit: "Dutse Ward 1",
//         ward: "Dutse Ward",
//         lga: "Dutse",
//         marital_status: "Single",
//         occupation: "Engineer",
//         maiden_name: null,
//         nin: "12345678901",
//         bvn: "12345678901",
//         voter_card_no: "987654321",
//         driver_license_no: "A123456789",
//         passport_no: "B123456789",
//         father_name: "Mr. Doe Smith",
//         mother_name: "Mrs. Jane Doe Smith",
//         spouse_name: null,
//         no_of_dependent: 0,
//         nok: "Jane Doe",
//         nok_phone_no: "+2347012345679",
//         nok_address: "123 Main Street, Dutse, Jigawa State",
//         nok_polling_unit: "Dutse Ward 1",
//         nok_ward: "Dutse Ward",
//         nok_lga: "Dutse",
//         nok_relationship: "Sister",
//         category: "Citizen"
//       }
//     }
//   },
//   {
//     name: "Address Info",
//     path: "/api/v2/address-info",
//     description: "Retrieves address information about a registered indigene of Jigawa State.",
//     permission: "all or address-info",
//     requestBody: {
//       jigawa_id: "string"
//     },
//     responseFields: [
//       "jigawa_id", "first_name", "middle_name", "surname", "full_name", "address", "polling_unit", "ward", "lga"
//     ],
//     exampleResponse: {
//       status: "success",
//       message: "Indigene information retrieved successfully",
//       result: {
//         jigawa_id: "JG-01-02-501",
//         first_name: "John",
//         middle_name: "Doe",
//         surname: "Smith",
//         full_name: "John Doe Smith",
//         address: "123 Main Street, Dutse, Jigawa State",
//         polling_unit: "Dutse Ward 1",
//         ward: "Dutse Ward",
//         lga: "Dutse"
//       }
//     }
//   },
//   // Add the remaining 11 endpoints here with their respective details
// ]





export const socialLinks = [
    {
        id: 1,
        name: "Facebook",
        url: "https://web.facebook.com/jigawa.digital.economy",
        icon: "fa fa-facebook",
    },
    {
        id: 2,
        name: "Twitter",
        url: "#",
        icon: "fa fa-twitter",
    },
    {
        id: 3,
        name: "Instagram",
        url: "#",
        icon: "fa fa-instagram",
    },
    {
        id: 4,
        name: "Youtube",
        url: "#",
        icon: "fa fa-youtube",
    },
    {
        id: 5,
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/jigawa-state-government",
        icon: "fa fa-linkedin",
    },
    {
        id: 6,
        name: "Website",
        url: "https://www.jigawastate.gov.ng",
        icon: "fa fa-globe",
    }
]


export const endpoints = [
  {
    name: "All Info",
    path: "/api/v2/all-info",
    description: "Retrieves all available information about a registered indigene of Jigawa State.",
    permission: "all",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "address", "passport", "polling_unit", "ward",
      "lga", "marital_status", "occupation", "maiden_name", "nin", "bvn", "voter_card_no", "driver_license_no",
      "passport_no", "father_name", "mother_name", "spouse_name", "no_of_dependent", "nok", "nok_phone_no",
      "nok_address", "nok_polling_unit", "nok_ward", "nok_lga", "nok_relationship", "category"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        address: "123 Main Street, Dutse, Jigawa State",
        passport: "url_to_passport_image",
        polling_unit: "Dutse Ward 1",
        ward: "Dutse Ward",
        lga: "Dutse",
        marital_status: "Single",
        occupation: "Engineer",
        maiden_name: null,
        nin: "12345678901",
        bvn: "12345678901",
        voter_card_no: "987654321",
        driver_license_no: "A123456789",
        passport_no: "B123456789",
        father_name: "Mr. Doe Smith",
        mother_name: "Mrs. Jane Doe Smith",
        spouse_name: null,
        no_of_dependent: 0,
        nok: "Jane Doe",
        nok_phone_no: "+2347012345679",
        nok_address: "123 Main Street, Dutse, Jigawa State",
        nok_polling_unit: "Dutse Ward 1",
        nok_ward: "Dutse Ward",
        nok_lga: "Dutse",
        nok_relationship: "Sister",
        category: "Citizen"
      }
    }
  },
  {
    name: "Address Info",
    path: "/api/v2/address-info",
    description: "Retrieves address information about a registered indigene of Jigawa State.",
    permission: "all or address-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "first_name", "middle_name", "surname", "full_name", "address", "polling_unit", "ward", "lga"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        address: "123 Main Street, Dutse, Jigawa State",
        polling_unit: "Dutse Ward 1",
        ward: "Dutse Ward",
        lga: "Dutse"
      }
    }
  },
  {
    name: "Identity Info",
    path: "/api/v2/identity-info",
    description: "Retrieves identity information about a registered indigene of Jigawa State.",
    permission: "all or identity-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "nin", "bvn", "voter_card_no", "driver_license_no", "passport_no"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        nin: "12345678901",
        bvn: "12345678901",
        voter_card_no: "987654321",
        driver_license_no: "A123456789",
        passport_no: "B123456789"
      }
    }
  },
  {
    name: "Family Info",
    path: "/api/v2/family-info",
    description: "Retrieves family information about a registered indigene of Jigawa State.",
    permission: "all or family-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "father_name", "mother_name", "spouse_name", "no_of_dependent", "nok", "nok_phone_no", "nok_relationship"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        father_name: "Mr. Doe Smith",
        mother_name: "Mrs. Jane Doe Smith",
        spouse_name: null,
        no_of_dependent: 0,
        nok: "Jane Doe",
        nok_phone_no: "+2347012345679",
        nok_relationship: "Sister"
      }
    }
  },
  {
    name: "Parent Info",
    path: "/api/v2/parent-info",
    description: "Retrieves parent information about a registered indigene of Jigawa State.",
    permission: "all or parent-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "father_name", "mother_name"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        father_name: "Mr. Doe Smith",
        mother_name: "Mrs. Jane Doe Smith"
      }
    }
  },
  {
    name: "Personal Info",
    path: "/api/v2/personal-info",
    description: "Retrieves personal information about a registered indigene of Jigawa State.",
    permission: "all or personal-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "occupation", "maiden_name", "category"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        occupation: "Engineer",
        maiden_name: null,
        category: "Citizen"
      }
    }
  },
  {
    name: "NOK Info",
    path: "/api/v2/nok-info",
    description: "Retrieves next of kin information about a registered indigene of Jigawa State.",
    permission: "all or nok-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "nok", "nok_phone_no", "nok_address", "nok_polling_unit", "nok_ward", "nok_lga", "nok_relationship"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        nok: "Jane Doe",
        nok_phone_no: "+2347012345679",
        nok_address: "123 Main Street, Dutse, Jigawa State",
        nok_polling_unit: "Dutse Ward 1",
        nok_ward: "Dutse Ward",
        nok_lga: "Dutse",
        nok_relationship: "Sister"
      }
    }
  },
  {
    name: "Personal and Address Info",
    path: "/api/v2/personal-and-address-info",
    description: "Retrieves personal and address information about a registered indigene of Jigawa State.",
    permission: "all or personal-and-address-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "occupation", "maiden_name", "category",
      "address", "ward", "lga", "polling_unit"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        occupation: "Engineer",
        maiden_name: null,
        category: "Citizen",
        polling_unit: "Dutse 1",
        ward: "Dutse",
        lga: "Dutse",
        address: "NO 1234 Dutse Street"
      }
    }
  },
  {
    name: "Personal and Family Info",
    path: "/api/v2/personal-and-family-info",
    description: "Retrieves personal and family information about a registered indigene of Jigawa State.",
    permission: "all or personal-and-family-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "occupation", "maiden_name", "category",
      "father_name", "mother_name", "spouse_name", "no_of_dependent", "nok", "nok_phone_no", "nok_relationship"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        occupation: "Engineer",
        maiden_name: null,
        category: "Citizen",
        father_name: "Mr. Doe Smith",
        mother_name: "Mrs. Jane Doe Smith",
        spouse_name: null,
        no_of_dependent: 0,
        nok: "Jane Doe",
        nok_phone_no: "+2347012345679",
        nok_relationship: "Sister"
      }
    }
  },
  {
    name: "Personal and Identity Info",
    path: "/api/v2/personal-and-identity-info",
    description: "Retrieves personal and identity information about a registered indigene of Jigawa State.",
    permission: "all or personal-and-identity-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "occupation", "maiden_name", "category",
      "nin", "bvn", "voter_card_no", "driver_license_no", "passport_no"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        occupation: "Engineer",
        maiden_name: null,
        category: "Citizen",
        nin: "12345678901",
        bvn: "12345678901",
        voter_card_no: "987654321",
        driver_license_no: "A123456789",
        passport_no: "B123456789"
      }
    }
  },
  {
    name: "Personal and Parent Info",
    path: "/api/v2/personal-and-parent-info",
    description: "Retrieves personal and parent information about a registered indigene of Jigawa State.",
    permission: "all or personal-and-parent-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "occupation", "maiden_name", "category",
      "father_name", "mother_name"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        occupation: "Engineer",
        maiden_name: null,
        category: "Citizen",
        father_name: "Mr. Doe Smith",
        mother_name: "Mrs. Jane Doe Smith"
      }
    }
  },
  {
    name: "Personal and NOK Info",
    path: "/api/v2/personal-and-nok-info",
    description: "Retrieves personal and next of kin information about a registered indigene of Jigawa State.",
    permission: "all or personal-and-nok-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "occupation", "maiden_name", "category",
      "nok", "nok_phone_no", "nok_address", "nok_polling_unit", "nok_ward", "nok_lga", "nok_relationship"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        occupation: "Engineer",
        maiden_name: null,
        category: "Citizen",
        nok: "Jane Doe",
        nok_phone_no: "+2347012345679",
        nok_address: "123 Main Street, Dutse, Jigawa State",
        nok_polling_unit: "Dutse Ward 1",
        nok_ward: "Dutse Ward",
        nok_lga: "Dutse",
        nok_relationship: "Sister"
      }
    }
  },
  {
    name: "Custom Info",
    path: "/api/v2/custom-info",
    description: "Retrieves specific information about a registered indigene of Jigawa State based on the columns specified in the request.",
    permission: "custom-info",
    requestBody: {
      jigawa_id: "string",
      columns: "array"
    },
    responseFields: [
      "Depends on the columns specified in the request"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        first_name: "John",
        last_name: "Smith",
        age: 34
      }
    }
  }
]

export const ministries =  [
    {
      id: 1,
      url: "https://www.jigawastate.gov.ng/",
      name: "State Official Website",
      image: jgwebsite
    },
    {
      id: 2,
      url: "https://emis.jg.gov.ng",
      name: "Education Management System",
      image: emis
    },
  
    // {
    //   id: 4,
    //   url: "https://oneapi.api.jg.gov.ng",
    //   name: "Jigawa One Government Portal",
    //   image: oneGp
    // },
  
    {
      id: 12,
      url: "https://hemis.jg.gov.ng",
      name: "Health Management Information System",
      image: hmis
    },
    
    {
      id: 5,
      url: "https://land.jg.gov.ng",
      name: "Ministry of Land and Housing",
      image: land
    },
  
    
    {
      id: 3,
      url: "https://budget.jg.gov.ng",
      name: "Ministry of Budget",
      image: budget
    },
   
  
    
    {
      id: 6,
      url: "",
      name: "Ministry of Informations, Youth Sport and Culture",
      image: information
    },
    
    {
      id: 7,
      url: "",
      name: "Ministry of Special Duties",
      image: specialduties
    },
    {
      id: 8,
      url: "https://finance.jg.gov.ng",
      name: "Ministry of Finance ",
      image: finance
    },
    {
      id: 9,
      url: "https://water.jg.gov.ng",
      name: "Ministry of Water Resources",
      image: water
    },
    {
      id: 10,
      url: "",
      name: "Ministry of Agricultural Development",
      image: agric
    },
    {
      id: 11,
      url: "",
      name: "Climate Change and Digital Energy Information System",
      image: climate
    },
   
    {
      id: 13,
      url: "",
      name: "Jigawa State Universal Basic Education Board ",
      image: subeb
    },
    {
      id: 14,
      url: "",
      name: "Ministry of Basic Education",
      image: basic
    },
    {
      id: 15,
      url: "",
      name: "Ministry of Budget",
      image: budget
    },
    {
      id: 16,
      url: "",
      name: "Jigawa Geographic Information System",
      image: geo
    },
  ]