(function() {
	AOS.init();

	let countBox = document.querySelector('#view_cnt');
	let count = 0;
	let num = 400000;

	let counting = setInterval(function () {
		count = ("" + count).replaceAll(",", "");
		//console.log(count, num);
		if (Number(count) >= num) {
			count = '40K';
			countBox.innerHTML = '40K';
			clearInterval(counting);
		} else {
			count = Number(count)+ 1111;
			count = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		countBox.innerHTML = count;
	}, 10);

	let countBox2 = document.querySelector('#person_cnt');
	let count2 = 0;
	let num2 = 98;

	let counting2 = setInterval(function () {
		count2 = ("" + count2).replace("%", "");
		if (Number(count2) >= num2) {
			count2 = '98';
			countBox2.innerHTML = '98';
			clearInterval(counting2);

		} else {
			count2 = Number(count2)+ 1;
			count2 = count2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
		countBox2.innerHTML = count2 + '%';

	}, 10);

	let countBox3 = document.querySelector('#popup_cnt');
	let count3 = 0;
	let num3 = 13283;

	let counting3 = setInterval(function () {
		count3 = ("" + count3).replace(/[^0-9]/g, "");
		if (Number(count3) >= num3) {
			count3 = '13,283';
			countBox3.innerHTML = '13,283';
			clearInterval(counting3);

		} else {
			count3 = Number(count3)+ 111;
			count3 = count3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
		countBox3.innerHTML = count3 + '명';

	}, 10);

})()

function fnRegist() {
	$('#loginModal').modal('hide');
	$('#registerModal').modal('show');
}

function fnLogin() {
	console.log(fnChkNvl('login_id'));
	if(fnChkNvl('login_id') == '') {
		alert('ID를 입력해주세요!');
		return false;
	}
	
	if(fnChkNvl('login_pwd') == '') {
		alert('Password를 입력해주세요!');
		return false;
	}

	alert('일치하지 않는 ID/Password 입니다. 회원가입 요청 후 다시 시도해주세요!');
	
}

function fnChkNvl(obj, defVal) {
	var val = $('#' + obj).val();

	if(val == null || val == undefined || val == '') {
		if(defVal == null || defVal == undefined || defVal == '') {
			return '';
		} else {
			return defVal;
		}
	}
}