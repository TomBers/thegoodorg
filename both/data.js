//
// if(Meteor.isServer){
//   projects.upsert({
//     _id : "E9e1iLDTDpsWcdoXj",
//     desc : "TEST ClearlySo raised £1.25m debt investment for the London Early Years Foundation, a charity over 100 years old, using an innovative cross-subsidy model where profits from established nurseries support free spaces in deprived areas.",
//     link : "http://www.clearlyso.com/our-clients/1-25m-invested-into-leyf/",
//     img : "http://www.clearlyso.com/wp-content/uploads/2015/03/LEFTTT-857x490.jpg",
//     title : "London Early Years Foundation: a charity raising investment"
//   });
//
// }
Meteor.startup(function(){

  Companies.remove({});
  Categories.remove({});
  Projects.remove({});

  Factory.define('company', Companies, {
    title : '',
    desc : ''
  })

  Factory.create('company', {
    cid: 'Dz8e9awvkqTBoSBR9',
    title:'Company A',
    desc : 'A desc'
  });

  Factory.create('company', {
    cid: 'b4eZsADZK75WMsqXJ',
    title:'Company B',
    desc : 'B desc'
  });

  Factory.create('company', {
    cid: 'Sc2pNrrcgMcFxZAra',
    title:'Company C',
    desc : 'C desc'
  });


  Factory.define('cats', Categories, {
    cat : 'cat',
    subcat : ['subA','subB']
  })

  Factory.create('cats', {
    cat:'Environment',
    subcat : ['Green Technology','Energy Management','Sustainable Transport','Sustainable Products']
  });
  Factory.create('cats', {
    cat:'Human Rights',
    subcat : ['Education','Community','Employment','Food and Shelter','Accessibility']
  })

  Factory.create('cats', {
    cat:'Health',
    subcat : ['Fitness','Mental Health','Rehabilitation','Seniors','Special Needs']
  })





Factory.define('project', Projects, {
  ownerId : 'Dz8e9awvkqTBoSBR9',
  desc : 'descdescdescdescdescdescdescdescdescdescdescdescdesc',
  link : "http://wwwf.imperial.ac.uk/business-school/launchpad-day/",
  img : "http://wwwf.imperial.ac.uk/business-school/launchpad-day/",
  title : "title",
  categories: '',
  interactions:''
})


// 1
Factory.create('project', {
  desc : "ClearlySo raised £1.25m debt investment for the London Early Years Foundation, a charity over 100 years old, using an innovative cross-subsidy model where profits from established nurseries support free spaces in deprived areas.",
  link : "http://www.clearlyso.com/our-clients/1-25m-invested-into-leyf",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/LEFTTT-857x490.jpg",
  title : "London Early Years Foundation: a charity raising investment",
  categories:['Green Technology','Community'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 2
Factory.create('project', {
  desc : "Aduna sells superfood products from emerging markets into developed economies to create sustainable livelihoods in sub-Saharan Africa. They have raised multiple rounds of investment and are quickly scaling their business.\r\n",
  link : "http://www.clearlyso.com/our-clients/sustainable-ethical-and-delicious-how-adunas-shaking-up-farming-in-africa/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/Untitled-71-857x490.jpg",
  title : "Aduna: delicious, healthy products with a super ethical supply chain",
  categories:['Green Technology','Sustainable Transport','Employment'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 3
Factory.create('project', {
  desc : "ClearlySo and our angel network helped Commonplace to raise investment for their app, which uses crowd-sourced data to do better regeneration ",
  link : "http://www.clearlyso.com/our-clients/commonplace-and-the-crowd-for-community-regeneration/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/commonplace1-857x490.jpg",
  title : "Commonplace: using the crowd for community regeneration",
  categories:['Sustainable Products','Energy Management'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 4
Factory.create('project', {
  desc : "We helped this project raise equity investment to roll out their clean, green agricultural products, with Clearly Social Angels investors joined by investors Jon Moulton and Roman Abramovich.  ",
  link : "http://www.clearlyso.com/our-clients/environmentally-friendly-weedkiller-backed-by-key-angel-investors/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/weddingtech1-857x490.jpg",
  title : "Weedingtech: an environmentally-friendly weedkiller backed by angels",
  categories:['Wildlife & Habitat'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

// 5
Factory.create('project', {
  desc : "Our Clearly Social Angels network invested equity into this edtech business, which supports children from disadvantaged backgrounds to access expert mathematics tuition. ",
  link : "http://www.clearlyso.com/our-clients/angel-investment-in-education/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/thirdspace-857x490.jpg",
  title : "Third Space Learning: online learning reducing education inequality",
  categories:['Fitness'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 6
Factory.create('project', {
  desc : "We have worked with HCT Group since 2011, raising debt investment with them through numerous rounds. Their community transport company delivers services that include London’s red buses, social services transport and education and training – and HCT reinvests its profits in the communities it serves. ",
  link : "http://www.clearlyso.com/our-clients/community-transport-raises-millions-in-impact-investment/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/HTC-grouppp-857x490.jpg",
  title : "HCT Group: growing a community-focused business",
  categories:['Mental Health'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 7
Factory.create('project', {
  desc : "Clearly Social Angels investee and Social Investment of the Year winner Playmob connects causes with virtual online gaming through in-app purchases that are part-donation to the charity or organisation.",
  link : "http://www.clearlyso.com/our-clients/gaming-for-good-harnessing-the-power-of-gamers-for-good/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/playmob2-857x490.jpg",
  title : "Playmob – harnessing the power of gamers for good",
  categories:['Rehabilitation'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 8
Factory.create('project', {
  desc : "Buddy is a digital tool to support therapy services. Clients use text messaging to keep a daily diary of what they are doing and how they are feeling, helping to spot and reinforce positive behaviours. Working with ClearlySo, Buddy raised investment of £400k, including from impact fund IVUK.",
  link : "http://www.clearlyso.com/our-clients/ivuk-invest-in-buddys-mental-health-app/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/buddy-857x490.jpg",
  title : "Buddy: an app supporting mental health with an impact fund investor",
  categories:['Seniors'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

// 9
Factory.create('project', {
  desc : "Insane Logic raised investment with ClearlySo to expand their MyChoicePad iPad app, which helps children with speech and language difficulties to communicate with their parents, friends and teachers. The investment included over £150k from Clearly Social Angels ",
  link : "http://www.clearlyso.com/our-clients/investing-in-language-and-communication-for-those-with-special-needs/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/insane-logiccc-857x490.jpg",
  title : "Insane Logic: language and communication for people with special needs",
  categories:['Special Needs'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 10
Factory.create('project', {
  desc : "Rapanui is a super-ethical fashion business set up by two entrepreneurs (and brothers) in their shed on the Isle of Wight, selling sustainable fashion products and helping young people into work.",
  link : "http://www.clearlyso.com/our-clients/rapanui-clothing-with-a-conscience/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/rapanui1-857x490.jpg",
  title : "Rapanui: a sustainable clothing brand with a conscience",
  categories:['Education'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 11
Factory.create('project', {
  desc : "ClearlySo worked with Oopmh! through The Big Venture Challenge.  The business is dedicated to transforming the day-to-day health and quality of life of older people through group-based exercise classes that improve mobility, social interaction and mental stimulation.",
  link : "http://www.clearlyso.com/our-clients/investing-in-oomph-fitness-for-the-elderly/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/oomph3-857x490.jpg",
  title : "Oomph Wellness: health and fitness for the elderly",
  categories:['Food and Shelter'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 12
Factory.create('project', {
  desc : "Enabling the elderly to get online, Breezie uses tablet software to give simple, clear access to vital services that reduce loneliness and isolation and support the health of the elderly. ",
  link : "http://www.clearlyso.com/our-clients/breezie-raised-angel-investment-and-crowdfunding-to-support-the-elderly/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/breezie-857x490.jpg",
  title : "Breezie: getting digitally excluded communities online",
  categories:['Accessibility'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});


});
