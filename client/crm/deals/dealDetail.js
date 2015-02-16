Template.lead_detail.events({
    'click .new-action': function(e, instance) {
        e.preventDefault();

        var lead = instance.data.lead;
        Activities.insert({
            reference: {
                _id: lead._id,
                collection: 'Leads'
            }
        });
    }
});
