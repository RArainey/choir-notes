import Ember from 'ember';

export default Ember.Component.extend({
	domIndex: null,
	click(e) {
		let target = e.target;
		let index = $(target).index();
		let note;

		// Create the note.
		if (this.domIndex === null) {
			note = document.createElement("img");
			note.src = 'assets/images/note.png';
			note.className = 'note';
			target.appendChild(note);
			this.domIndex = index;

		// User tapped/clicked elsewhere, move the note.
		} else if (target.tagName === "DIV" && this.domIndex !== index) {
			note = target.parentElement.children[this.domIndex].children[0];
			target.appendChild(note);
			this.domIndex = index;

		// User tapped/clicked the note or its location, remove it.
		} else if (target.tagName === "DIV" && this.domIndex === index) {
			target.children[0].remove();
			this.domIndex = null;
		} else if (target.tagName === "IMG") {
			target.remove();
			this.domIndex = null;
		}
	}
});
