export const navFilter = document.getElementsByClassName('nav-filter')
export const tabView = document.getElementsByClassName('tab-view')
export const selectFilter = function(){
    $('.nav-filter').click(function(){
        let type = $(this).data("bs-target");
            if(type == 'all'){
                $('.tab-view').fadeOut(0);
                $('.tab-view').fadeIn(500);
                $('.nav-filter').removeClass('active')
                $(this).addClass('active')

            }else{
                $('.tab-view').hide();
                $('.nav-filter').removeClass('active')
                $(this).addClass('active')
                $('#'+type + ".tab-view").fadeIn(500);

            }
        })
    
}
