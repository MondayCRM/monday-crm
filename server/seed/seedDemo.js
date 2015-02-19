Meteor.startup(function() {

  if(Settings.find().count() == 0) {
    console.log('> seedDemo start...');
    var createTask = function(referenceId) {
      entity = {
        reference_id: referenceId,
        status: Fake.fromArray(activityStatuses),
        mission: Fake.sentence(_.random(20, 50))
      };

      return Tasks.insert(entity);
    };


    // remove data
    Activities.remove({});
    Leads.remove({});
    JobPositions.remove({});
    Contacts.remove({});
    Settings.remove({});

    Settings.insert({});

    var allUsers = Users.find().fetch();


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
        var jobholder = _.sample(contacts);
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
      var leadContacts = [];
      var leadJobPositions = [];

      var count = _.random(1, 3);
      for(var j = count; j <= 2; j++) {
        leadContacts.push({
          _id: _.sample(contacts),
          sort: j
        });
      }

      var count = _.random(1, 3);
      for(var j = count; j <= 2; j++) {
        leadJobPositions.push({
          _id: _.sample(jobPositions),
          sort: j
        });
      }

      entity = {
        title: Fake.sentence(_.random(2, 7)),
        description: Fake.sentence(_.random(5, 30)),
        status: Fake.fromArray(leadStatuses),
        progress: _.sample([10, 20, 30, 60, 80, 90, 100]),
        createdBy_id: _.sample(allUsers)._id,
        assignedTo_id: _.sample(allUsers)._id,
        contacts_ids: leadContacts,
        jobPositions_ids: leadJobPositions
      };

      var leadId = Leads.insert(entity);
      leads.push(leadId);

      // add Nodes
      var count = _.random(1,7);
      for(var j = count; j <= 7; j++) {
        createNote(leadId, 'Leads');
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

  function createNote(id, collection) {
    return createActivity(id, collection, Meteor.App.ACTIVITY_TYPES.NOTE);
  }

  function createActivity(id, collection, type) {
    var entity = {
      reference: {
        _id: id,
        collection: collection
      },
      type: type,
      status: _.sample(activityStatuses),
      description: Fake.sentence(_.random(3, 12)),
      createdBy_id: _.sample(allUsers)._id,
      assignedTo_id: _.random(0,1) ? _.sample(allUsers)._id : null
    };

    return Activities.insert(entity);
  }


});

