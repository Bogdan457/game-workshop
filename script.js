


/*
Урок 2
1. Выбрать кнопку Start на странице и помести его в переменную start, и вывести в console - done
2. Выбрать блок жизней на странице и помести его в переменную lifes, и вывести в console - done
3. Выбрать блок очков на странице и помести его в переменную score, и вывести в console - done
4. Изменить цвет кнопки на зеленый используя JavaScript - done
5. Изменить ширину и высоту кнопки, увеличь их на 100px используя JavaScript - done
6. Изменить цвет текста очков используя JavaScript - done
7. Задание со ⭐️ - done
   7.1 ⭐️Сделать, чтобы при загрузке страницы JavaScript делал 5 жизней - done

Урок 3
1. Скачать аудио файлы - done
2. В index.html добавить 2 кнопки: - done
   2.1 Первая кнопка выбирает в плеере 1-ю мелодию - done
   2.2 Вторая кнопка выбирает вторую мелодию - done
3. Сделать смену мелодий при нажатии на кнопки - done
   3.1 Чтобы каждая кнопка проигрывала свою мелодию - done
   3.2 И в одно время должна играть одна мелодия - done
4. Задание со ⭐️ - done
   4.1 ⭐️При нажатии на кнопку Start скрывать блок Start и показывать блок Game - done
   4.2 ⭐️Сделай, чтобы при загрузке страницы JavaScript делал 5 жизней - done

Урок 4
1. Включение мелодии при клике на блок #sound - done
2. Если мелодия играет то меняем картинку, на ту что показывает звук sound_on - done
3. Работа с координатами, сделать передвижение игрока вверх и вниз - done
4. Прокомментировать весь код - done

Урок 5
1. Сделать перемещение пули в конец игрового поля - done
   1.2 после вылета за пределы поля возвращать ее на начало поля -done
2. Сделать запрет на перемещение игрока за пределы игрового поля вверх и вниз - done

Урок 6 
1. Сделать создание пули при нажатии на пробел - done
2. Когда пуля долетает до конца поля удалять пулю и останавливать таймер пули - done
3. Создавать второго врага в js - done
4. Прокоментировать код - done

Урок 7
1. Сделать попадание пули по врагу и уничтожение пули и врага - done
2. Сделать уменьшение жизней, если враг пролетел мимо героя и вышел за пределы поля - done
3. Задание со ⭐️
	3.1 Сделать увеличение очков после убийства врага - done
	3.2 Создавать элемент взрыва на месте попадания пули по врагу, и через секунду уничтожать элемент взрыва - done

Урок 8
1. Сделать появление врага в случайном месте экрната по вертикале(top) - done
2. Сделать появление случайного скина(типа) врага - done 
3. Завершение игры - done
4. Сделать выбор игрока - done
*/
// Выбераем блок start по селектору
var start = document.querySelector("#start");
// Выбераем кнопку start по селектору
var startBtn = document.querySelector("#startBtn");	
// Выбераем игрока по селектору
var game = document.querySelector("#game");
// Выбераем по селектору мелодию для игры
var audio = document.querySelector("audio");
// Выбераем по селектору кнопку sound
var soundBtn = document.querySelector("#sound img");
// У sound по умолчанию значение off
var sound = "off";
// При клике на кнопку sound проверяем:
soundBtn.onclick = function() {
	// Если в переменной sound значение on тогда:
	if(sound == "on") {
	   // Останавлеваем мулодию
	   audio.pause();
	   // Меняем картинку на "звук выкючен"
       soundBtn.src = "images/mute_sound.png"
       // Меняем значение в переменной sound на off
       sound = "off";
	} else {
		// Запускаем мелодию
		audio.play();
		// Меняем картинку на "звук вкючен"
		soundBtn.src = "images/sound_on.png";
		// Меняем значение в переменной sound на on
		sound = "on";
	}
}

// При клике на кнопку start:
startBtn.onclick = function() {
	createLifes();
	startFun();
    
}
// Функция старта
function startFun() {
	// Убераем блок старта игры
	start.style.display = "none";
	// Отображаем игровое поле
    game.style.display = "block";
    gamer.className = gamerSkin;
    // Вызываем функию создания врага
    createEnemy1();
}

/*
Работа с врагами
*/
// Функия полета 1 врага
function moveEnemy1(enemyEvetn1) {
	// В переменной timerEnemy1 храниться таймер интервала
    var timerEnemy1 = setInterval(function() {
    	// Каждые 10 милисикунд враг летит на 10 пикселей влево
    	enemyEvetn1.style.left = enemyEvetn1.offsetLeft - 10 + "px";
    	// если враг долетает до началя поля тогда:
    	if(enemyEvetn1.offsetLeft < -100) {
    		// Удалять врага
    		enemyEvetn1.remove();
    		// Создавать снова
    		createEnemy1();
    		// Остановить таймер
    		clearInterval(timerEnemy1);
    		die();
    	}
    }, 60);
}

// Функция создание врага 1
function createEnemy1() {
	// Создаем блок div
	var enemy1 = document.createElement("div");
	    // Добавляем класс первого врага
		enemy1.className = "enemy " + typeEnemy();
		// Каждые 10 милисикунд враг опускаеться на 100 пикселей вниз
        enemy1.style.top = random(100, document.querySelector("#app").clientHeight - 150) + "px";
		// Добавляем врага на поле
	    game.appendChild(enemy1);
    // Вызываем функию полета врага
    moveEnemy1(enemy1);
}

