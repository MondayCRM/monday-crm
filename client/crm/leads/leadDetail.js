Template.leadDetail.rendered = function() {
  var instance = this;

  var lead = instance.data.lead;
  $('#slider-step').noUiSlider({
    start: [ lead.progress || 0 ],
    connect: 'lower',
    step: 10,
    range: {
      'min': [ 0 ],
      'max': [ 100 ]
    }
  }).on({
    change: function(){
      Leads.update(lead._id, {$set: {progress: $(this).val()}});
    }
  });
};

Template.leadDetail.helpers({});

Template.leadDetail.events({});
