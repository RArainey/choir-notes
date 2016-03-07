import Ember from 'ember';

export default Ember.Component.extend({
	domIndex: null,
	click(e) {
		let target = e.target;
		let index = $(target).index();

		if (this.domIndex == null) {
			let note = document.createElement("img");
			note.src = 'assets/images/note.png';
			
			target.appendChild(note);
			this.domIndex = index;

		} else if (target.tagName != "IMG") {
			let note = target.parentElement.children[this.domIndex].children[0];

			target.appendChild(note);
			this.domIndex = index;
		}
	}
});
