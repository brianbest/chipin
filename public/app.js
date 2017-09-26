Vue.component('job-item', {
  props: ['details'],
  template: '#job-template',
  methods: {
    expand: function() {
      document.getElementsByClassName('job')[0].classList.add('expand');
      document.getElementsByClassName('job-details-small')[0].classList.add('job-details-large');
      document.getElementById('app').classList.add('expand');
    },
    back: function() {
      document.getElementsByClassName('job')[0].classList.remove('expand');
      document.getElementsByClassName('job-details-small')[0].classList.remove('job-details-large');
      document.getElementById('app').classList.remove('expand');
    }
  }
});

Vue.component('job-wrapper', {
  props: [
    'jobList', 'currentJob'
  ],
  template: '#job-wrapper-template',
  methods: {
    nextJob: function() {
      if (this.currentJob === this.jobList.length - 1) {
        this.currentJob = 0;
      } else {
        this.currentJob++;
      }
    },
    prevJob: function() {
      if (this.currentJob === 0) {
        this.currentJob = this.jobList.length - 1;
      } else {
        this.currentJob--;
      }
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    jobs: [
      {
        id: 0,
        title: 'volunteer recruiter',
        org: 'chipin',
        smallDetails: 'help motivate students, friends, and community members to volunteer with an organization they love',
        time: 'flexible',
        need: 'enthusiastic, well spoken, comfortable talking to new people',
        get: 'recruiting experience and social enterprise start up experience for their resume',
        meet: 'make connections with social enterprises and community organizations around Sydney, talk to other students about volunteering',
        impact: 'help encourage others to volunteer more, help your community and others',
        contact: 'Andrea Telfer',
        email: 'andreatelfer@hotmail.com'
      }, {
        id: 1,
        title: 'unpacking and/or pick-up volunteer',
        org: 'pan cape breton food hub',
        smallDetails: 'assist with the unboxing of all local products for your location, as well as assisting consumers gather their products and pack their crate ensuring accuracy and quality of the order.',
        time: '2-8 hours per month on thursdays between 2-4 or 4-6pm',
        need: 'attention to detail, customer service, ability to lift boxes (approx. 20 pounds)',
        get: 'experience dealing with local produce and learning about our local farms',
        meet: 'members of our community that are passionate about eating local and supporting local farmers',
        impact: 'help get food products from local producers into the hands of local consumers',
        contact: 'Natasha',
        email: 'natasha@marcatodigital.com'
      }, {
        id: 2,
        title: 'museum interpreter',
        org: 'cape breton miners museum',
        smallDetails: 'tell our visitors about cape breton’s coal mining culture by animating our miners’ village.',
        time: 'based on volunteers request',
        need: 'good communication skills, friendly, ability to work in a team environment',
        get: 'a sense of community, meet and interact with people from around the world, form new social networks, gain valuable experience which looks good on resumes and college applications',
        meet: 'our volunteer base includes 4 generations of people from around the world and across the street, they are from various social, economic and ethnic backgrounds',
        impact: 'be a vital part of one of cape breton island’s most beloved tourist attraction',
        contact: 'mary pat',
        email: 'marypat@minersmuseum.com',
        tel: '902-849-4522'
      }, {
        id: 3,
        title: 'volunteer driver',
        org: 'new dawn meals on wheels',
        smallDetails: 'prepare and/or deliver hot and nutritious meals to seniors and other nutritionally at-risk community members',
        time: 'approximately 2 hours per week, depending on how you want to volunteer',
        need: 'a friendly demeanor, a positive attitude to community service and an understanding of the special needs of clients receiving meals on wheels, drivers need valid driver’s licence,insurance,and car ',
        get: 'satisfaction in knowing you are helping your community, knowledge of local geography, positive vibes',
        meet: 'seniors and other community members who could use your help, fellow volunteers, Meals on Wheels staff',
        impact: 'reduce food insecurity among our elderly and convalescing neighbours, bring happiness and warmth through a friendly smile and a kind word to folks who may not see many other people in the run of a day',
        contact: 'kathleen',
        email: 'kathleen@newdawn.ca',
        tel: '902-562-1245'
      }, {
        id: 4,
        title: 'volunteer helper',
        org: 'new dawn meals on wheels',
        smallDetails: 'prepare and/or deliver hot and nutritious meals to seniors and other nutritionally at-risk community members',
        time: 'approximately 2 hours per week, depending on how you want to volunteer',
        need: 'a friendly demeanor, a positive attitude to community service and an understanding of the special needs of clients receiving meals on wheels, drivers need valid driver’s licence,insurance,and car ',
        get: 'satisfaction in knowing you are helping your community, knowledge of local geography, positive vibes',
        meet: 'seniors and other community members who could use your help, fellow volunteers, Meals on Wheels staff',
        impact: 'reduce food insecurity among our elderly and convalescing neighbours, bring happiness and warmth through a friendly smile and a kind word to folks who may not see many other people in the run of a day',
        contact: 'kathleen',
        email: 'kathleen@newdawn.ca',
        tel: '902-562-1245'
      }, {
        id: 5,
        title: 'kitchen volunteer',
        org: 'new dawn meals on wheels',
        smallDetails: 'prepare and/or deliver hot and nutritious meals to seniors and other nutritionally at-risk community members',
        time: 'approximately 2 hours per week, depending on how you want to volunteer',
        need: 'a friendly demeanor, a positive attitude to community service and an understanding of the special needs of clients receiving meals on wheels, drivers need valid driver’s licence,insurance,and car ',
        get: 'satisfaction in knowing you are helping your community, knowledge of local geography, positive vibes',
        meet: 'seniors and other community members who could use your help, fellow volunteers, Meals on Wheels staff',
        impact: 'reduce food insecurity among our elderly and convalescing neighbours, bring happiness and warmth through a friendly smile and a kind word to folks who may not see many other people in the run of a day',
        contact: 'kathleen',
        email: 'kathleen@newdawn.ca',
        tel: '902-562-1245'
      }, {
        id: 6,
        title: 'cat care attendant',
        org: 'nova scotia spca – cape breton shelter',
        smallDetails: 'the nova scotia spca simply could not function without the help of the fantastic volunteers who donate their time. If you are ready to put up your hand to help, we’ve got the volunteer options to suit you',
        time: '6 month minimum',
        need: 'age: 18+',
        get: 'valuable skills to transfer into the work environment such as animal handling skills, cleaning and sanitization procedures, customer service skills',
        meet: 'wonderful people with an interest to save and adopt animals in need in cape breton',
        impact: 'improving the lives of animals in need of care and love',
        contact: 'andrea',
        email: 'capebreton@spcans.ca',
        tel: '902-539-7722'
      }, {
        id: 7,
        title: 'dog care attendant',
        org: 'nova scotia spca – cape breton shelter',
        smallDetails: 'the nova scotia spca simply could not function without the help of the fantastic volunteers who donate their time. If you are ready to put up your hand to help, we’ve got the volunteer options to suit you',
        time: '6 month minimum',
        need: 'age: 18+',
        get: 'valuable skills to transfer into the work environment such as animal handling skills, cleaning and sanitization procedures, customer service skills',
        meet: 'wonderful people with an interest to save and adopt animals in need in cape breton',
        impact: 'improving the lives of animals in need of care and love',
        contact: 'andrea',
        email: 'capebreton@spcans.ca',
        tel: '902-539-7722'
      }, {
        id: 8,
        title: 'adoption counsellor',
        org: 'nova scotia spca – cape breton shelter',
        smallDetails: 'the nova scotia spca simply could not function without the help of the fantastic volunteers who donate their time. If you are ready to put up your hand to help, we’ve got the volunteer options to suit you',
        time: '6 month minimum',
        need: 'age: 18+',
        get: 'valuable skills to transfer into the work environment such as animal handling skills, cleaning and sanitization procedures, customer service skills',
        meet: 'wonderful people with an interest to save and adopt animals in need in cape breton',
        impact: 'improving the lives of animals in need of care and love',
        contact: 'andrea',
        email: 'capebreton@spcans.ca',
        tel: '902-539-7722'
      }, {
        id: 9,
        title: 'shelter support',
        org: 'nova scotia spca – cape breton shelter',
        smallDetails: 'the nova scotia spca simply could not function without the help of the fantastic volunteers who donate their time. If you are ready to put up your hand to help, we’ve got the volunteer options to suit you',
        time: '6 month minimum',
        need: 'age: 18+',
        get: 'valuable skills to transfer into the work environment such as animal handling skills, cleaning and sanitization procedures, customer service skills',
        meet: 'wonderful people with an interest to save and adopt animals in need in cape breton',
        impact: 'improving the lives of animals in need of care and love',
        contact: 'andrea',
        email: 'capebreton@spcans.ca',
        tel: '902-539-7722'
      }, {
        id: 10,
        title: 'beauty pioneer',
        org: 'sydney waterfront district',
        smallDetails: 'tidying up the “parking lot of wonders” in front of the highland arts theatre.',
        time: '3 hours',
        need: 'a green thumb, an eye for beauty, relatively strong arms for raking and shoveling',
        get: 'experience the joy of making a positive impact, get physical activity, and gain a deeper respect for our community',
        meet: 'members of the sydney waterfront district and members of the downtown business community',
        impact: 'our downtown reflects our culture and how we feel about ourselves as a people, this opportunity is a first in a series of positive initiatives in the sydney waterfront district, which will serve as a butterfly effect for improving the quality of life downtown',
        contact: 'brad',
        email: 'bradmurphy@cbrm.ns.ca'
      }, {
        id: 11,
        title: 'general volunteer',
        org: 'caper con',
        smallDetails: 'you will be doing light tasks such as assisting with panels and vendors as well as running information desks and helping con goers have the best experience they can.',
        time: '8 hour minimum',
        need: 'over 16: must have adult consent and provide a character reference (must fill out form on caper con website.) over 18: must have a character reference (must fill out form on caper con website)',
        get: 'reference on a resume, free access to the con, and a volunteer staff room during your shifts',
        meet: 'genaya fraser, head of volunteers as well as many attendees, special guest and vendors and artists participating in the convention',
        impact: 'help make the con experience better for everyone by being the one who people will rely on for questions and concerns as well as directions and assistance',
        contact: 'genaya fraser',
        email: 'volunteers@capercon.com',
        url: 'http://www.capercon.ca'
      }
    ]
  }
})
