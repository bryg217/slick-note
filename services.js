//services for getting and creating app markup in on server.
const services = {

	getLoginMarkup: function() {
	return `<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8">
					<title>Notes</title>
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<!-- prevent fake favicon requests -->
					<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
					<!-- Normalize.css, a cross-browser reset file -->
  					<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.css" rel="stylesheet">
  					<!-- custom css sheet -->
  					<link rel="stylesheet" type="text/css" href="css/main.css">
				</head>
				<body>

					<main>
						<div class="login-container">
							<div class="inner-container">
								<div class="row">
									<div class="col-12 login-content">
										<form method="post" action="/login" class="login-form">
											<fieldset name="login-form">
												<label class="login-label">Username</label>
											<input type="text" name="username" class="login-field" placeholder="johnsmith28" required />
											<label class="login-label">Password</label>
											<input type="password" name="password" class="login-field" required />
											<button type="submit" class="authentication-button login">Login</button>
											</fieldset>
										</form>
										<div class="signup-login-links-container"><a href="/index.html">Sign Up</a></div>
									</div>
								</div>
							</div>
						</div>
					</main>
				
				</body>
				</html>`
	},

	getNewNoteMarkup: function(noteId) {
		return  `<main>
						<div class="row">
                            <div class="col-12 header-container">
                                <!--this will be hidden at first -->
                                <div class="emtpy-titles-error">PLEASE FILL OUT BOTH FIELDS!</div>
                                <div class="header-name"> 
                                    <span class="header-text"></span> 
                                </div>
                                <div class="header-value">  
                                    <div class="note-error-message">PLEASE FILL OUT 'Header' Field</div>
                                        <label class="header-label">header</label>
                                        <input type="text" name="header" class="update-header-field" required />
                                    <div class="note-id">${noteId}</div>
                                </div> 
                                <div class="note"></div>
                                <div class="note-error-message">PLEASE MAKE SURE NOTE TO LEAVE A BLANK NOTE!</div>
								<div class="editing-note-container">
                                    <textarea class="edit-note"></textarea>
                                    <div class="create-button-container"><button class="create-note">Create Note</button></div>
                                </div>
                            </div>
                        </div>
					</main>`
	},

 	createUserFeedMarkup: function(note) {
	return  `<div class="row user-note-container"> 
				<div class="col-12">
					<div class="note-id">${note._id}</div>
					<div class="user-note">
						<span class="note-header note-title"> ${note.title} </span> 
						<span class="note-header note-subtitle"> ${note.subtitle} </span> 
						<span class="view-note">view note</span>
						<div class="delete-container">
                            <div class="note-id">${note._id}</div>
                            <span class="delete-button">Delete Note</span>
                            <span class="confirm-delete">Are you sure</span>
                            <span class="confirm-delete confirm-delete-button">Yes</span>
                        </div>
					</div>
				</div>
			</div>`
	},

	getUserHomeMarkup: function(notes) { 
	return `<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>Notes</title>
  				<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
  				<!-- normalize css packages -->
  				<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.css" rel="stylesheet">
  				<!--custom css page-->
  				<link rel="stylesheet" type="text/css" href="css/grid.css">
  				<link rel="stylesheet" type="text/css" href="css/main.css">
			</head>
			<body>
	
				<nav>
            		<div class="row">
                		<div class="col-12 nav-container">
                    		<span class="home nav-button">Home</span>
                    		<span class="new-note-button nav-button">New Note</span>
                    		<span class="logout nav-button">Logout</span>
                		</div>
            		</div>        
        		</nav>

				<main>${notes}</main>

				<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
				<script type="text/javascript" src="js/template.js"></script>
				<script type="text/javascript" src="js/userApp.js"></script>
			</body>
			</html>`
	},

	renderHTMLAfterLogout: function() {
	return `<main>
		<div class="signup-container">
			<div class="inner-container">
			<div class="row">
				<div class="col-12 signup-content">
					<form method="post" action="/users" class="signup-form">
						<fieldset name="signup-form">
							<label class="signup-label">Email</label>
							<input type="text" name="email" class="signup-field" placeholder="foo@bar.com" required />
							<label class="signup-label">Username</label>
							<input type="text" name="username" class="signup-field" placeholder="johnsmith123" required />
							<label class="signup-label">Password</label>
							<input type="password" name="password" class="signup-field" required />
							<label class="signup-label">Confirm Password</label>
							<input type="password" name="confirm-password" class="signup-field" required />
							<div class="authentication-button-container"><button class="authentication-button">Sign Up</button></div>
							<span><em><strong>REDIRECTED TO LOGIN IF SUCCESSFUL SIGNUP, THEN LOG BACK IN</strong></em></span>
						</fieldset>
					</form>
					<div class="signup-login-links-container"><a href="/login.html">Login</a></div>
				</div>
			</div>
			</div>
		</div>
	</main>`
	},

	createSectionHTML: function(section) {
		return `<div class="section-id">${section.id}</div><span class="note-section">${section.header}</span>`
	},

	noteHomeTemplate: function (title, subtitle, noteId) {
		return `<div class="row">
                <div class="col-12 title-container">
                    <!--this will be hidden at first -->
                    <span class="create-new-section">New Sections</span>
                    <span class="sections-button">Note Sections</span>
                    <span class="hide-sections">Hide Sections</span>
                    <div class="sections-container">
                    </div>
                    <div class="note-id">${noteId}</div>
                    <div class="emtpy-titles-error">PLEASE FILL OUT BOTH FIELDS!</div>
                    <div class="titles"> 
                        <span class="title-text">${title}</span>  
                        <span class="subtitle-text">${subtitle}</span> 
                    </div>
                    <div class="edit-title">  
                        <div class="error-message">PLEASE FILL OUT BOTH Fields</div>
                        <div class="edit-titles-container">
                            <label class="update-title-label">title</label>
                            <input type="text" name="title" class="update-title-field" required />
                            <label class="update-subtitle-label">subtitle</label>
                            <input type="text" name="subtitle" class="update-subtitle-field" required />
                        </div>
                        <button class="update-titles">Save</button>
                        <button class="cancel-update">Cancel</button>
                    </div> 
                </div>
            </div>`
	},

	getNoteTemplate: function(noteId, currentNote) {
		return `<div class="row">
                <div class="col-12 header-container">
                    <span class="create-new-section">New Section</span>
                    <span class="sections-button">Note Sections</span>
                    <span class="hide-sections">Hide Sections</span>
                    <div class="sections-container">
                    </div>
                    <div class="emtpy-titles-error">PLEASE FILL OUT BOTH FIELDS!</div>
                    <div class="header"> 
                        <span class="header-text">${currentNote.header}</span> 
                    </div>
                    <div class="edit-header">  
                        <div class="error-message">PLEASE FILL OUT BOTH FIELD</div>
                        <div class="edit-header-container">
                            <label class="update-header-label">header</label>
                            <input type="text" name="header" class="update-header-field" required />
                        </div>
                        <button class="update-header">Update</button>
                        <button class="cancel-header">Cancel</button>
                        <!-- note temporarily placed by the button for quick ui swipe -->
                        <div class="note-id">${noteId}</div>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-12 note-container">
                	<div>just click the note words below to edit =) </div>
                    <div class="note">${currentNote.note}</div>
                    <div class="editing-note-container hide-edit-note">
                        <div class="note-error-message">PLEASE MAKE SURE NOTE TO LEAVE A BLANK NOTE!</div>
                        <textarea class="edit-note"></textarea>
                        <div class="save-button-container"><button class="save-note">Save</button></div>
                    	<div class="section-id">${currentNote.id}</div>
                    </div>
                </div>
            </div>`
	}
}
module.exports = {services};