function typeEnemy() {
	if(random(1, 2) == 1) {
		return "type-1";
	} else {
		return "type-2";
	}
}

/*
Создание выстрела
*/
// Функция создания пули
function createBullet() {
	// Создаем блок div
	var bullet = document.createElement("div");
	    // Добавляем класс пули
	    bullet.className = "bullet";
	    bullet.style.top = gamer.offsetTop + 140 + "px";
		// Добавляем пулю на поле
	    game.appendChild(bullet);
	// Вызываем функцию
    moveBollet(bullet);

}
// Функия полета пули
function moveBollet(bullet) {
	// В переменной bulletTimer храниться таймер интервала
	var bulletTimer = setInterval(function() {
		// Каждие 30 милисикунд пуля летит на 10 пикселей в право
		bullet.style.left = bullet.offsetLeft + 10 + "px";
		// Если пуля достигла конца поля тогда удалять пулю
		if(bullet.offsetLeft > document.querySelector("body").clientWidth) {
			// Удаляем пулю
    		bullet.remove();
			// Остановить таймер
    		clearInterval(bulletTimer);

    	}
    		isBoom(bullet);
	}, 30);
} 
/*
События клавиш
*/ 
// Выбераем игрока по селектору
var gamer = document.querySelector("#player");
// Делаем клик по клавишам
document.onkeydown = function(event) {
	// Выводим в консоль event
	// console.dir(event);
	// Если нажата клавиша "W" тогда персонаж перемещается на 15 px вверх
	if(event.keyCode == "87") {
		gamer.style.top = gamer.offsetTop - 40 + "px";
	} 
	// Если нажата клавиша "S" тогда персонаж перемещается на 15 px вниз
	if(event.keyCode == "83") {
		gamer.style.top = gamer.offsetTop + 40 + "px";
	}
    // Если игрок поднимится выше 60 пикселей тогда опускаем его на 15 пикскелей
	if(gamer.offsetTop < 60) {
		gamer.style.top = gamer.offsetTop + 40 + "px";
		if(event.keyCode == "87" || event.keyCode == "32") {
			gamer.style.top = gamer.offsetTop + 0 + "px";
		}
	}
	// Если игрок опуститься ниже 350 пикселей тогда поднимаем его на 15 пикскелей
	if(gamer.offsetTop > 500) {
		gamer.style.top = gamer.offsetTop - 40 + "px";
		if(event.keyCode == "83" || event.keyCode == "32") {
			gamer.style.top = gamer.offsetTop - 0 + "px";
		}
	}
	/*
    Вылет пули при нажатии на пробел
	*/
	// Проверяем нажатие на пробел
	if(event.keyCode == "32") {
		// Вызываем функция создание пули
    	createBullet();
	}
}
/*
Попадание по игроку
*/

        var score = document.querySelector("#score span");
function isBoom(bullet) {
	var enemy1 = document.querySelector(".enemy");	
    
	if(bullet.offsetTop > enemy1.offsetTop 
		&& bullet.offsetTop < enemy1.offsetTop + enemy1.clientHeight
		&& bullet.offsetLeft > enemy1.offsetLeft) {
        createBoom(bullet.offsetTop, bullet.offsetLeft);
  		score.innerText = Number(score.innerText) + 1; 
        bullet.remove();
        enemy1.remove();

        createEnemy1();
	} 
}
// Количесто жизней 5 штук
var countLifes = 3;
function die() {
	countLifes = countLifes - 1;
	if(countLifes <= 0) {
		endGame();
	}
	createLifes()
}

function createLifes() {
	// Выбераем блок жизней по селектору
    var lifes = document.querySelector("#lifes");
    	lifes.innerHTML = "";
	var count = 0;
	// Цыкл отображения жизней
    while(count < countLifes) {
    	// Создаем новый блок span
		var span = document.createElement('span');
		    // Добавляем span в блок жизней
		    lifes.appendChild(span);
		    count = count + 1;
    }
}

function createBoom(top, left) {
	var boom = document.createElement("div");
		boom.className = "boom";
		boom.style.top = top - 100 + "px";
		boom.style.left = left - 100 + "px";

	 	game.appendChild(boom);
	 	setTimeout(function() {
	 		boom.remove();
	 	}, 1000);
}

function random(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function endGame() {
	var scoreBlock = document.querySelector("#end h3 span");
	scoreBlock.innerText = score.innerText;
	game.innerHTML = "";
	var endBlock = document.querySelector("#end");
		endBlock.style.display = "block";

	var restartBtn = document.querySelector("#end button");
	restartBtn.onclick = restart;
}

function restart() {
	location.reload();
}
gamerSkin = "skin_1";

var selectSkin1 = document.querySelector("#skin_1");
selectSkin1.onclick = function() {
	selectSkin1.className = "selected";
	selectSkin2.className = "";
	gamerSkin = "skin_1";
}
var selectSkin2 = document.querySelector("#skin_2");
selectSkin2.onclick = function() {
	selectSkin2.className = "selected";
	selectSkin1.className = "";
	gamerSkin = "skin_2";
}