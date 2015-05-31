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
  Collaborations.remove({});
  UserProfiles.remove({});


  Factory.define('userprofile', UserProfiles, {
    loginID:   '',
    loginEmail:   '',

    registerAs:  '',

    contact_bool:  true,
    contact_num:  '',
    contact_mail:  '',

    // other ...
    mailout_monthly:  true,
    mailout_updates:  true,

    //Hidden fields...
    userType: '' ,

    // CRUD...
    createdAt: '',

    // perhaps let's not delete anything... set to inactive instead
    isActive: true
  })

  Factory.create('userprofile', {
    loginID:   'j@da1e.com',
    loginEmail:   'j@da1e.com',

    registerAs:  'Corporate Rep',

    contact_bool:  true,
    contact_num:  '07958 906 906',
    contact_mail:  'j@da1e.com',

    // other ...
    mailout_monthly:  true,
    mailout_updates:  true,

    //Hidden fields...
    userType: '' ,

    // CRUD...
    createdAt: '',

    // perhaps let's not delete anything... set to inactive instead
    isActive: true
});

  Factory.define('company', Companies, {
    cid: '',
    name : '',
    logo:'',

    hline: '',
    about : '',
    url:'',
    type:'',

    industry:[''],
    loc: '',
    addr: '',

    rep_name:'',
    rep_role:'',
    rep_email:'',
    rep_tel:'',

    img:'',
    projects:['']
  })

  Factory.create('company', {
    cid:'S1',
    name : 'Insane Logic',
    hline: 'help children with speech and language difficulties',
    logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/insane-logic-b-n-w-474x454.jpg',
    about : 'Insane Logic raised investment with ClearlySo – they help children with speech and language difficulties to communicate via their MyChoicePad app',
    url:' "http://www.insanelogic.co.uk/"',
    loc: '',
    addr: '',

    rep_name:'Jonathan Dale',
    rep_role:'CSR rep',
    rep_email:'j@da1e.com',
    rep_tel:'+44 7958......',

    type:'StartUp'  });


    Factory.create('company', {
      cid:'S2',
      name : 'LEYF',
      hline: 'support for nurseries',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/left-bnw-474x454.jpg',
      about : 'ClearlySo raised £1.25m investment for LEYF, where profits from established nurseries support free spaces in deprived areas.',
      url:'https://www.leyf.org.uk',
      loc: '',
      addr: '',

      rep_name:'',
      rep_role:'',
      rep_email:'',
      rep_tel:'',

      type:'StartUp'  });

    Factory.create('company', {
      cid:'S3',
      name : 'Breezie',
      hline: 'Enabling the elderly to get online',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/brezzie-b-n-w-474x454.jpg',
      about : 'Enabling the elderly to get online, Breezie uses tablet software to give simple, clear access to vital services. It was backed by 5 Clearly Social angels.',
      url:'http://www.breezie.com/',

      loc: '',
      addr: '',

      rep_name:'',
      rep_role:'',
      rep_email:'',
      rep_tel:'',

      type:'StartUp'  });

    Factory.create('company', {
      cid:'S4',
      name : 'Oomph',
      hline: 'group-based exercise classes',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/oomph-b-n-w-474x454.jpg',
      about : 'ClearlySo worked with Oopmh! through The Big Venture Challenge. They transform the health of older people through group-based exercise classes.',
      url:'http://www.oomph-wellness.org',

      loc: '',
      addr: '',

      rep_name:'',
      rep_role:'',
      rep_email:'',
      rep_tel:'',

      type:'StartUp'  });

    Factory.create('company', {
      cid:'S5',
      name : 'Fluency',
      hline: 'Tech-for-good',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/Unnamed-6-474x454.jpg',
      about : 'Backed by Clearly Social Angels, Tech-for-good Fluency gives young people digital skills, supporting employability and introducing them to tech jobs.',
      url:' "http://www.fluency.io/"',

      loc: '',
      addr: '',

      rep_name:'',
      rep_role:'',
      rep_email:'',
      rep_tel:'',

      type:'StartUp'  });

    Factory.create('company', {
      cid:'S6',
      name : 'Rapanui',
      hline: 'super-ethical fashion',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/rapanui-474x454.jpg',
      about : 'Rapanui is a super-ethical fashion business, doing sustainable fashion retail and helping young people into work.',
      url:' "https://rapanuiclothing.com/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S7',
      name : 'Playmob',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/playmob-b-n-w-474x454.jpg',
      about : 'Clearly Social Angels investee Playmob connects causes with online gaming through in-app purchases that are part-donation to a charity.',
      url:' "https://playmob.com/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S8',
      name : 'Aduna',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/aduna-b-n-w1-474x454.jpg',
      about : 'Aduna sells superfood products from emerging markets into developed economies to create sustainable livelihoods in sub-Saharan Africa.',
      url:' ""',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S9',
      name : 'HCT',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/hct-group-b-n-w-474x454.jpg',
      about : 'HCT delivers services that include London’s red buses, social services transport and training – and reinvests its profits in the community.',
      url:' "http://aduna.com/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S10',
      name : 'Commonplace',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/commonplace-b-w-474x454.jpg',
      about : 'ClearlySo and our angel network helped Commonplace to raise investment for their app, which uses crowd-sourced data for community regeneration',
      url:' "http://commonplace.is/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S11',
      name : 'Buddy',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/buddy-b-nw-474x454.jpg',
      about : 'Buddy helps mental health patients use text messaging to keep a daily diary, helping to spot and reinforce positive behaviours.',
      url:' "https://www.buddyapp.co.uk/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S12',
      name : 'Third Space',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/third-space-b-n-w-474x454.jpg',
      about : 'Our Clearly Social Angels network invested into this edtech business, which supports children from disadvantaged backgrounds to access mathematics tuition.',
      url:' "http://thirdspacelearning.com/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S13',
      name : 'Weedingtech',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/weedingtechb-n-w-474x454.jpg',
      about : 'We helped them raise equity investment to roll out their clean green agricultural products, with investment from our angel network.',
      url:' "http://weedingtech.com/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S14',
      name : 'Framework',
      hline: 'headline - tbd',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/Framework-logo-site-476x454.png',
      about : 'Framework is charity and specialist housing association dedicated to helping homeless people, preventing homelessness, and promoting opportunities',
      url:' "http://www.frameworkha.org/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S15',
      name : 'Ethical Property Company',
      hline: 'headline',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/EPC-black-and-white-logo-476x454.png',
      about : 'Ethical Property supports a wide range of charities, social enterprises and small local organisations through the provision of modern, affordable and flexible workspace',
      url:' "http://www.ethicalproperty.co.uk/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S16',
      name : 'Brain in Hand',
      hline: 'Autism support',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/brain-in-hand-2-474x454.jpg',
      about : 'Brain-in-Hand allows people living with autism to live more independent and productive lives. Brain in Hand raised £600k investment with ClearlySo.',
      url:' "http://braininhand.co.uk/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S17',
      name : 'StudentFunder',
      hline: 'Blending crowdfunding and peer-to-peer lending',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/student-funder-2-474x454.jpg',
      about : 'Blending crowdfunding and peer-to-peer lending, students raise finance for studies. They raised investment with ClearlySo, backed by Clearly Social Angels.',
      url:' "http://www.studentfunder.com/"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S18',
      name : 'Time for Medicine',
      hline: 'remote diagnostics',
      logo:' http://www.clearlyso.com/wp-content/uploads/2015/02/time-for-medicine2-474x454.jpg',
      about : '"Founded by clinicians, the company’ offers remote diagnostics, and received funding from the ClearlySo angel investor network in 2013.',
      url:' "https://www.timeformedicine.com/Time-For-Medicine"',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S19',
      name : 'K10',
      hline: 'a training company that helps young Londoners into the construction industry',
      logo:'http://www.clearlyso.com/wp-content/uploads/2015/02/K-10-B-N-W-474x454.jpg',
      about : 'We helped K10, a training company that helps young Londoners into the construction industry, raise investment through the Big Venture Challenge',
      url:'https://www.k-10.co.uk',
      type:'StartUp'  });

    Factory.create('company', {
      cid:'S20',
      name : 'Energy Deck',
      hline: 'EnergyDeck is a platform that helps buildings become greener and more sustainable',
      logo:'http://www.clearlyso.com/wp-content/uploads/2015/02/energy-deck-b-and-w-474x454.jpg',
      about : 'EnergyDeck is a platform that helps buildings become greener and more sustainable, and received funding from the ClearlySo investor network in 2014',
      url: 'https://www.energydeck.com/home/' ,
      type:'StartUp'  });





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
  });

  Factory.create('cats', {
    cat:'Health',
    subcat : ['Fitness','Mental Health','Rehabilitation','Seniors','Special Needs']
  })




