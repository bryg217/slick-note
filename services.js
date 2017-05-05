//services for getting and creating app markup in on server.
const formattingNoteServices = {
	highlight: function (string) {
				
				var stringCharacters = string.split('');
				var tick = '`';
				var tickCounter = 0;
				var tickIndices = [];
				for (var i=0, length=stringCharacters.length; i<length; i++) {
					var currentCharacter = stringCharacters[i];
					var nextCharacter = stringCharacters[i+1];
					if (currentCharacter===tick && nextCharacter===tick) {
						tickCounter += 1;
						if (tickCounter % 2 !== 0) {
							stringCharacters.splice(i, 1, '<span class="highlighted">')
							stringCharacters.splice(i+1, 1);
							tickIndices.push(i);
						}
						else { 
							stringCharacters.splice(i, 1, '</span>')
							stringCharacters.splice(i+1, 1);
							tickIndices.push(i);
						} 
					}
				}
	
				if (tickCounter % 2 !== 0) {
					return false
				}
				return stringCharacters.join('');
	}
}

const domServices = {

	displaySignupError: function(errorMessage) {
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
  						<link rel="stylesheet" type="text/css" href="css/grid.css">
 					 	<!-- custom css sheet -->
  						<link rel="stylesheet" type="text/css" href="css/main.css">
					</head>
					<body>			
						<main>
							<div class="signup-container">
								<div class="inner-container">
									<div class="row">
										<div class="col-12 signup-content">
											<div>${errorMessage}</div>
											<form method="post" action="/users" class="signup-form" name="register-user">
												<fieldset name="signup-form">
													<label class="signup-label">Email</label>
													<input type="text" name="email" class="signup-field" placeholder="foo@bar.com" required />
													<label class="signup-label">Username</label>
													<input type="text" name="username" class="signup-field" placeholder="johnsmith123" required />
													<label class="signup-label">Password</label>
													<input type="password" name="password" class="signup-field" required />
													<label class="signup-label">Confirm Password</label>
													<input type="password" name="passwordConfirmation" class="signup-field" required />
													<button class="authentication-button signup" type="submit">Sign Up</button>
												</fieldset>
											</form>
											<a href="#" class="signup-login-links-container get-login">Login</a>
										</div>
									</div>
								</div>
							</div>
						</main>
						<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
						<script type="text/javascript" src="js/unauthorizedTemplates.js"></script>
						<script type="text/javascript" src="js/unauthorizedClient.js"></script>
					</body>	
					</html>`
	},

	getLoginMarkup: function(message) {
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
										<div>${message}</div>
										<form method="post" action="/login" class="login-form">
											<fieldset name="login-form">
												<label class="login-label">Username</label>
											<input type="text" name="username" class="login-field" placeholder="johnsmith28" required />
											<label class="login-label">Password</label>
											<input type="password" name="password" class="login-field" required />
											<button type="submit" class="authentication-button login">Login</button>
											</fieldset>
										</form>
										<a href="#" class="signup-login-links-container">Sign Up</a>
									</div>
								</div>
							</div>
						</div>
					</main>
					
					<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
					<script type="text/javascript" src="js/unauthorizedTemplates.js"></script>
					<script type="text/javascript" src="js/unauthorizedClient.js"></script>
				</body>
				</html>`
	},

 	createUserFeedMarkup: function(note) {
	let content = formattingNoteServices.highlight(note.content);
	return  `
			<div class="row">
			<div class="col s12 m10 offset-m1">
			<div class="card user-note">
    			<div class="card-content">
      				<div class="note-id" style="display: none;">${note._id}</div>
      				<span class="card-title activator grey-text text-darken-4">${note.title}<i class="material-icons right">more_vert</i></span>
      				<p class="card-links"><a href="#" class="edit">Edit</a></p>
      				<p class="card-links"><a href="#" class="delete">Delete</a></p>
      				<p class="deletion-question" style="display: none;">Are You Sure?<a href="#" class="confirm-delete">Yes</a></p>
    			</div>
    			<div class="card-reveal">
      				<span class="card-title grey-text text-darken-4">${note.title}<i class="material-icons right">close</i></span>
      				<p>${content}</p>
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
  				<link rel="stylesheet" type="text/css" href="css/materialize.min.css">
  				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  				<link rel="stylesheet" type="text/css" href="css/main.css">
			</head>
			<body>
	
				<nav>        
        			<a href="#" data-activates="slide-out" class="menu button-collapse"><i class="material-icons">reorder</i></a>
        			<ul id="slide-out" class="side-nav">
    					<li>
    						<a href="#!" class="home nav-button">Home</a>
    					</li>
    					<li>
    						<a href="#" class="new-note-button nav-button">New Note</a>
    					</li>
    					<li>
    						<div class="divider"></div>
    					</li>
    					<li>
    						<a href="#" class="logout nav-button">Logout</a>
    					</li>
  					</ul>

  					<a hre="#" class="home nav-button mobile-logo center">Slick Note</a>
  					<ul class="medium-viewport-nav right">
  						<li class="medium-view nav-button">
  							<a href="#!" class="home nav-button">Home</a>
  						</li>
  						<li class="medium-view nav-button">
  							<a href="#!" class="new-note-button nav-button">New Note</a>
  						</li>
  						<li class="medium-view nav-button">
  							<a href="#!" class="logout nav-button">Logout</a>
  						</li>
  					</ul> 
        		</nav>

				<main><div class="container">${notes}</div></main>

				<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
				<script type="text/javascript" src="js/materialize.js"></script>
				<script>
					//side nav
					$(document).ready(function(){
        				$(".button-collapse").sideNav();
        				$('.parallax').parallax();
        				$(".dropdown-button").dropdown({
 				           hover: false
        				});
    				});
    			</script> 
				<script type="text/javascript" src="js/template.js"></script>
				<script type="text/javascript" src="js/userApp.js"></script>
			</body>
			</html>`
	}
}

module.exports = {domServices};