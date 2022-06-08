function youtubeCalcSlider() {

	var e = document.getElementById("monthRange");
	p = document.getElementById("monthRes"),
		monthBlock = document.getElementById("resPerMonth"),
		yearBlock = document.getElementById("resPerYear"),
		check = document.getElementById("monthRange").value,
		resPerYear = 365 * check, perMonth = 30 * check,
		p.innerHTML = numberWithCommas(e.value),
		monthBlock.innerHTML = numberWithCommas(perMonth, true, false),
		yearBlock.innerHTML = numberWithCommas(resPerYear, true, false);

	var n = document.getElementById("view").value,
		calc = document.getElementById("calcBlock");

	if (minDaily = document.getElementById("minDaily"),
		maxDaily = document.getElementById("maxDaily"),
		minMonthly = document.getElementById("minMonthly"),
		maxMonthly = document.getElementById("maxMonthly"),
		minYarly = document.getElementById("minYarly"),
		maxYarly = document.getElementById("maxYarly"),
		n <= 20)
		var a = .35 + n / 1e3;

	else 0 <= n && n <= 5 ? a = .35 + n / 1e3 :
		6 <= n && n <= 10 ? a = .38 + n / 1e3 :
			11 <= n && n <= 15 ? a = .45 + n / 1e3 :
				16 <= n && n <= 18 ? a = .5 + n / 1e3 :
					19 <= n && n <= 20 ? a = .55 + n / 1e3 :
						21 <= n && n <= 23 ? a = .8 + n / 1e3 :
							24 <= n && n <= 27 ? a = 1 + n / 1e3 :
								28 <= n && n <= 30 ? a = 1.2 + n / 1e3 :
									31 <= n && n <= 33 ? a = 1.4 + n / 1e3 :
										34 <= n && n <= 37 ? a = 1.6 + n / 1e3 :
											38 <= n && n <= 40 ? a = 1.8 + n / 1e3 :
												41 <= n && n <= 43 ? a = 2 + n / 1e3 :
													44 <= n && n <= 47 ? a = 2.2 + n / 1e3 :
														48 <= n && n <= 50 ? a = 2.4 + n / 1e3 :
															51 <= n && n <= 53 ? a = 2.6 + n / 1e3 :
																54 <= n && n <= 57 ? a = 2.8 + n / 1e3 :
																	58 <= n && n <= 60 ? a = 3 + n / 1e3 :
																		61 <= n && n <= 63 ? a = 3.2 + n / 1e3 :
																			64 <= n && n <= 67 ? a = 3.4 + n / 1e3 :
																				68 <= n && n <= 70 ? a = 3.6 + n / 1e3 :
																					71 <= n && n <= 73 ? a = 3.8 + n / 1e3 :
																						74 <= n && n <= 77 ? a = 4 + n / 1e3 :
																							78 <= n && n <= 80 ? a = 4.2 + n / 1e3 :
																								81 <= n && n <= 83 ? a = 4.4 + n / 1e3 :
																									84 <= n && n <= 87 ? a = 4.6 + n / 1e3 :
																										88 <= n && n <= 90 ? a = 4.8 + n / 1e3 :
																											91 <= n && n <= 93 ? a = 5 + n / 1e3 :
																												94 <= n && n <= 97 ? a = 5.2 + n / 1e3 :
																													99 <= n && n <= 100 && (a = 5.4 + n / 1e3);


	ValPercent = .25 * a,
		minValDaily = calc.className.includes('twitch_slider') ? ((a - ValPercent) * check / 1e3) * .7 : (a - ValPercent) * check / 1e3,
		maxValDaily = calc.className.includes('twitch_slider') ? ((a + ValPercent) * check / 1e3) * .7 : (a + ValPercent) * check / 1e3,
		minValMonthly = Math.round(30 * minValDaily),
		maxValMonthly = Math.round(30 * maxValDaily),
		minValYarly = Math.round(365 * minValDaily),
		maxValYarly = Math.round(365 * maxValDaily),
		minDaily.innerHTML = "$" + numberWithCommas(minValDaily.toFixed(2)),
		maxDaily.innerHTML = "$" + numberWithCommas(maxValDaily.toFixed(2)),
		minMonthly.innerHTML = "$" + numberWithCommas(minValMonthly),
		maxMonthly.innerHTML = "$" + numberWithCommas(maxValMonthly),
		minYarly.innerHTML = "$" + numberWithCommas(minValYarly),
		maxYarly.innerHTML = "$" + numberWithCommas(maxValYarly)
}

function numberWithCommas(e) {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}