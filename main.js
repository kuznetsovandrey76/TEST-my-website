var contentBlock = true,
	experienceBlock = false,
	skillsBlock = false;

experienceButton.addEventListener('click', function() {
	if (contentBlock) { 
		experience.classList.add('content');
		experience.classList.remove('additional-menu');
		contentBlock = false;
		experienceBlock = true;
		content.classList.add('hidden');
	} 
});

skillsButton.addEventListener('click', function() {
	if (contentBlock) { 
		skills.classList.add('content');
		skills.classList.remove('additional-menu');
		contentBlock = false;
		skillsBlock = true;
		content.classList.add('hidden');
	} 
});

experienceHome.addEventListener('click', function() {
	content.classList.remove('hidden');
	experience.classList.remove('content');
	experience.classList.add('additional-menu');
	contentBlock = true;
	experienceBlock = false;
});

skillsHome.addEventListener('click', function() {
	content.classList.remove('hidden');
	skills.classList.remove('content');
	skills.classList.add('additional-menu');
	contentBlock = true;
	skillsBlock = false;
});