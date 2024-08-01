type FieldConfigurations = {
  [key: string]: {
    [key: string]: {
      [key: string]: boolean;
    };
  };
};
const fieldConfigurations: FieldConfigurations = {
  Mobiles: {
    Tablets: {
      make: true,
      condition: true,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    Accessories: {
      make: false,
      condition: true,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    "Mobile Phones": {
      make: true,
      condition: true,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    "Smart Watches": {
      make: true,
      condition: true,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },

    "Other Mobiles": {
      make: true,
      condition: true,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
  },
  Vehicles: {
    Cars: {
      make: true,
      condition: true,
      year: true,
      fuelType: true,
      mileage: true,
      transmission: true,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    "Cars on Installments": {
      make: true,
      condition: true,
      year: true,
      fuelType: true,
      mileage: true,
      transmission: true,
      downPayment: true,
      monthlyInstallment: true,
      installmentPlan: true,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    "Cars Accessories": {
      make: false,
      condition: true,
      year: false,
      fuelType: false,
      mileage: false,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    "Spare Parts": {
      make: false,
      condition: true,
      year: false,
      fuelType: false,
      mileage: false,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    Buses: {
      make: true,
      type: true,
      condition: true,
      year: true,
      mileage: true,
      fuelType: true,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    Vans: {
      make: true,
      type: true,
      condition: true,
      year: true,
      mileage: true,
      fuelType: true,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    Trucks: {
      make: true,
      type: true,
      condition: true,
      year: true,
      mileage: true,
      fuelType: true,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    Boats: {
      make: true,
      type: false,
      condition: true,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    Trailers: {
      make: true,
      type: true,
      condition: true,
      mileage: true,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
    "Other Vehicles": {
      condition: true,
      year: true,
      mileage: true,
      transmission: false,
      downPayment: false,
      installmentPlan: false,
      monthlyInstallment: false,
      location: true,
      price: true,
      adTitle: true,
      description: true,
    },
  },
  "Property for Sale": {
    "Land & Plots": {
      area: true,
    },
    Houses: {
      area: true,
      furnished: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Apartments & Flats": {
      area: true,
      furnished: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Shops - Offices - Commercial Space": {
      area: true,
      furnished: true,
      bathrooms: true,
    },
    "Portions & Floors": {
      area: true,
      furnished: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Other Properties for Sale": {
      area: true,
    },
  },
  "Property for Rent": {
    "Land & Plots": {
      area: true,
    },
    Houses: {
      area: true,
      furnished: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Apartments & Flats": {
      area: true,
      furnished: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Shops - Offices - Commercial Space": {
      area: true,
      furnished: true,
      bathrooms: true,
    },
    "Portions & Floors": {
      area: true,
      furnished: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Roommates & Paying Guests": {
      area: true,
      furnished: true,
    },
    Rooms: {
      area: true,
      furnished: true,
    },
    "Vacation Rentals - Guest Houses": {
      area: true,
      bedrooms: true,
      bathrooms: true,
    },
    "Other Properties for Rent": {
      area: true,
    },
  },
  "Electronics & Home Appliances": {
    "Computers & Accessories": {
      condition: true,
    },
    "TV - Video - Audio": {
      condition: true,
    },
    "Cameras & Accessories": {
      condition: true,
    },
    "Games & Entertainment": {
      condition: true,
    },
    "Generators, UPS & Power Solutions": {
      condition: true,
    },
    "Kitchen Appliances": {
      condition: true,
    },
    "AC & Coolers": {
      condition: true,
    },
    "Fridges & Freezers": {
      condition: true,
    },
    "Washing Machines & Dryer": {
      condition: true,
    },
    "Other Home Appliances": {
      condition: true,
    },
  },
  Bikes: {
    Motorcycles: {
      make: true,
      type: true,
      condition: true,
      mileage: true,
    },
    "Spare Parts": {
      condition: true,
    },
    "Bikes Accessories": {
      make: true,
      condition: true,
    },
    Bicycles: {
      make: true,
      condition: true,
      year: true,
    },
    "ATV & Quads": {
      make: true,
      condition: true,
      year: true,
      mileage: true,
    },
    Scooters: {
      make: true,
      condition: true,
    },
    "Other Bikes": {
      condition: true,
    },
  },
  "Business, Industrial & Agriculture": {
    "Construction & Heavy Machinery": {
      make: true,
      condition: true,
      type: true,
      workingHours: true,
    },
  },
  //   Jobs: {
  //     "Administration, accounting": {
  //       companyName: true,
  //       salaryForm: true,
  //       salaryTo: true,
  //       salaryPeriod: true,
  //       positionType: true,
  //     },
  //   },

  "Furniture & Home Decor": {
    "Sofa & Chairs": {
      condition: true,
    },
    "Beds & Wardrobes": {
      condition: true,
    },
    "Tables & Dining": {
      condition: true,
    },
    "Bathroom Accessories": {
      condition: true,
    },
    "Garden & Outdoor": {
      condition: true,
    },
    "Painting & Mirrors": {
      condition: true,
    },
    "Rugs & Carpets": {
      condition: true,
    },
    "Curtains & Blinds": {
      condition: true,
    },
    "Office Furniture": {
      condition: true,
    },
    "Home Decoration": {
      condition: true,
    },
    "Other Household Items": {
      condition: true,
    },
  },
  "Fashion & Beauty": {
    "Fashion Accessories": {
      condition: true,
    },
    Clothes: {
      condition: true,
    },
    Footwear: {
      condition: true,
    },
    Bags: {
      condition: true,
    },
    Jewellery: {
      condition: true,
    },
    Makeup: {
      condition: true,
    },
    "Skin & Hair": {
      condition: true,
    },
    Watches: {
      condition: true,
    },
    Fragrance: {
      condition: true,
    },
    Wedding: {
      condition: true,
    },
    "Other Fashion": {
      condition: true,
    },
  },
  "Books, Sports & Hobbies": {
    "Books & Magazines": {
      condition: true,
    },
    "Musical Instruments": {
      condition: true,
    },
    "Sports Equipment": {
      condition: true,
    },
    "Gym & Fitness": {
      condition: true,
    },
    "Other Hobbies": {
      condition: true,
    },
  },
  Kids: {
    "Kids Furniture": {
      condition: true,
    },
    "Kids Vehicles": {
      condition: true,
    },
    Toys: {
      condition: true,
    },
    "Baby Gear": {
      condition: true,
    },
    "Bath & Diapers": {
      condition: true,
    },
    "Swings & Slides": {
      condition: true,
    },
    "Kids Clothing": {
      condition: true,
    },
    "Kids Accessories": {
      condition: true,
    },
    "Other Options For Kids": {
      condition: true,
    },
  },
};

export default fieldConfigurations;
