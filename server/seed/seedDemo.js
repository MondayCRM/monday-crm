Meteor.startup(function() {

  if(Settings.find().count() == 0) {
    console.log('> seedDemo start...');
    var createTask = function(referenceId) {
      entity = {
        reference_id: referenceId,
        status: Fake.fromArray(taskStatuses),
        mission: Fake.sentence(_.random(20, 50))
      };

      return Tasks.insert(entity);
    };


    // remove data
    Tasks.remove({});
    Activities.remove({});
    Leads.remove({});
    JobPositions.remove({});
    Contacts.remove({});
    Settings.remove({});

    Settings.insert({});


    var entity = {};

    var contacts = [];
    var jobPositions = [];
    var leads = [];


    // insert persons
    for(var i = 1; i <= 40; i++) {
      var randomUser = Fake.user();
      entity = {
        name: randomUser.fullname,
        emails: [{address: randomUser.email}]
      };

      if(_.random(0,2) < 2) {
        var randomUser2 = Fake.user();
        entity.emails.push({address: randomUser2.email});
      }

      contactId = Contacts.insert(entity);
      contacts.push(contactId);


      var count = _.random(0, 4);
      for(var j = count; j <= 6; j++) {
        jobholder = _.sample(contacts);
        if(jobholder == contactId) continue;

        jobPositions.push(JobPositions.insert({
          employer_id: contactId,
          jobholder_id: jobholder,
          name: Fake.fromArray(['CTO', 'CEO', 'Marketing director', 'Director of directors', 'Superman'])
        }));
      }
    }



    // insert leads
    for(var i = 1; i <= 15; i++) {
      entity = {
        title: Fake.sentence(_.random(2, 7)),
        description: Fake.sentence(_.random(5, 30)),
        status: Fake.fromArray(leadStatuses)
      };

      var leadId = Leads.insert(entity);
      leads.push(leadId);

      // add activities
      var count = _.random(1,7);
      for(var j = count; j <= 0; j++) {
        entity = {
          reference: {
            _id: leadId,
            collection: 'Leads'
          },
          type: _.sample(activityTypes),
          description: Fake.sentence(_.random(3, 12))
        };

        Activities.insert(entity);
      }
    }



    // insert tasks
    for(var i = 1; i <= 0; i++) {
      createTask(_.sample(companies));
      createTask(_.sample(persons));
      createTask(_.sample(leads));
    }

    console.log('> seedDemo end.');
  }
});
