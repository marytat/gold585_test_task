$(document).ready(function(){

	$(".grid__more-btn").click(function(e){
		e.preventDefault();
		$.getJSON('data.json', function(data) {
                for(var i=0;i<data.items.length;i++) {
                    $('.grid').append('<div class="grid__item col-xs-6 col-sm-4"><a href="' + data.items[i].link + '"><img class="grid__item-img" src="' + data.items[i].img + '" alt="pic"/></a><div class="grid__item-title"><a href="' + data.items[i].link + '">' + data.items[i].title + '</a></div></div>');
                };
    	});
	});

	var $filter_title = $('.filter-title')
		$plus = $('.filter-title__toggle'),
		$filters = $('.filter-hidden')
		$filters_item = $('.filter-hidden__list-item'),
		$filters_check = $('.filter-hidden__check'),
		$filters_check_active = $('.filter-hidden__check_active');

	$filters.hide();

	$filter_title.click(function(){
		$(this).next($filters).toggle();
		$(this).find($plus).toggleClass('filter-title__toggle_active');		
	});

	$filters_item.click(function(){
		$(this).children($filters_check).toggleClass('filter-hidden__check_active');
	});

	$('.filters-clear').click(function(){
		$filters_check.removeClass('filter-hidden__check_active');
	});

});