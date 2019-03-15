var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName('mySlides');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1;
	}
	x[slideIndex - 1].style.display = 'block';
	setTimeout(carousel, 5000); // Change image every 5 seconds
}

function searchChar() {
	var hero = new Array(5);
	hero[0] = 'Geralt';
	hero[1] = 'Ciri';
	hero[2] = 'Triss';
	hero[3] = 'Yennefer';
	hero[4] = 'Vesemir';
	var heroBackGrd = new Array(5);
	heroBackGrd[0] =
		'Geralt of Rivia is a witcher and the main protagonist of the Witcher series by Andrzej Sapkowski and its adaptations, including The Witcher, The Witcher 2: Assassins of Kings, and The Witcher 3: Wild Hunt video games. Like all witchers, Geralt is a monster hunter for hire. He possesses superhuman abilities and is a master swordsman. During the Trial of the Grasses, Geralt exhibited unusual tolerance for the mutagens that grant witchers their abilities. Accordingly, Geralt was subjected to further experimental mutagens which rendered his hair white and may have given him greater speed, strength, and stamina than his fellow witchers. Geralt is also known as Gwynbleidd, meaning "White Wolf" in Elder Speech. He was given this alias by the dryads, and is also called the Butcher of Blaviken after an unfortunate incident in that town. Despite his title, Geralt does not hail from the city of Rivia. After being left with the witchers by his mother, Visenna, he grew up in their keep of Kaer Morhen in the realm of Kaedwen. In the interest of appearing more trustworthy to potential clients, young witchers were encouraged to make up surnames for themselves by master Vesemir. As his first choice, Geralt chose "Geralt Roger Eric du Haute-Bellegarde", but this choice was dismissed by Vesemir as silly and pretentious, so "Geralt" was all that remained of his chosen name. "Of Rivia" was a more practical alternative and Geralt even went so far as to adopt a Rivian accent to appear more authentic. Later, Queen Meve of Lyria knighted him for his valour in the Battle for the Bridge on the Yaruga conferring on him the formal title "of Rivia", which amused him. He, therefore, became a true knight of Lyria, only to lose the title soon after for departing. ';
	heroBackGrd[1] =
		'Cirilla Fiona Elen Riannon (better known as Ciri), was born in 1253, and most likely during the Belleteyn holiday.[4] She was the sole princess of Cintra, the daughter of Pavetta and Emhyr var Emreis (who was using the alias "Duny" at the time) as well as Queen Calanthe\'s granddaughter. After Geralt of Rivia helped lift Duny\'s curse, Duny asked what reward the witcher would like and Geralt proclaimed the Law of Surprise, as it turned out Pavetta was pregnant with Ciri, unbeknownst to Duny. ';
	heroBackGrd[2] =
		"Triss Merigold of Maribor was a legendary Temerian sorceress of the 13th century. Called Fourteenth of the Hill by her contemporaries because she was erroneously thought to have been killed during the Battle of Sodden Hill, she passed into history as Merigold the Fearless. A member of King Foltest's royal council along with Fercart and Keira Metz, as well as a founding member of the Lodge of Sorceresses, she was involved in politics for most of her life. She was friends with Yennefer and the witcher Geralt of Rivia, but also unhappily in love with the latter.[1] Triss took care of Ciri at Kaer Morhen for some time and is like an older sister to her. It was through her intervention that Ciri was not subjected to harmful hormone changes at Kaer Morhen, stripping her of her secondary gender traits. She was a skilled healer and carried with her many magical potions, but she never uses them on herself because ironically, she was allergic to potions. She was also quite a powerful mage, certainly when it counted most. She wore an amulet - sapphire overlaid with silver.";
	heroBackGrd[3] =
		"Yennefer, born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn. She was Geralt of Rivia's true love and a mother figure to Ciri, whom she viewed like a daughter to the point that she did everything she could to rescue the girl and keep her from harm. She was a former royal advisor to King Demavend of Aedirn, a close friend of Triss Merigold, and the youngest member of the Supreme Council of Sorcerers within the Brotherhood of Sorcerers. After its fall, the Lodge of Sorceresses attempted to recruit her, but they didn't see eye to eye as the Lodge wanted to advance their own political agenda by using Ciri. ";
	heroBackGrd[4] =
		"Vesemir was the oldest and most experienced witcher at Kaer Morhen in the 13th century and acted as a father figure to Geralt and the other witchers. Like many of the other witchers, he spent each winter in the fortress and set out on the path when spring arrived. He is the only one of the old witchers to survive the assault on Kaer Morhen, left for dead among the corpses of his fellows. However, as he was only a fencing instructor, he didn't possess the knowledge necessary to create new mutagens in order to mutate more boys into witchers. ";
	var charName = prompt(
		'Please enter the character name',
		'Geralt, Ciri, Yennefer, Vesemir, Triss'
	);
	for (i = 0; i < hero.length; i++) {
		if (charName == hero[i]) {
			head01.innerHTML = hero[i];
			p01.innerHTML = heroBackGrd[i];
		}
	}
}

function sayThanks() {
	document.getElementById('contact').innerHTML =
		'Thank you for the message! Please check your email for my answer.';
}
