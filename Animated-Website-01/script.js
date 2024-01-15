let circle = document.querySelector('#circle');
let blur= document.querySelector('#circle-blur');

window.addEventListener("mousemove", function(details){
    let xValue = details.pageX;
    let yValue = details.pageY;

    this.setTimeout(function(){
        circle.style.top = yValue + 'px';
    circle.style.left = xValue + 'px';
    }, 100)
    blur.style.top = yValue + 'px';
    blur.style.left = xValue + 'px'; 
});

$('#down #text h3').textillate({
    autoStart: false,
    in:{
        effect:'fadeInUp',
        delay: 15
    },
    callback: function () {
        gsap.fromTo('#down #text img', {
            opacity:0,
            y:-30,
            duration:2,
            ease: 'Expo.easeInOut'
        }, {
            opacity:1,
            y:0,
        })
    }
});

$('#hero h1').textillate({
    in:{
        effect:'fadeInUp'
    },loop:true,
    out: {
        effect: 'fadeOutRight'
    }
});

gsap.to('.fader', {
    scrollTrigger: {
        trigger:'#down',
        start:'top 8%',
        toggleActions: 'play pause resume reverse',
    }, 
    opacity:0,
    y: -100,
    stagger:0.4,
    duration:2, 
    onComplete: function(){
        $('#down #text h3').textillate('start');
    }
});

gsap.to('.fade-down', {
    scrollTrigger:{
        trigger:'#down',
        start:'top 8%',
        toggleActions:'play pause resume reverse',
    },
    opacity:0,
    y:100,
    stagger:0.4,
    duration:2,
    onComplete: function(){
        $('#down #text h3').textillate('start');
    }
})

