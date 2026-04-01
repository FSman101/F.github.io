// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 初始化图片加载动画
    initImageLoadAnimation();

});



// 初始化图片加载动画
function initImageLoadAnimation() {
    const images = document.querySelectorAll('img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    images.forEach(image => {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.9)';
        image.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(image);
    });
}



// 初始化内容模块动画
function initModuleAnimation() {
    const modules = document.querySelectorAll('.content-module');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    modules.forEach(module => {
        module.style.opacity = '0';
        module.style.transform = 'translateY(30px)';
        module.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(module);
    });
}

// 初始化内容模块动画
window.addEventListener('DOMContentLoaded', initModuleAnimation);