Factory.define('project', Projects, {
  ownerId : 'S1',
  hline: 'Project 1',
  desc : 'descdescdescdescdescdescdescdescdescdescdescdescdesc',
  link : "http://wwwf.imperial.ac.uk/business-school/launchpad-day/",
  img : "http://wwwf.imperial.ac.uk/business-school/launchpad-day/",
  title : "title",
  categories: '',
  interactions:''
})


// 1
Factory.create('project', {
  ownerId : 'S1',
  hline: 'Project 1',
  desc : "ClearlySo raised £1.25m debt investment for the London Early Years Foundation, a charity over 100 years old, using an innovative cross-subsidy model where profits from established nurseries support free spaces in deprived areas.",
  link : "http://www.clearlyso.com/our-clients/1-25m-invested-into-leyf",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/insane-logic-b-n-w-474x454.jpg",
  title : "London Early Years Foundation: a charity raising investment",
  categories:['Green Technology','Community'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 2
Factory.create('project', {
  ownerId : 'S2',
  hline: 'Project 2',
  desc : "Aduna sells superfood products from emerging markets into developed economies to create sustainable livelihoods in sub-Saharan Africa. They have raised multiple rounds of investment and are quickly scaling their business.\r\n",
  link : "http://www.clearlyso.com/our-clients/sustainable-ethical-and-delicious-how-adunas-shaking-up-farming-in-africa/",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/left-bnw-474x454.jpg",
  title : "Aduna: delicious, healthy products with a super ethical supply chain",
  categories:['Sustainable Transport','Employment'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 3
Factory.create('project', {
  ownerId : 'S3',
  hline: 'Project 3',
  desc : "ClearlySo and our angel network helped Commonplace to raise investment for their app, which uses crowd-sourced data to do better regeneration ",
  link : "http://www.clearlyso.com/our-clients/commonplace-and-the-crowd-for-community-regeneration/",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/brezzie-b-n-w-474x454.jpg",
  title : "Commonplace: using the crowd for community regeneration",
  categories:['Sustainable Products','Energy Management'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 4
Factory.create('project', {
  ownerId : 'S4',
  hline: 'Project 4',
  desc : "We helped this project raise equity investment to roll out their clean, green agricultural products, with Clearly Social Angels investors joined by investors Jon Moulton and Roman Abramovich.  ",
  link : "http://www.clearlyso.com/our-clients/environmentally-friendly-weedkiller-backed-by-key-angel-investors/",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/brezzie-b-n-w-474x454.jpg",
  title : "Weedingtech: an environmentally-friendly weedkiller backed by angels",
  categories:['Wildlife & Habitat'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

// 5
Factory.create('project', {
  ownerId : 'S2',
  hline: 'Project 5',
  desc : "Our Clearly Social Angels network invested equity into this edtech business, which supports children from disadvantaged backgrounds to access expert mathematics tuition. ",
  link : "http://www.clearlyso.com/our-clients/angel-investment-in-education/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/thirdspace-857x490.jpg",
  title : "Third Space Learning: online learning reducing education inequality",
  categories:['Fitness'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 6
Factory.create('project', {
  ownerId : 'S6',
  hline: 'Project 6',
  desc : "We have worked with HCT Group since 2011, raising debt investment with them through numerous rounds. Their community transport company delivers services that include London’s red buses, social services transport and education and training – and HCT reinvests its profits in the communities it serves. ",
  link : "http://www.clearlyso.com/our-clients/community-transport-raises-millions-in-impact-investment/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/HTC-grouppp-857x490.jpg",
  title : "HCT Group: growing a community-focused business",
  categories:['Mental Health'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 7
Factory.create('project', {
  ownerId : 'S7',
  hline: 'Project 7',
  desc : "Clearly Social Angels investee and Social Investment of the Year winner Playmob connects causes with virtual online gaming through in-app purchases that are part-donation to the charity or organisation.",
  link : "http://www.clearlyso.com/our-clients/gaming-for-good-harnessing-the-power-of-gamers-for-good/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/playmob2-857x490.jpg",
  title : "Playmob – harnessing the power of gamers for good",
  categories:['Rehabilitation'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 8
Factory.create('project', {
  ownerId : 'S8',
  hline: 'Project 8',
  desc : "Buddy is a digital tool to support therapy services. Clients use text messaging to keep a daily diary of what they are doing and how they are feeling, helping to spot and reinforce positive behaviours. Working with ClearlySo, Buddy raised investment of £400k, including from impact fund IVUK.",
  link : "http://www.clearlyso.com/our-clients/ivuk-invest-in-buddys-mental-health-app/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/buddy-857x490.jpg",
  title : "Buddy: an app supporting mental health with an impact fund investor",
  categories:['Seniors'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

// 9
Factory.create('project', {
  ownerId : 'S9',
  hline: 'Project 9',
  desc : "Insane Logic raised investment with ClearlySo to expand their MyChoicePad iPad app, which helps children with speech and language difficulties to communicate with their parents, friends and teachers. The investment included over £150k from Clearly Social Angels ",
  link : "http://www.clearlyso.com/our-clients/investing-in-language-and-communication-for-those-with-special-needs/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/insane-logiccc-857x490.jpg",
  title : "Insane Logic: language and communication for people with special needs",
  categories:['Special Needs'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 10
Factory.create('project', {
  ownerId : 'S1',
  hline: 'Project 10',
  desc : "Rapanui is a super-ethical fashion business set up by two entrepreneurs (and brothers) in their shed on the Isle of Wight, selling sustainable fashion products and helping young people into work.",
  link : "http://www.clearlyso.com/our-clients/rapanui-clothing-with-a-conscience/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/rapanui1-857x490.jpg",
  title : "Rapanui: a sustainable clothing brand with a conscience",
  categories:['Education'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 11
Factory.create('project', {
  ownerId : 'S1',
  hline: 'Project 11',
  desc : "ClearlySo worked with Oopmh! through The Big Venture Challenge.  The business is dedicated to transforming the day-to-day health and quality of life of older people through group-based exercise classes that improve mobility, social interaction and mental stimulation.",
  link : "http://www.clearlyso.com/our-clients/investing-in-oomph-fitness-for-the-elderly/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/oomph3-857x490.jpg",
  title : "Oomph Wellness: health and fitness for the elderly",
  categories:['Food and Shelter'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});
// 12
Factory.create('project', {
  ownerId : 'S12',
  hline: 'Project 12',
  desc : "Enabling the elderly to get online, Breezie uses tablet software to give simple, clear access to vital services that reduce loneliness and isolation and support the health of the elderly. ",
  link : "http://www.clearlyso.com/our-clients/breezie-raised-angel-investment-and-crowdfunding-to-support-the-elderly/",
  img : "http://www.clearlyso.com/wp-content/uploads/2015/03/breezie-857x490.jpg",
  title : "Breezie: getting digitally excluded communities online",
  categories:['Accessibility'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

//13
Factory.create('project', {
  ownerId : 'S13',
  hline: 'Project 13',
  desc : "Project 13----------------------------------------",
  link : "http://www.clearlyso.com/our-clients/breezie-raised-angel-investment-and-crowdfunding-to-support-the-elderly/",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/weedingtechb-n-w-474x454.jpg",
  title : "P13 - title",
  categories:['Green Technology','Energy Management','Sustainable Transport',
  'Sustainable Products','Fitness','Mental Health','Rehabilitation',
  'Seniors','Special Needs','Education','Community','Employment',
  'Food and Shelter','Accessibility'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

//14
Factory.create('project', {
  ownerId : 'S14',
  hline: 'Project 14',
  desc : "Project 14----------------------------------------",
  link : "http://www.clearlyso.com/our-clients/breezie-raised-angel-investment-and-crowdfunding-to-support-the-elderly/",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/Framework-logo-site-476x454.png",
  title : "P14 - title",
  categories:['Green Technology','Energy Management','Sustainable Transport',
  'Sustainable Products','Fitness','Mental Health','Rehabilitation',
  'Seniors','Special Needs','Education','Community','Employment',
  'Food and Shelter','Accessibility'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});

//15
Factory.create('project', {
  ownerId : 'S15',
  hline: 'Project 15',
  desc : "Project 15----------------------------------------",
  link : "http://www.clearlyso.com/our-clients/breezie-raised-angel-investment-and-crowdfunding-to-support-the-elderly/",
  img : " http://www.clearlyso.com/wp-content/uploads/2015/02/EPC-black-and-white-logo-476x454.png",
  title : "P15 - title",
  categories:['Green Technology','Energy Management','Sustainable Transport',
  'Sustainable Products','Fitness','Mental Health','Rehabilitation',
  'Seniors','Special Needs','Education','Community','Employment',
  'Food and Shelter','Accessibility'],
  interactions:['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites']
});


// ['Green Technology','Energy Management','Sustainable Transport',
// 'Sustainable Products','Fitness','Mental Health','Rehabilitation',
// 'Seniors','Special Needs','Education','Community','Employment',
// 'Food and Shelter','Accessibility']


});
