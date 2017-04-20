function getNewTemplate() {
	return `<div class="section-container js-hide-sections">
			</div>
			<div class="note-container">
				<form class="new-note">
					<fieldset name="create-note">
						<label>Title</label>	
						<input type="text" name="new-note-title">
						<label>Subtitle</label>
						<input type="text" name="new-note-subtitle">
					</fieldset>
					<button class="create-note">Create Note</button>
				</form>
			</div>
			<button class="show-section-button"> >> </button>`
}

function getNoteTemplate(title, subtitle, noteId) {
	//template for the actual note taking of the application
	//couldn't think of a better name for now.!
	return `<div class="title-container">
				<div class="title">
					<span class="title-text">  ${title} </span> 
					<span class="subtitle-text"> ${subtitle} </span> 
				</div>
				<div class="edit-title js-edit-title-hide">  
					<label>title</label>
					<input type="text" name="title" required />
					<label>subtitle</label>
					<input type="text" name="subtitle" required />
					<button class="update-titles">Update</button> 	
				</div> 
			</div>
			<div class="note-container">
				<div class="note js-hide-note">
				</div>
				<div class="editing-note-container">
					<textarea class="edit-note"></textarea>
					<button class="save-note">Save</button>
					<div class="note-id">${noteId}</div>
				</div>
			</div>`
}

function getPublishedNoteTemplate(title, subtitle, notes, noteId) {
	//return to this and see if better way. 
	return `<div class="title-container">
				<div class="title">
					<span class="title-text">  ${title} </span> 
					<span class="subtitle-text"> ${subtitle} </span> 
				</div>
				<div class="edit-title js-edit-title-hide">  
					<label>title</label>
					<input type="text" name="title" required />
					<label>subtitle</label>
					<input type="text" name="subtitle" required />
					<button class="update-titles">Update</button> 	
				</div> 
			</div>
			<div class="note-container">
				<div class="note">${notes}</div>
				<div class="editing-note-container">
					<textarea class="edit-note js-hide-edit"></textarea>
					<button class="save-note js-hide-save">Save</button>
					<div class="note-id">${noteId}</div>
				</div>
			</div>`	
}