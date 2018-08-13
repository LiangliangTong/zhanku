;;
(function($){
	$.pag=function(){
		
		function Pagination(){}
		Pagination.prototype={
			constructor:Pagination,
			init:function(){
				this.pag_ele=$(".pagination");
				this.ul=$(".container ul");
				this.page = 1;
				this.loadJson()
				.done(function(res){
					this.list = res.data.list;
                    this.pagination(this.list);
				})
			},
			loadJson:function(){
				var url="http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128&page="+ this.page
				return $.ajax({
					url:url,
					dataType:"jsonp",
					context:this 
				})
			},
			pagination:function(list){
				console.log(list);
				this.pag_ele.pagination(list.length,{
					items_per_page:3,
					callback:function(index){
						console.log(index)
						this.renderItem(index);
					}.bind(this)
				})
			},
			renderItem:function(index){
				var html="";
				for(var i = index * 25  ; i < index * 25 + 25; i++){
					html+=`<li>
                <div class="img-wrap">
                        <img src="${this.list[i].image}">
                </div>
                <div class="detail">
                    <span>￥${this.list[i].price}</span>
                    <span>☆${this.list[i].itemLikes}</span>
                </div>
                <div class="title">
                    <p>${this.list[i].title.replace(/^(.{12}).+/,"$1...")}</p>
                </div>
            </li>`
				}
				this.ul.html(html)
			}
		}
		return Pagination;
	}
	
	
})(jQuery)
