
Template.contactsListAddBtn.events({
	"click": function(event){
		event.preventDefault();
		goTo('/contact/new');
	}
});